import { permissionsList } from "./schemas/fields";
import { ListAccessArgs } from "./types";

// At it's simplest, the access control returns a yes or no value depending on the users session
export function isSignedIn({ session }: ListAccessArgs) {
  return !!session;
}

//ROLE-based permission functions
//This function grabs the role based functions from fields.ts
//and checks them against the users role found in the session object
const generatedPermissions = Object.fromEntries(
  permissionsList.map((permission) => [
    permission,
    function ({ session }: ListAccessArgs) {
      return !!session?.data.role?.[permission];
    },
  ])
);

// Permissions check if someone meets a criteria - yes or no.
export const permissions = {
  ...generatedPermissions,
};

// Rule based function
// Rules can return a boolean - yes or no - or a filter which limits which products they can CRUD.
export const rules = {
  canManageWines({ session }: ListAccessArgs) {
    console.log(`canManageWines ${session}`);
    if (!isSignedIn({ session })) {
      return false;
    }
    // 1. Do they have the permission of canManageWine
    if (permissions.canManageWines({ session })) {
      return true;
    }
    // 2. If not, do they own this item?
    return { user: { id: session.itemId } };
  },

  canManageUsers({ session }: ListAccessArgs) {
    console.log(`canManageUsers ${session}`);

    if (!isSignedIn({ session })) {
      return false;
    }
    if (permissions.canManageUsers({ session })) {
      return true;
    }
    // Otherwise they may only update themselves!
    return { id: session.itemId };
  },
};
