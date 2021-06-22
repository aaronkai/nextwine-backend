import { list } from "@keystone-next/keystone/schema";

import {
  text,
  relationship,
  timestamp,
  select,
  integer,
  float,
  checkbox,
} from "@keystone-next/fields";
import "dotenv/config";
import { isSignedIn, rules } from "../access";

export const Wine = list({
  access: {
    create: () => true,
    read: () => true,
    update: rules.canManageWines,
    delete: rules.canManageWines,
  },
  ui: {
    listView: {
      initialColumns: ["name", "consumptionDate"],
    },
  },
  fields: {
    name: text({ isRequired: true }),
    region: text({ isRequired: true }),
    notes: text({ isRequired: true }),
    vintner: text({ isRequired: true }),
    price: integer({ isRequired: true }),
    vintage: integer({ isRequired: true }),
    hue: select({
      dataType: "string",
      options: [
        { label: "Red", value: "red" },
        { label: "White", value: "white" },
        { label: "Rose", value: "rose" },
      ],
      defaultValue: "Red",
      isRequired: true,
      ui: { displayMode: "segmented-control" },
    }),
    carbonation: select({
      dataType: "string",
      options: [
        { label: "Still", value: "still" },
        { label: "Sparkling", value: "sparkling" },
      ],
      defaultValue: "still",
      isRequired: true,
      ui: { displayMode: "segmented-control" },
    }),

    // general attributes, range 1-5
    rating: integer({ isRequired: true }),
    sweetness: integer({ isRequired: true }),
    acidity: integer({ isRequired: true }),
    tannins: integer({ isRequired: true }),
    alcohol: integer({ isRequired: true }),
    body: integer({ isRequired: true }),

    // red wine attributes
    redFruit: checkbox({
      defaultValue: false,
    }),
    blackFruit: checkbox({
      defaultValue: false,
    }),
    floral: checkbox({
      defaultValue: false,
    }),
    herbacious: checkbox({
      defaultValue: false,
    }),
    earth: checkbox({
      defaultValue: false,
    }),
    bakingSpice: checkbox({
      defaultValue: false,
    }),
    leather: checkbox({
      defaultValue: false,
    }),

    // white wine attributes
    citrusFruit: checkbox({
      defaultValue: false,
    }),
    stoneFruit: checkbox({
      defaultValue: false,
    }),
    tropicalFruit: checkbox({
      defaultValue: false,
    }),
    honey: checkbox({
      defaultValue: false,
    }),
    creaminess: checkbox({
      defaultValue: false,
    }),
    minerality: checkbox({
      defaultValue: false,
    }),
    bitterness: checkbox({
      defaultValue: false,
    }),
    herbalOrGreen: checkbox({
      defaultValue: false,
    }),
    whiteFloral: checkbox({
      defaultValue: false,
    }),

    // geolocation
    geolocateX: float({
      isRequired: false,
    }),
    geolocateY: float({
      isRequired: false,
    }),

    consumptionDate: timestamp({ isRequired: true }),
    user: relationship({
      ref: "User.wines",
      many: false,
      defaultValue: ({ context }) => ({
        connect: { id: context.session.itemId },
      }),
    }),
    image: relationship({
      ref: "WineImage.wine",
      ui: {
        displayMode: "cards",
        cardFields: ["image", "altText"],
        inlineCreate: { fields: ["image", "altText"] },
        inlineEdit: { fields: ["image", "altText"] },
      },
    }),
  },
});
