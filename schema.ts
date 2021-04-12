import { createSchema, list } from '@keystone-next/keystone/schema';
import {
  text,
  relationship,
  password,
  timestamp,
  select,
  integer,
} from '@keystone-next/fields';

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
      wines: relationship({ ref: 'Wine.drinker', many: true }),
    },
  }),
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
  Wine: list({
    ui: {
      listView: {
        initialColumns: ['name', 'posts'],
      },
    },
    fields: {
      name: text({ isRequired: true }),
      region: text({ isRequired: true}),
      notes: text({ isRequired: true}),
      vintner: text({ isRequired: true}),
      hue: text({ isRequired: true}),
      carbonation: text({ isRequired: true}),
      price: integer({isRequired: true}),
      rating: integer({isRequired:true}),
      vintage: integer({isRequired:true}),
      consumptionDate: timestamp({isRequired:true}),
      drinker: relationship({
              ref: 'User.wines',
              ui: {
                displayMode: 'cards',
                cardFields: ['name', 'email'],
                inlineEdit: { fields: ['name', 'email'] },
                linkToItem: true,
                inlineCreate: { fields: ['name', 'email'] },
              },
            }),
    },
  }),
});
