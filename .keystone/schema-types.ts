type Scalars = {
  readonly ID: string;
  readonly Boolean: boolean;
  readonly String: string;
  readonly Int: number;
  readonly Float: number;
  readonly JSON: import('@keystone-next/types').JSONValue;
};

export type RoleRelateToOneInput = {
  readonly create?: RoleCreateInput | null;
  readonly connect?: RoleWhereUniqueInput | null;
  readonly disconnect?: RoleWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type WineRelateToManyInput = {
  readonly create?: ReadonlyArray<WineCreateInput | null> | null;
  readonly connect?: ReadonlyArray<WineWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<WineWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type UserWhereInput = {
  readonly AND?: ReadonlyArray<UserWhereInput | null> | null;
  readonly OR?: ReadonlyArray<UserWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_lt?: Scalars['ID'] | null;
  readonly id_lte?: Scalars['ID'] | null;
  readonly id_gt?: Scalars['ID'] | null;
  readonly id_gte?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly email?: Scalars['String'] | null;
  readonly email_not?: Scalars['String'] | null;
  readonly email_contains?: Scalars['String'] | null;
  readonly email_not_contains?: Scalars['String'] | null;
  readonly email_starts_with?: Scalars['String'] | null;
  readonly email_not_starts_with?: Scalars['String'] | null;
  readonly email_ends_with?: Scalars['String'] | null;
  readonly email_not_ends_with?: Scalars['String'] | null;
  readonly email_i?: Scalars['String'] | null;
  readonly email_not_i?: Scalars['String'] | null;
  readonly email_contains_i?: Scalars['String'] | null;
  readonly email_not_contains_i?: Scalars['String'] | null;
  readonly email_starts_with_i?: Scalars['String'] | null;
  readonly email_not_starts_with_i?: Scalars['String'] | null;
  readonly email_ends_with_i?: Scalars['String'] | null;
  readonly email_not_ends_with_i?: Scalars['String'] | null;
  readonly email_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly email_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly password_is_set?: Scalars['Boolean'] | null;
  readonly role?: RoleWhereInput | null;
  readonly role_is_null?: Scalars['Boolean'] | null;
  readonly wines_every?: WineWhereInput | null;
  readonly wines_some?: WineWhereInput | null;
  readonly wines_none?: WineWhereInput | null;
};

export type UserWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortUsersBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'email_ASC'
  | 'email_DESC'
  | 'role_ASC'
  | 'role_DESC'
  | 'wines_ASC'
  | 'wines_DESC';

export type UserUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
  readonly role?: RoleRelateToOneInput | null;
  readonly wines?: WineRelateToManyInput | null;
};

export type UsersUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: UserUpdateInput | null;
};

export type UserCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
  readonly role?: RoleRelateToOneInput | null;
  readonly wines?: WineRelateToManyInput | null;
};

export type UsersCreateInput = {
  readonly data?: UserCreateInput | null;
};

export type UserRelateToManyInput = {
  readonly create?: ReadonlyArray<UserCreateInput | null> | null;
  readonly connect?: ReadonlyArray<UserWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<UserWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type RoleWhereInput = {
  readonly AND?: ReadonlyArray<RoleWhereInput | null> | null;
  readonly OR?: ReadonlyArray<RoleWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_lt?: Scalars['ID'] | null;
  readonly id_lte?: Scalars['ID'] | null;
  readonly id_gt?: Scalars['ID'] | null;
  readonly id_gte?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly canManageWines?: Scalars['Boolean'] | null;
  readonly canManageWines_not?: Scalars['Boolean'] | null;
  readonly canSeeOtherUsers?: Scalars['Boolean'] | null;
  readonly canSeeOtherUsers_not?: Scalars['Boolean'] | null;
  readonly canManageUsers?: Scalars['Boolean'] | null;
  readonly canManageUsers_not?: Scalars['Boolean'] | null;
  readonly canManageRoles?: Scalars['Boolean'] | null;
  readonly canManageRoles_not?: Scalars['Boolean'] | null;
  readonly assignedTo_every?: UserWhereInput | null;
  readonly assignedTo_some?: UserWhereInput | null;
  readonly assignedTo_none?: UserWhereInput | null;
};

export type RoleWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortRolesBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'canManageWines_ASC'
  | 'canManageWines_DESC'
  | 'canSeeOtherUsers_ASC'
  | 'canSeeOtherUsers_DESC'
  | 'canManageUsers_ASC'
  | 'canManageUsers_DESC'
  | 'canManageRoles_ASC'
  | 'canManageRoles_DESC'
  | 'assignedTo_ASC'
  | 'assignedTo_DESC';

export type RoleUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly canManageWines?: Scalars['Boolean'] | null;
  readonly canSeeOtherUsers?: Scalars['Boolean'] | null;
  readonly canManageUsers?: Scalars['Boolean'] | null;
  readonly canManageRoles?: Scalars['Boolean'] | null;
  readonly assignedTo?: UserRelateToManyInput | null;
};

export type RolesUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: RoleUpdateInput | null;
};

export type RoleCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly canManageWines?: Scalars['Boolean'] | null;
  readonly canSeeOtherUsers?: Scalars['Boolean'] | null;
  readonly canManageUsers?: Scalars['Boolean'] | null;
  readonly canManageRoles?: Scalars['Boolean'] | null;
  readonly assignedTo?: UserRelateToManyInput | null;
};

export type RolesCreateInput = {
  readonly data?: RoleCreateInput | null;
};

export type UserRelateToOneInput = {
  readonly create?: UserCreateInput | null;
  readonly connect?: UserWhereUniqueInput | null;
  readonly disconnect?: UserWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type WineImageRelateToOneInput = {
  readonly create?: WineImageCreateInput | null;
  readonly connect?: WineImageWhereUniqueInput | null;
  readonly disconnect?: WineImageWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type WineWhereInput = {
  readonly AND?: ReadonlyArray<WineWhereInput | null> | null;
  readonly OR?: ReadonlyArray<WineWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_lt?: Scalars['ID'] | null;
  readonly id_lte?: Scalars['ID'] | null;
  readonly id_gt?: Scalars['ID'] | null;
  readonly id_gte?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly region?: Scalars['String'] | null;
  readonly region_not?: Scalars['String'] | null;
  readonly region_contains?: Scalars['String'] | null;
  readonly region_not_contains?: Scalars['String'] | null;
  readonly region_starts_with?: Scalars['String'] | null;
  readonly region_not_starts_with?: Scalars['String'] | null;
  readonly region_ends_with?: Scalars['String'] | null;
  readonly region_not_ends_with?: Scalars['String'] | null;
  readonly region_i?: Scalars['String'] | null;
  readonly region_not_i?: Scalars['String'] | null;
  readonly region_contains_i?: Scalars['String'] | null;
  readonly region_not_contains_i?: Scalars['String'] | null;
  readonly region_starts_with_i?: Scalars['String'] | null;
  readonly region_not_starts_with_i?: Scalars['String'] | null;
  readonly region_ends_with_i?: Scalars['String'] | null;
  readonly region_not_ends_with_i?: Scalars['String'] | null;
  readonly region_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly region_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly notes?: Scalars['String'] | null;
  readonly notes_not?: Scalars['String'] | null;
  readonly notes_contains?: Scalars['String'] | null;
  readonly notes_not_contains?: Scalars['String'] | null;
  readonly notes_starts_with?: Scalars['String'] | null;
  readonly notes_not_starts_with?: Scalars['String'] | null;
  readonly notes_ends_with?: Scalars['String'] | null;
  readonly notes_not_ends_with?: Scalars['String'] | null;
  readonly notes_i?: Scalars['String'] | null;
  readonly notes_not_i?: Scalars['String'] | null;
  readonly notes_contains_i?: Scalars['String'] | null;
  readonly notes_not_contains_i?: Scalars['String'] | null;
  readonly notes_starts_with_i?: Scalars['String'] | null;
  readonly notes_not_starts_with_i?: Scalars['String'] | null;
  readonly notes_ends_with_i?: Scalars['String'] | null;
  readonly notes_not_ends_with_i?: Scalars['String'] | null;
  readonly notes_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly notes_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly vintner?: Scalars['String'] | null;
  readonly vintner_not?: Scalars['String'] | null;
  readonly vintner_contains?: Scalars['String'] | null;
  readonly vintner_not_contains?: Scalars['String'] | null;
  readonly vintner_starts_with?: Scalars['String'] | null;
  readonly vintner_not_starts_with?: Scalars['String'] | null;
  readonly vintner_ends_with?: Scalars['String'] | null;
  readonly vintner_not_ends_with?: Scalars['String'] | null;
  readonly vintner_i?: Scalars['String'] | null;
  readonly vintner_not_i?: Scalars['String'] | null;
  readonly vintner_contains_i?: Scalars['String'] | null;
  readonly vintner_not_contains_i?: Scalars['String'] | null;
  readonly vintner_starts_with_i?: Scalars['String'] | null;
  readonly vintner_not_starts_with_i?: Scalars['String'] | null;
  readonly vintner_ends_with_i?: Scalars['String'] | null;
  readonly vintner_not_ends_with_i?: Scalars['String'] | null;
  readonly vintner_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly vintner_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly price?: Scalars['Int'] | null;
  readonly price_not?: Scalars['Int'] | null;
  readonly price_lt?: Scalars['Int'] | null;
  readonly price_lte?: Scalars['Int'] | null;
  readonly price_gt?: Scalars['Int'] | null;
  readonly price_gte?: Scalars['Int'] | null;
  readonly price_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly price_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly vintage?: Scalars['Int'] | null;
  readonly vintage_not?: Scalars['Int'] | null;
  readonly vintage_lt?: Scalars['Int'] | null;
  readonly vintage_lte?: Scalars['Int'] | null;
  readonly vintage_gt?: Scalars['Int'] | null;
  readonly vintage_gte?: Scalars['Int'] | null;
  readonly vintage_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly vintage_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly hue?: Scalars['String'] | null;
  readonly hue_not?: Scalars['String'] | null;
  readonly hue_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly hue_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly carbonation?: Scalars['String'] | null;
  readonly carbonation_not?: Scalars['String'] | null;
  readonly carbonation_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly carbonation_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly rating?: Scalars['Int'] | null;
  readonly rating_not?: Scalars['Int'] | null;
  readonly rating_lt?: Scalars['Int'] | null;
  readonly rating_lte?: Scalars['Int'] | null;
  readonly rating_gt?: Scalars['Int'] | null;
  readonly rating_gte?: Scalars['Int'] | null;
  readonly rating_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly rating_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly sweetness?: Scalars['Int'] | null;
  readonly sweetness_not?: Scalars['Int'] | null;
  readonly sweetness_lt?: Scalars['Int'] | null;
  readonly sweetness_lte?: Scalars['Int'] | null;
  readonly sweetness_gt?: Scalars['Int'] | null;
  readonly sweetness_gte?: Scalars['Int'] | null;
  readonly sweetness_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly sweetness_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly acidity?: Scalars['Int'] | null;
  readonly acidity_not?: Scalars['Int'] | null;
  readonly acidity_lt?: Scalars['Int'] | null;
  readonly acidity_lte?: Scalars['Int'] | null;
  readonly acidity_gt?: Scalars['Int'] | null;
  readonly acidity_gte?: Scalars['Int'] | null;
  readonly acidity_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly acidity_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly tannins?: Scalars['Int'] | null;
  readonly tannins_not?: Scalars['Int'] | null;
  readonly tannins_lt?: Scalars['Int'] | null;
  readonly tannins_lte?: Scalars['Int'] | null;
  readonly tannins_gt?: Scalars['Int'] | null;
  readonly tannins_gte?: Scalars['Int'] | null;
  readonly tannins_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly tannins_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly alcohol?: Scalars['Int'] | null;
  readonly alcohol_not?: Scalars['Int'] | null;
  readonly alcohol_lt?: Scalars['Int'] | null;
  readonly alcohol_lte?: Scalars['Int'] | null;
  readonly alcohol_gt?: Scalars['Int'] | null;
  readonly alcohol_gte?: Scalars['Int'] | null;
  readonly alcohol_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly alcohol_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly body?: Scalars['Int'] | null;
  readonly body_not?: Scalars['Int'] | null;
  readonly body_lt?: Scalars['Int'] | null;
  readonly body_lte?: Scalars['Int'] | null;
  readonly body_gt?: Scalars['Int'] | null;
  readonly body_gte?: Scalars['Int'] | null;
  readonly body_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly body_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly redFruit?: Scalars['Boolean'] | null;
  readonly redFruit_not?: Scalars['Boolean'] | null;
  readonly blackFruit?: Scalars['Boolean'] | null;
  readonly blackFruit_not?: Scalars['Boolean'] | null;
  readonly floral?: Scalars['Boolean'] | null;
  readonly floral_not?: Scalars['Boolean'] | null;
  readonly herbacious?: Scalars['Boolean'] | null;
  readonly herbacious_not?: Scalars['Boolean'] | null;
  readonly earth?: Scalars['Boolean'] | null;
  readonly earth_not?: Scalars['Boolean'] | null;
  readonly bakingSpice?: Scalars['Boolean'] | null;
  readonly bakingSpice_not?: Scalars['Boolean'] | null;
  readonly leather?: Scalars['Boolean'] | null;
  readonly leather_not?: Scalars['Boolean'] | null;
  readonly citrusFruit?: Scalars['Boolean'] | null;
  readonly citrusFruit_not?: Scalars['Boolean'] | null;
  readonly stoneFruit?: Scalars['Boolean'] | null;
  readonly stoneFruit_not?: Scalars['Boolean'] | null;
  readonly tropicalFruit?: Scalars['Boolean'] | null;
  readonly tropicalFruit_not?: Scalars['Boolean'] | null;
  readonly honey?: Scalars['Boolean'] | null;
  readonly honey_not?: Scalars['Boolean'] | null;
  readonly creaminess?: Scalars['Boolean'] | null;
  readonly creaminess_not?: Scalars['Boolean'] | null;
  readonly minerality?: Scalars['Boolean'] | null;
  readonly minerality_not?: Scalars['Boolean'] | null;
  readonly bitterness?: Scalars['Boolean'] | null;
  readonly bitterness_not?: Scalars['Boolean'] | null;
  readonly herbalOrGreen?: Scalars['Boolean'] | null;
  readonly herbalOrGreen_not?: Scalars['Boolean'] | null;
  readonly whiteFloral?: Scalars['Boolean'] | null;
  readonly whiteFloral_not?: Scalars['Boolean'] | null;
  readonly geolocateX?: Scalars['Float'] | null;
  readonly geolocateX_not?: Scalars['Float'] | null;
  readonly geolocateX_lt?: Scalars['Float'] | null;
  readonly geolocateX_lte?: Scalars['Float'] | null;
  readonly geolocateX_gt?: Scalars['Float'] | null;
  readonly geolocateX_gte?: Scalars['Float'] | null;
  readonly geolocateX_in?: ReadonlyArray<Scalars['Float'] | null> | null;
  readonly geolocateX_not_in?: ReadonlyArray<Scalars['Float'] | null> | null;
  readonly geolocateY?: Scalars['Float'] | null;
  readonly geolocateY_not?: Scalars['Float'] | null;
  readonly geolocateY_lt?: Scalars['Float'] | null;
  readonly geolocateY_lte?: Scalars['Float'] | null;
  readonly geolocateY_gt?: Scalars['Float'] | null;
  readonly geolocateY_gte?: Scalars['Float'] | null;
  readonly geolocateY_in?: ReadonlyArray<Scalars['Float'] | null> | null;
  readonly geolocateY_not_in?: ReadonlyArray<Scalars['Float'] | null> | null;
  readonly consumptionDate?: Scalars['String'] | null;
  readonly consumptionDate_not?: Scalars['String'] | null;
  readonly consumptionDate_lt?: Scalars['String'] | null;
  readonly consumptionDate_lte?: Scalars['String'] | null;
  readonly consumptionDate_gt?: Scalars['String'] | null;
  readonly consumptionDate_gte?: Scalars['String'] | null;
  readonly consumptionDate_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly consumptionDate_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly user?: UserWhereInput | null;
  readonly user_is_null?: Scalars['Boolean'] | null;
  readonly image?: WineImageWhereInput | null;
  readonly image_is_null?: Scalars['Boolean'] | null;
};

export type WineWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortWinesBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'region_ASC'
  | 'region_DESC'
  | 'notes_ASC'
  | 'notes_DESC'
  | 'vintner_ASC'
  | 'vintner_DESC'
  | 'price_ASC'
  | 'price_DESC'
  | 'vintage_ASC'
  | 'vintage_DESC'
  | 'hue_ASC'
  | 'hue_DESC'
  | 'carbonation_ASC'
  | 'carbonation_DESC'
  | 'rating_ASC'
  | 'rating_DESC'
  | 'sweetness_ASC'
  | 'sweetness_DESC'
  | 'acidity_ASC'
  | 'acidity_DESC'
  | 'tannins_ASC'
  | 'tannins_DESC'
  | 'alcohol_ASC'
  | 'alcohol_DESC'
  | 'body_ASC'
  | 'body_DESC'
  | 'redFruit_ASC'
  | 'redFruit_DESC'
  | 'blackFruit_ASC'
  | 'blackFruit_DESC'
  | 'floral_ASC'
  | 'floral_DESC'
  | 'herbacious_ASC'
  | 'herbacious_DESC'
  | 'earth_ASC'
  | 'earth_DESC'
  | 'bakingSpice_ASC'
  | 'bakingSpice_DESC'
  | 'leather_ASC'
  | 'leather_DESC'
  | 'citrusFruit_ASC'
  | 'citrusFruit_DESC'
  | 'stoneFruit_ASC'
  | 'stoneFruit_DESC'
  | 'tropicalFruit_ASC'
  | 'tropicalFruit_DESC'
  | 'honey_ASC'
  | 'honey_DESC'
  | 'creaminess_ASC'
  | 'creaminess_DESC'
  | 'minerality_ASC'
  | 'minerality_DESC'
  | 'bitterness_ASC'
  | 'bitterness_DESC'
  | 'herbalOrGreen_ASC'
  | 'herbalOrGreen_DESC'
  | 'whiteFloral_ASC'
  | 'whiteFloral_DESC'
  | 'geolocateX_ASC'
  | 'geolocateX_DESC'
  | 'geolocateY_ASC'
  | 'geolocateY_DESC'
  | 'consumptionDate_ASC'
  | 'consumptionDate_DESC'
  | 'user_ASC'
  | 'user_DESC'
  | 'image_ASC'
  | 'image_DESC';

export type WineUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly region?: Scalars['String'] | null;
  readonly notes?: Scalars['String'] | null;
  readonly vintner?: Scalars['String'] | null;
  readonly price?: Scalars['Int'] | null;
  readonly vintage?: Scalars['Int'] | null;
  readonly hue?: Scalars['String'] | null;
  readonly carbonation?: Scalars['String'] | null;
  readonly rating?: Scalars['Int'] | null;
  readonly sweetness?: Scalars['Int'] | null;
  readonly acidity?: Scalars['Int'] | null;
  readonly tannins?: Scalars['Int'] | null;
  readonly alcohol?: Scalars['Int'] | null;
  readonly body?: Scalars['Int'] | null;
  readonly redFruit?: Scalars['Boolean'] | null;
  readonly blackFruit?: Scalars['Boolean'] | null;
  readonly floral?: Scalars['Boolean'] | null;
  readonly herbacious?: Scalars['Boolean'] | null;
  readonly earth?: Scalars['Boolean'] | null;
  readonly bakingSpice?: Scalars['Boolean'] | null;
  readonly leather?: Scalars['Boolean'] | null;
  readonly citrusFruit?: Scalars['Boolean'] | null;
  readonly stoneFruit?: Scalars['Boolean'] | null;
  readonly tropicalFruit?: Scalars['Boolean'] | null;
  readonly honey?: Scalars['Boolean'] | null;
  readonly creaminess?: Scalars['Boolean'] | null;
  readonly minerality?: Scalars['Boolean'] | null;
  readonly bitterness?: Scalars['Boolean'] | null;
  readonly herbalOrGreen?: Scalars['Boolean'] | null;
  readonly whiteFloral?: Scalars['Boolean'] | null;
  readonly geolocateX?: Scalars['Float'] | null;
  readonly geolocateY?: Scalars['Float'] | null;
  readonly consumptionDate?: Scalars['String'] | null;
  readonly user?: UserRelateToOneInput | null;
  readonly image?: WineImageRelateToOneInput | null;
};

export type WinesUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: WineUpdateInput | null;
};

export type WineCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly region?: Scalars['String'] | null;
  readonly notes?: Scalars['String'] | null;
  readonly vintner?: Scalars['String'] | null;
  readonly price?: Scalars['Int'] | null;
  readonly vintage?: Scalars['Int'] | null;
  readonly hue?: Scalars['String'] | null;
  readonly carbonation?: Scalars['String'] | null;
  readonly rating?: Scalars['Int'] | null;
  readonly sweetness?: Scalars['Int'] | null;
  readonly acidity?: Scalars['Int'] | null;
  readonly tannins?: Scalars['Int'] | null;
  readonly alcohol?: Scalars['Int'] | null;
  readonly body?: Scalars['Int'] | null;
  readonly redFruit?: Scalars['Boolean'] | null;
  readonly blackFruit?: Scalars['Boolean'] | null;
  readonly floral?: Scalars['Boolean'] | null;
  readonly herbacious?: Scalars['Boolean'] | null;
  readonly earth?: Scalars['Boolean'] | null;
  readonly bakingSpice?: Scalars['Boolean'] | null;
  readonly leather?: Scalars['Boolean'] | null;
  readonly citrusFruit?: Scalars['Boolean'] | null;
  readonly stoneFruit?: Scalars['Boolean'] | null;
  readonly tropicalFruit?: Scalars['Boolean'] | null;
  readonly honey?: Scalars['Boolean'] | null;
  readonly creaminess?: Scalars['Boolean'] | null;
  readonly minerality?: Scalars['Boolean'] | null;
  readonly bitterness?: Scalars['Boolean'] | null;
  readonly herbalOrGreen?: Scalars['Boolean'] | null;
  readonly whiteFloral?: Scalars['Boolean'] | null;
  readonly geolocateX?: Scalars['Float'] | null;
  readonly geolocateY?: Scalars['Float'] | null;
  readonly consumptionDate?: Scalars['String'] | null;
  readonly user?: UserRelateToOneInput | null;
  readonly image?: WineImageRelateToOneInput | null;
};

export type WinesCreateInput = {
  readonly data?: WineCreateInput | null;
};

export type CloudinaryImageFormat = {
  readonly prettyName?: Scalars['String'] | null;
  readonly width?: Scalars['String'] | null;
  readonly height?: Scalars['String'] | null;
  readonly crop?: Scalars['String'] | null;
  readonly aspect_ratio?: Scalars['String'] | null;
  readonly gravity?: Scalars['String'] | null;
  readonly zoom?: Scalars['String'] | null;
  readonly x?: Scalars['String'] | null;
  readonly y?: Scalars['String'] | null;
  readonly format?: Scalars['String'] | null;
  readonly fetch_format?: Scalars['String'] | null;
  readonly quality?: Scalars['String'] | null;
  readonly radius?: Scalars['String'] | null;
  readonly angle?: Scalars['String'] | null;
  readonly effect?: Scalars['String'] | null;
  readonly opacity?: Scalars['String'] | null;
  readonly border?: Scalars['String'] | null;
  readonly background?: Scalars['String'] | null;
  readonly overlay?: Scalars['String'] | null;
  readonly underlay?: Scalars['String'] | null;
  readonly default_image?: Scalars['String'] | null;
  readonly delay?: Scalars['String'] | null;
  readonly color?: Scalars['String'] | null;
  readonly color_space?: Scalars['String'] | null;
  readonly dpr?: Scalars['String'] | null;
  readonly page?: Scalars['String'] | null;
  readonly density?: Scalars['String'] | null;
  readonly flags?: Scalars['String'] | null;
  readonly transformation?: Scalars['String'] | null;
};

export type WineRelateToOneInput = {
  readonly create?: WineCreateInput | null;
  readonly connect?: WineWhereUniqueInput | null;
  readonly disconnect?: WineWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type WineImageWhereInput = {
  readonly AND?: ReadonlyArray<WineImageWhereInput | null> | null;
  readonly OR?: ReadonlyArray<WineImageWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_lt?: Scalars['ID'] | null;
  readonly id_lte?: Scalars['ID'] | null;
  readonly id_gt?: Scalars['ID'] | null;
  readonly id_gte?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly image?: Scalars['String'] | null;
  readonly image_not?: Scalars['String'] | null;
  readonly image_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly image_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly altText?: Scalars['String'] | null;
  readonly altText_not?: Scalars['String'] | null;
  readonly altText_contains?: Scalars['String'] | null;
  readonly altText_not_contains?: Scalars['String'] | null;
  readonly altText_starts_with?: Scalars['String'] | null;
  readonly altText_not_starts_with?: Scalars['String'] | null;
  readonly altText_ends_with?: Scalars['String'] | null;
  readonly altText_not_ends_with?: Scalars['String'] | null;
  readonly altText_i?: Scalars['String'] | null;
  readonly altText_not_i?: Scalars['String'] | null;
  readonly altText_contains_i?: Scalars['String'] | null;
  readonly altText_not_contains_i?: Scalars['String'] | null;
  readonly altText_starts_with_i?: Scalars['String'] | null;
  readonly altText_not_starts_with_i?: Scalars['String'] | null;
  readonly altText_ends_with_i?: Scalars['String'] | null;
  readonly altText_not_ends_with_i?: Scalars['String'] | null;
  readonly altText_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly altText_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly wine?: WineWhereInput | null;
  readonly wine_is_null?: Scalars['Boolean'] | null;
};

export type WineImageWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortWineImagesBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'altText_ASC'
  | 'altText_DESC'
  | 'wine_ASC'
  | 'wine_DESC';

export type WineImageUpdateInput = {
  readonly image?: any | null;
  readonly altText?: Scalars['String'] | null;
  readonly wine?: WineRelateToOneInput | null;
};

export type WineImagesUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: WineImageUpdateInput | null;
};

export type WineImageCreateInput = {
  readonly image?: any | null;
  readonly altText?: Scalars['String'] | null;
  readonly wine?: WineRelateToOneInput | null;
};

export type WineImagesCreateInput = {
  readonly data?: WineImageCreateInput | null;
};

export type _ksListsMetaInput = {
  readonly key?: Scalars['String'] | null;
  readonly auxiliary?: Scalars['Boolean'] | null;
};

export type _ListSchemaFieldsInput = {
  readonly type?: Scalars['String'] | null;
};

export type PasswordAuthErrorCode =
  | 'FAILURE'
  | 'IDENTITY_NOT_FOUND'
  | 'SECRET_NOT_SET'
  | 'MULTIPLE_IDENTITY_MATCHES'
  | 'SECRET_MISMATCH';

export type CreateInitialUserInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
};

export type KeystoneAdminUIFieldMetaCreateViewFieldMode = 'edit' | 'hidden';

export type KeystoneAdminUIFieldMetaListViewFieldMode = 'read' | 'hidden';

export type KeystoneAdminUIFieldMetaItemViewFieldMode =
  | 'edit'
  | 'read'
  | 'hidden';

export type KeystoneAdminUISortDirection = 'ASC' | 'DESC';

export type UserListTypeInfo = {
  key: 'User';
  fields: 'id' | 'name' | 'email' | 'password' | 'role' | 'wines';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly email?: string | null;
    readonly password?: string | null;
    readonly role?: string | null;
    readonly wines?: string | null;
  };
  inputs: {
    where: UserWhereInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: UserWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortUsersBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type UserListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    UserListTypeInfo,
    UserListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  UserListTypeInfo,
  UserListTypeInfo['fields']
>;

export type RoleListTypeInfo = {
  key: 'Role';
  fields:
    | 'id'
    | 'name'
    | 'canManageWines'
    | 'canSeeOtherUsers'
    | 'canManageUsers'
    | 'canManageRoles'
    | 'assignedTo';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly canManageWines?: boolean | null;
    readonly canSeeOtherUsers?: boolean | null;
    readonly canManageUsers?: boolean | null;
    readonly canManageRoles?: boolean | null;
    readonly assignedTo?: string | null;
  };
  inputs: {
    where: RoleWhereInput;
    create: RoleCreateInput;
    update: RoleUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: RoleWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortRolesBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type RoleListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    RoleListTypeInfo,
    RoleListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  RoleListTypeInfo,
  RoleListTypeInfo['fields']
>;

export type WineListTypeInfo = {
  key: 'Wine';
  fields:
    | 'id'
    | 'name'
    | 'region'
    | 'notes'
    | 'vintner'
    | 'price'
    | 'vintage'
    | 'hue'
    | 'carbonation'
    | 'rating'
    | 'sweetness'
    | 'acidity'
    | 'tannins'
    | 'alcohol'
    | 'body'
    | 'redFruit'
    | 'blackFruit'
    | 'floral'
    | 'herbacious'
    | 'earth'
    | 'bakingSpice'
    | 'leather'
    | 'citrusFruit'
    | 'stoneFruit'
    | 'tropicalFruit'
    | 'honey'
    | 'creaminess'
    | 'minerality'
    | 'bitterness'
    | 'herbalOrGreen'
    | 'whiteFloral'
    | 'geolocateX'
    | 'geolocateY'
    | 'consumptionDate'
    | 'user'
    | 'image';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly region?: string | null;
    readonly notes?: string | null;
    readonly vintner?: string | null;
    readonly price?: number | null;
    readonly vintage?: number | null;
    readonly hue?: string | null;
    readonly carbonation?: string | null;
    readonly rating?: number | null;
    readonly sweetness?: number | null;
    readonly acidity?: number | null;
    readonly tannins?: number | null;
    readonly alcohol?: number | null;
    readonly body?: number | null;
    readonly redFruit?: boolean | null;
    readonly blackFruit?: boolean | null;
    readonly floral?: boolean | null;
    readonly herbacious?: boolean | null;
    readonly earth?: boolean | null;
    readonly bakingSpice?: boolean | null;
    readonly leather?: boolean | null;
    readonly citrusFruit?: boolean | null;
    readonly stoneFruit?: boolean | null;
    readonly tropicalFruit?: boolean | null;
    readonly honey?: boolean | null;
    readonly creaminess?: boolean | null;
    readonly minerality?: boolean | null;
    readonly bitterness?: boolean | null;
    readonly herbalOrGreen?: boolean | null;
    readonly whiteFloral?: boolean | null;
    readonly geolocateX?: number | null;
    readonly geolocateY?: number | null;
    readonly consumptionDate?: Date | null;
    readonly user?: string | null;
    readonly image?: string | null;
  };
  inputs: {
    where: WineWhereInput;
    create: WineCreateInput;
    update: WineUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: WineWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortWinesBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type WineListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    WineListTypeInfo,
    WineListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  WineListTypeInfo,
  WineListTypeInfo['fields']
>;

export type WineImageListTypeInfo = {
  key: 'WineImage';
  fields: 'id' | 'image' | 'altText' | 'wine';
  backing: {
    readonly id: string;
    readonly image?: any;
    readonly altText?: string | null;
    readonly wine?: string | null;
  };
  inputs: {
    where: WineImageWhereInput;
    create: WineImageCreateInput;
    update: WineImageUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: WineImageWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortWineImagesBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type WineImageListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    WineImageListTypeInfo,
    WineImageListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  WineImageListTypeInfo,
  WineImageListTypeInfo['fields']
>;

export type KeystoneListsTypeInfo = {
  readonly User: UserListTypeInfo;
  readonly Role: RoleListTypeInfo;
  readonly Wine: WineListTypeInfo;
  readonly WineImage: WineImageListTypeInfo;
};
