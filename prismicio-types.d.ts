// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type ArticleDocumentDataSlicesSlice = PhotoSlice | RichTextSlice;

/**
 * Content for Article documents
 */
interface ArticleDocumentData {
  /**
   * Title field in *Article*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: article.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Lead field in *Article*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: article.lead
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  lead: prismic.RichTextField;

  /**
   * Photo field in *Article*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: article.photo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  photo: prismic.ImageField<never>;

  /**
   * Slice Zone field in *Article*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: article.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ArticleDocumentDataSlicesSlice> /**
   * Meta Title field in *Article*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: article.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Article*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: article.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Article*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: article.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Article document from Prismic
 *
 * - **API ID**: `article`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ArticleDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ArticleDocumentData>,
    "article",
    Lang
  >;

type PageDocumentDataSlicesSlice =
  | MySpecialSliceSlice
  | TitleSlice
  | PhotoSlice
  | RichTextSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Title field in *Page*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Subtitle field in *Page*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page.subtitle
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  subtitle: prismic.RichTextField;

  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * OG Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

/**
 * Item in *Settings → Links*
 */
export interface SettingsDocumentDataLinksItem {
  /**
   * Label field in *Settings → Links*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.links[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * Link field in *Settings → Links*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.links[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Sublink field in *Settings → Links*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.links[].sublink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  sublink: prismic.LinkField;
}

type SettingsDocumentDataSlices1Slice = SublinksSlice;

/**
 * Item in *Settings → Contacts*
 */
export interface SettingsDocumentDataContactsItem {
  /**
   * Full Name field in *Settings → Contacts*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.contacts[].full_name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  full_name: prismic.KeyTextField;

  /**
   * Phone Number field in *Settings → Contacts*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.contacts[].phone_number
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  phone_number: prismic.KeyTextField;

  /**
   * Email field in *Settings → Contacts*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.contacts[].email
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  email: prismic.KeyTextField;

  /**
   * Photo field in *Settings → Contacts*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.contacts[].photo
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  photo: prismic.KeyTextField;

  /**
   * Alt Text field in *Settings → Contacts*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.contacts[].alt_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  alt_text: prismic.KeyTextField;

  /**
   * Linkedin Profile field in *Settings → Contacts*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.contacts[].linkedin_profile
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  linkedin_profile: prismic.KeyTextField;
}

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
  /**
   * Site Title field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.site_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  site_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.meta_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * OG Image field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.og_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  og_image: prismic.ImageField<never> /**
   * Links field in *Settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.links[]
   * - **Tab**: Header
   * - **Documentation**: https://prismic.io/docs/field#group
   */;
  links: prismic.GroupField<Simplify<SettingsDocumentDataLinksItem>>;

  /**
   * Slice Zone field in *Settings*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.slices1[]
   * - **Tab**: Header
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices1: prismic.SliceZone<SettingsDocumentDataSlices1Slice> /**
   * Section Title field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.section_title
   * - **Tab**: Footer
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  section_title: prismic.KeyTextField;

  /**
   * Section Subtitle field in *Settings*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.section_subtitle
   * - **Tab**: Footer
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  section_subtitle: prismic.RichTextField;

  /**
   * Company Name field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.company_name
   * - **Tab**: Footer
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  company_name: prismic.KeyTextField;

  /**
   * Address field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.address
   * - **Tab**: Footer
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  address: prismic.KeyTextField;

  /**
   * NIP field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.nip
   * - **Tab**: Footer
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  nip: prismic.KeyTextField;

  /**
   * REGON field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.regon
   * - **Tab**: Footer
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  regon: prismic.KeyTextField;

  /**
   * Contacts field in *Settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.contacts[]
   * - **Tab**: Footer
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  contacts: prismic.GroupField<Simplify<SettingsDocumentDataContactsItem>> /**
   * text One field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.text_one
   * - **Tab**: Form
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  text_one: prismic.KeyTextField;

  /**
   * text Two field in *Settings*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.text_two
   * - **Tab**: Form
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text_two: prismic.RichTextField;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;

export type AllDocumentTypes =
  | ArticleDocument
  | PageDocument
  | SettingsDocument;

/**
 * Primary content in *MySpecialSlice → Primary*
 */
export interface MySpecialSliceSliceDefaultPrimary {
  /**
   * test field in *MySpecialSlice → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: my_special_slice.primary.test
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  test: prismic.RichTextField;
}

/**
 * Default variation for MySpecialSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MySpecialSliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<MySpecialSliceSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *MySpecialSlice*
 */
type MySpecialSliceSliceVariation = MySpecialSliceSliceDefault;

/**
 * MySpecialSlice Shared Slice
 *
 * - **API ID**: `my_special_slice`
 * - **Description**: MySpecialSlice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MySpecialSliceSlice = prismic.SharedSlice<
  "my_special_slice",
  MySpecialSliceSliceVariation
>;

/**
 * Primary content in *Photo → Primary*
 */
export interface PhotoSliceDefaultPrimary {
  /**
   * Photo Description field in *Photo → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: photo.primary.photo_description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  photo_description: prismic.RichTextField;

  /**
   * Photo field in *Photo → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: photo.primary.photo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  photo: prismic.ImageField<never>;
}

/**
 * Default variation for Photo Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PhotoSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<PhotoSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Photo*
 */
type PhotoSliceVariation = PhotoSliceDefault;

/**
 * Photo Shared Slice
 *
 * - **API ID**: `photo`
 * - **Description**: Photo
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PhotoSlice = prismic.SharedSlice<"photo", PhotoSliceVariation>;

/**
 * Primary content in *RichText → Primary*
 */
export interface RichTextSliceDefaultPrimary {
  /**
   * Content field in *RichText → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Lorem ipsum...
   * - **API ID Path**: rich_text.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
}

/**
 * Default variation for RichText Slice
 *
 * - **API ID**: `default`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<RichTextSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *RichText*
 */
type RichTextSliceVariation = RichTextSliceDefault;

/**
 * RichText Shared Slice
 *
 * - **API ID**: `rich_text`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSlice = prismic.SharedSlice<
  "rich_text",
  RichTextSliceVariation
>;

/**
 * Default variation for Sublinks Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SublinksSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  never
>;

/**
 * Slice variation for *Sublinks*
 */
type SublinksSliceVariation = SublinksSliceDefault;

/**
 * Sublinks Shared Slice
 *
 * - **API ID**: `sublinks`
 * - **Description**: Sublinks
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SublinksSlice = prismic.SharedSlice<
  "sublinks",
  SublinksSliceVariation
>;

/**
 * Primary content in *Title → Primary*
 */
export interface TitleSliceDefaultPrimary {
  /**
   * Section Title field in *Title → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: title.primary.section_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  section_title: prismic.KeyTextField;

  /**
   * Section Subtitle field in *Title → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: title.primary.section_subtitle
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  section_subtitle: prismic.RichTextField;
}

/**
 * Default variation for Title Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TitleSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TitleSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Title*
 */
type TitleSliceVariation = TitleSliceDefault;

/**
 * Title Shared Slice
 *
 * - **API ID**: `title`
 * - **Description**: Title
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TitleSlice = prismic.SharedSlice<"title", TitleSliceVariation>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      ArticleDocument,
      ArticleDocumentData,
      ArticleDocumentDataSlicesSlice,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      SettingsDocument,
      SettingsDocumentData,
      SettingsDocumentDataLinksItem,
      SettingsDocumentDataSlices1Slice,
      SettingsDocumentDataContactsItem,
      AllDocumentTypes,
      MySpecialSliceSlice,
      MySpecialSliceSliceDefaultPrimary,
      MySpecialSliceSliceVariation,
      MySpecialSliceSliceDefault,
      PhotoSlice,
      PhotoSliceDefaultPrimary,
      PhotoSliceVariation,
      PhotoSliceDefault,
      RichTextSlice,
      RichTextSliceDefaultPrimary,
      RichTextSliceVariation,
      RichTextSliceDefault,
      SublinksSlice,
      SublinksSliceVariation,
      SublinksSliceDefault,
      TitleSlice,
      TitleSliceDefaultPrimary,
      TitleSliceVariation,
      TitleSliceDefault,
    };
  }
}
