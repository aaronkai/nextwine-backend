import "dotenv/config";
import { config } from "@keystone-next/keystone/schema";
import {
  statelessSessions,
  withItemData,
} from "@keystone-next/keystone/session";
import { createAuth } from "@keystone-next/auth";
import { lists } from "./schema";
import { logging } from "@keystone-next/list-plugins-legacy/";

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

let sessionMaxAge = 60 * 60 * 24 * 30; // 30 days

const auth = createAuth({
  listKey: "User",
  identityField: "email",
  secretField: "password",
  initFirstItem: {
    fields: ["name", "email", "password"],
  },
});

let frontendURL;

if (process.env.NODE_ENV === "production") {
  frontendURL = process.env.FRONTEND_URL_PROD;
} else {
  frontendURL = process.env.FRONTEND_URL_DEV;
}

console.log(`Allowing connections from ${frontendURL}`);

export default auth.withAuth(
  config({
    server: {
      cors: {
        origin: [frontendURL],
        credentials: true,
      },
    },
    db: {
      adapter: process.env.POSTGRES_ADAPTER,
      url: process.env.LOCALHOST_POSTGRES_URL,
      async onConnect(keystone) {
        console.log("Connected to the database");
      },
    },
    ui: {
      isAccessAllowed: (context) => !!context.session?.data,
    },
    lists,
    session: withItemData(
      statelessSessions({
        maxAge: sessionMaxAge,
        secret: sessionSecret,
      }),
      { User: "name" }
    ),
  })
);
