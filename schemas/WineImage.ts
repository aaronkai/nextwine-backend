import { list } from "@keystone-next/keystone/schema";

import { text, relationship } from "@keystone-next/fields";
import "dotenv/config";
import { cloudinaryImage } from "@keystone-next/cloudinary";
import { isSignedIn, permissions } from "../access";

export const cloudinary = {
  cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  apiKey: process.env.CLOUDINARY_KEY,
  apiSecret: process.env.CLOUDINARY_SECRET,
  folder: "nextwine",
};

export const WineImage = list({
  access: {
    create: isSignedIn,
    read: () => true,
    update: permissions.canManageWines,
    delete: permissions.canManageWines,
  },
  fields: {
    image: cloudinaryImage({
      cloudinary,
      label: "Source",
    }),
    altText: text(),
    wine: relationship({ ref: "Wine.image" }),
  },
  ui: {
    listView: {
      initialColumns: ["image", "altText", "wine"],
    },
  },
});
