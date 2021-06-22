import "dotenv/config";
import { config, createSchema } from "@keystone-next/keystone/schema";
import {
  statelessSessions,
  withItemData,
} from "@keystone-next/keystone/session";
import { createAuth } from "@keystone-next/auth";
import { permissionsList } from "./schemas/fields";
import { User } from "./schemas/User";
import { Role } from "./schemas/Role";
import { Wine } from "./schemas/Wine";
import { WineImage } from "./schemas/WineImage";

let sessionSecret = process.env.SESSION_SECRET;


if (!sessionSecret) {
  if (process.env.NODE_ENV === "production") {
    throw new Error(
      "The SESSION_SECRET environment variable must be set in production"
    );
  } else {
    sessionSecret = "This can be anything, anything in the world";
  }
}

const auth = createAuth({
  listKey: "User",
  identityField: "email",
  secretField: "password",
  initFirstItem: {
    fields: ["name", "email", "password"],
  },
});


let frontendURL;
let dbURL;

// Set correct env variables
if (process.env.NODE_ENV === "production") {
  frontendURL = process.env.FRONTEND_URL_PROD;
} else {
  frontendURL = process.env.FRONTEND_URL_DEV;
}

if (process.env.NODE_ENV === "production") {
  dbURL = process.env.DB_URL_PROD;
} else {
  dbURL = process.env.DB_URL_DEV;
}

console.log(`node env is: ${process.env.NODE_ENV}`);
console.log(`database is: ${frontendURL}`);
console.log(`Allowing connections from ${frontendURL}`);

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // How long they stay signed in?
  secret: process.env.SESSION_SECRET,
};

export default auth.withAuth(
  config({
    // @ts-ignore
    server: {
      cors: {
        origin: [frontendURL],
        credentials: true,
      },
    },
    db: {
      adapter: process.env.POSTGRES_ADAPTER,
      url: dbURL,
      async onConnect(keystone){
        console.log('Connected to the database')
        if(process.argv.includes('--seed-data')) {
          await insertSeedData(keystone);
        }
      }
    },
    ui: {
      isAccessAllowed: (context) => !!context.session?.data,
    },
    lists: createSchema({
      User,
      Role,
      Wine,
      WineImage,
    }),
    session: withItemData(statelessSessions(sessionConfig), {
      User: `id name email role { ${permissionsList.join(" ")} }`,
      // User: `name`,
    }),
  })
);
