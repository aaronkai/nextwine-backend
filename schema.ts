import { createSchema, list } from '@keystone-next/keystone/schema';
import {
  text,
  relationship,
  password,
  timestamp,
  select,
  integer,
  decimal,
  float,
} from '@keystone-next/fields';
import 'dotenv/config';
import { cloudinaryImage } from '@keystone-next/cloudinary';

// ToDo: add access controls
// import { isSignedIn, permissions } from '../access';

export const cloudinary = {
  cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  apiKey: process.env.CLOUDINARY_KEY,
  apiSecret: process.env.CLOUDINARY_SECRET,
  folder: 'nextwine',
};

export const lists = createSchema({
  User: list({
    ui: {
      listView: {
        initialColumns: ['name', 'wines'],
      },
    },
    fields: {
      name: text({ isRequired: true }),
      email: text({ isRequired: true, isUnique: true }),
      password: password(),
      wines: relationship({ ref: 'Wine.user', many: true }),
    },
  }),

  Wine: list({
    ui: {
      listView: {
        initialColumns: ['name', 'consumptionDate'],
      },
    },
    fields: {
      name: text({ isRequired: true }),
      region: text({ isRequired: true}),
      notes: text({ isRequired: true}),
      vintner: text({ isRequired: true}),
      price: integer({isRequired: true}),
      vintage: integer({isRequired:true}),
      rating: integer({isRequired:true}),
      // geolocateX: decimal({ 
      //   isRequired: false,
      //   scale: 6,
      //   precision: 10,
      // }),     
      // geolocateY: decimal({ 
      //   isRequired: false,
      //   scale: 6,
      //   precision: 10,
      // }),
      geolocateX: float({ 
        isRequired: false,
      }),     
      geolocateY: float({ 
        isRequired: false,
      }),
      hue: select({
        dataType: 'string',
        options: [
          { label: 'Red', value: 'red' },
          { label: 'White', value: 'white' },
          { label: 'Rose', value: 'rose' },          
        ],
        defaultValue: 'Red',
        isRequired: true,
        ui: { displayMode: 'segmented-control' },
      }),
      carbonation: select({
        dataType: 'string',
        options: [
          { label: 'Still', value: 'still' },
          { label: 'Sparkling', value: 'sparkling' },
        ],
        defaultValue: 'still',
        isRequired: true,
        ui: { displayMode: 'segmented-control' },
      }),
      // ! probably a bug in keystone, this is being passed by UI as string, not int
      // rating: select({
      //   dataType: 'integer',
      //   options: [
      //     { label: 'One Star', value: 1 },
      //     { label: 'Two Stars', value: 2 },
      //     { label: 'Three Stars', value: 3 },
      //   ],
      //   isRequired: true,
      //   ui: { displayMode: 'segmented-control' },
      // }),
      // rating: select({
      //   dataType: 'string',
      //   options: [
      //     { label: 'One Star', value: '1' },
      //     { label: 'Two Stars', value: '2' },
      //     { label: 'Three Stars', value: '3' },
      //   ],
      //   isRequired: true,
      //   ui: { displayMode: 'segmented-control' },
      // }),
      consumptionDate: timestamp({isRequired:true}),
      user: relationship({
        ref: 'User.wines',
        many: false,
        defaultValue: ({ context }) => ({
          connect: { id: context.session.itemId},
        })

        // ui: {
        //   displayMode: 'cards',
        //   cardFields: ['name', 'email'],
        //   inlineEdit: { fields: ['name', 'email'] },
        //   linkToItem: true,
        //   inlineCreate: { fields: ['name', 'email'] },
        // },
      }),
      image: relationship({
        ref: 'WineImage.wine',
        ui: {
          displayMode: 'cards',
          cardFields: ['image', 'altText'],
          inlineCreate: { fields: ['image', 'altText'] },
          inlineEdit: { fields: ['image', 'altText'] },
        },
      })
    },
  }),


  WineImage: list({
    // access: {
    //   create: isSignedIn,
    //   read: () => true,
    //   update: permissions.canManageProducts,
    //   delete: permissions.canManageProducts,
    // },
    fields: {
      image: cloudinaryImage({
        cloudinary,
        label: 'Source',
      }),
      altText: text(),
      wine: relationship({ ref: 'Wine.image' }),
    },
    ui: {
      listView: {
        initialColumns: ['image', 'altText', 'wine'],
      },
    },
  }),

  // *This is just boilerplate to use as reference. Clean up later
    // Post: list({
  //   fields: {
  //     title: text(),
  //     status: select({
  //       options: [
  //         { label: 'Published', value: 'published' },
  //         { label: 'Draft', value: 'draft' },
  //       ],
  //       ui: {
  //         displayMode: 'segmented-control',
  //       },
  //     }),
  //     content: document({
  //       formatting: true,
  //       layouts: [
  //         [1, 1],
  //         [1, 1, 1],
  //         [2, 1],
  //         [1, 2],
  //         [1, 2, 1],
  //       ],
  //       links: true,
  //       dividers: true,
  //     }),
  //     publishDate: timestamp(),
  //     author: relationship({
  //       ref: 'User.posts',
  //       ui: {
  //         displayMode: 'cards',
  //         cardFields: ['name', 'email'],
  //         inlineEdit: { fields: ['name', 'email'] },
  //         linkToItem: true,
  //         inlineCreate: { fields: ['name', 'email'] },
  //       },
  //     }),
  //     tags: relationship({
  //       ref: 'Tag.posts',
  //       ui: {
  //         displayMode: 'cards',
  //         cardFields: ['name'],
  //         inlineEdit: { fields: ['name'] },
  //         linkToItem: true,
  //         inlineConnect: true,
  //         inlineCreate: { fields: ['name'] },
  //       },
  //       many: true,
  //     }),
  //   },
  // }),
  // Tag: list({
  //   ui: {
  //     isHidden: true,
  //   },
  //   fields: {
  //     name: text(),
  //     posts: relationship({
  //       ref: 'Post.tags',
  //       many: true,
  //     }),
  //   },
  // }),
});