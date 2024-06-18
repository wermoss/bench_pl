// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type ArticleDocumentDataSlicesSlice =
  | ArticleTitleSlice
  | PhotoSlice
  | RichTextSlice;

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
   * testrel field in *Article*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: article.testrel
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  testrel: prismic.ContentRelationshipField<"caregory">;

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

/**
 * Content for Blog documents
 */
interface BlogDocumentData {
  /**
   * Title field in *Blog*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Subtitle field in *Blog*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.subtitle
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  subtitle: prismic.KeyTextField;
}

/**
 * Blog document from Prismic
 *
 * - **API ID**: `blog`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<BlogDocumentData>, "blog", Lang>;

/**
 * Content for Caregory documents
 */
interface CaregoryDocumentData {
  /**
   * Name field in *Caregory*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: caregory.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Description field in *Caregory*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: caregory.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;
}

/**
 * Caregory document from Prismic
 *
 * - **API ID**: `caregory`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type CaregoryDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<CaregoryDocumentData>,
    "caregory",
    Lang
  >;

/**
 * Item in *FAQ → Questions*
 */
export interface FaqDocumentDataQuestionsItem {
  /**
   * Question field in *FAQ → Questions*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: faq.questions[].question
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  question: prismic.KeyTextField;

  /**
   * Answer field in *FAQ → Questions*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: faq.questions[].answer
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  answer: prismic.KeyTextField;
}

/**
 * Content for FAQ documents
 */
interface FaqDocumentData {
  /**
   * Start field in *FAQ*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: faq.start
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  start: prismic.NumberField;

  /**
   * Show More field in *FAQ*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: faq.show_more
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  show_more: prismic.NumberField;

  /**
   * Title field in *FAQ*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: faq.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Questions field in *FAQ*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: faq.questions[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  questions: prismic.GroupField<Simplify<FaqDocumentDataQuestionsItem>>;
}

/**
 * FAQ document from Prismic
 *
 * - **API ID**: `faq`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FaqDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<FaqDocumentData>, "faq", Lang>;

type PageDocumentDataSlicesSlice = MainTextSlice | PhotoSlice | RichTextSlice;

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
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page.subtitle
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  subtitle: prismic.KeyTextField;

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

type SettingsDocumentDataSlices1Slice = MultiLinkSlice | SimpleLinkSlice;

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

  /**
   * Description field in *Settings → Contacts*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.contacts[].description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;
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
   * Slice Zone field in *Settings*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.slices1[]
   * - **Tab**: Header
   * - **Documentation**: https://prismic.io/docs/field#slices
   */;
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
   * Name field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.name
   * - **Tab**: Form
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  name: prismic.KeyTextField;

  /**
   * Description field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.description
   * - **Tab**: Form
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;
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

/**
 * Item in *Temporary → Service*
 */
export interface TemporaryDocumentDataServiceItem {
  /**
   * Name field in *Temporary → Service*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: temporary.service[].name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Description field in *Temporary → Service*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: temporary.service[].description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Link field in *Temporary → Service*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: temporary.service[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Item in *Temporary → Clients*
 */
export interface TemporaryDocumentDataClientsItem {
  /**
   * Public ID field in *Temporary → Clients*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: temporary.clients[].public_id
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  public_id: prismic.KeyTextField;

  /**
   * Link field in *Temporary → Clients*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: temporary.clients[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Alt Text field in *Temporary → Clients*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: temporary.clients[].alt_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  alt_text: prismic.KeyTextField;
}

/**
 * Item in *Temporary → Owners*
 */
export interface TemporaryDocumentDataOwnersItem {
  /**
   * Public ID field in *Temporary → Owners*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: temporary.owners[].public_id
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  public_id: prismic.KeyTextField;

  /**
   * Alt Text field in *Temporary → Owners*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: temporary.owners[].alt_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  alt_text: prismic.KeyTextField;
}

/**
 * Item in *Temporary → Advantage*
 */
export interface TemporaryDocumentDataAdvantageItem {
  /**
   * Icon field in *Temporary → Advantage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: temporary.advantage[].icon
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  icon: prismic.ImageField<never>;

  /**
   * Title field in *Temporary → Advantage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: temporary.advantage[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Description field in *Temporary → Advantage*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: temporary.advantage[].description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;
}

/**
 * Content for Temporary documents
 */
interface TemporaryDocumentData {
  /**
   * Section Title field in *Temporary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: temporary.section_title
   * - **Tab**: Services
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  section_title: prismic.KeyTextField;

  /**
   * Section Subtitle field in *Temporary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: temporary.section_subtitle
   * - **Tab**: Services
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  section_subtitle: prismic.RichTextField;

  /**
   * Service field in *Temporary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: temporary.service[]
   * - **Tab**: Services
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  service: prismic.GroupField<Simplify<TemporaryDocumentDataServiceItem>> /**
   * Clients field in *Temporary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: temporary.clients[]
   * - **Tab**: Cients
   * - **Documentation**: https://prismic.io/docs/field#group
   */;
  clients: prismic.GroupField<Simplify<TemporaryDocumentDataClientsItem>> /**
   * Owners field in *Temporary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: temporary.owners[]
   * - **Tab**: Owners
   * - **Documentation**: https://prismic.io/docs/field#group
   */;
  owners: prismic.GroupField<Simplify<TemporaryDocumentDataOwnersItem>> /**
   * Map Title field in *Temporary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: temporary.map_title
   * - **Tab**: Map
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  map_title: prismic.KeyTextField;

  /**
   * Map Subtitle field in *Temporary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: temporary.map_subtitle
   * - **Tab**: Map
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  map_subtitle: prismic.RichTextField /**
   * Title field in *Temporary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: temporary.title
   * - **Tab**: Advantages
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  title: prismic.KeyTextField;

  /**
   * Advantage field in *Temporary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: temporary.advantage[]
   * - **Tab**: Advantages
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  advantage: prismic.GroupField<Simplify<TemporaryDocumentDataAdvantageItem>>;
}

/**
 * Temporary document from Prismic
 *
 * - **API ID**: `temporary`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type TemporaryDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<TemporaryDocumentData>,
    "temporary",
    Lang
  >;

export type AllDocumentTypes =
  | ArticleDocument
  | BlogDocument
  | CaregoryDocument
  | FaqDocument
  | PageDocument
  | SettingsDocument
  | TemporaryDocument;

/**
 * Primary content in *ArticleTitle → Primary*
 */
export interface ArticleTitleSliceDefaultPrimary {
  /**
   * Title field in *ArticleTitle → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: article_title.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;
}

/**
 * Default variation for ArticleTitle Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ArticleTitleSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ArticleTitleSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ArticleTitle*
 */
type ArticleTitleSliceVariation = ArticleTitleSliceDefault;

/**
 * ArticleTitle Shared Slice
 *
 * - **API ID**: `article_title`
 * - **Description**: ArticleTitle
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ArticleTitleSlice = prismic.SharedSlice<
  "article_title",
  ArticleTitleSliceVariation
>;

/**
 * Primary content in *MainText → Primary*
 */
export interface MainTextSliceDefaultPrimary {
  /**
   * Title field in *MainText → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: main_text.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Subtitle field in *MainText → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: main_text.primary.subtitle
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  subtitle: prismic.RichTextField;

  /**
   * Titleh1 field in *MainText → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: main_text.primary.titleh1
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  titleh1: prismic.RichTextField;
}

/**
 * Default variation for MainText Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MainTextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<MainTextSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *MainText*
 */
type MainTextSliceVariation = MainTextSliceDefault;

/**
 * MainText Shared Slice
 *
 * - **API ID**: `main_text`
 * - **Description**: MainText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MainTextSlice = prismic.SharedSlice<
  "main_text",
  MainTextSliceVariation
>;

/**
 * Primary content in *MultiLink → Primary*
 */
export interface MultiLinkSliceDefaultPrimary {
  /**
   * Active Label field in *MultiLink → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: multi_link.primary.active_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  active_label: prismic.KeyTextField;

  /**
   * Links field in *MultiLink → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: multi_link.primary.links[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  links: prismic.GroupField<Simplify<MultiLinkDocumentDataLinksItem>>;
}

/**
 * Default variation for MultiLink Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MultiLinkSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<MultiLinkSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *MultiLink*
 */
type MultiLinkSliceVariation = MultiLinkSliceDefault;

/**
 * MultiLink Shared Slice
 *
 * - **API ID**: `multi_link`
 * - **Description**: MultiLink
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MultiLinkSlice = prismic.SharedSlice<
  "multi_link",
  MultiLinkSliceVariation
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
 * Primary content in *SimpleLink → Primary*
 */
export interface SimpleLinkSliceDefaultPrimary {
  /**
   * Label field in *SimpleLink → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: simple_link.primary.label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * Link field in *SimpleLink → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: simple_link.primary.link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Default variation for SimpleLink Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SimpleLinkSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<SimpleLinkSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *SimpleLink*
 */
type SimpleLinkSliceVariation = SimpleLinkSliceDefault;

/**
 * SimpleLink Shared Slice
 *
 * - **API ID**: `simple_link`
 * - **Description**: SimpleLink
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SimpleLinkSlice = prismic.SharedSlice<
  "simple_link",
  SimpleLinkSliceVariation
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
      BlogDocument,
      BlogDocumentData,
      CaregoryDocument,
      CaregoryDocumentData,
      FaqDocument,
      FaqDocumentData,
      FaqDocumentDataQuestionsItem,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      SettingsDocument,
      SettingsDocumentData,
      SettingsDocumentDataSlices1Slice,
      SettingsDocumentDataContactsItem,
      TemporaryDocument,
      TemporaryDocumentData,
      TemporaryDocumentDataServiceItem,
      TemporaryDocumentDataClientsItem,
      TemporaryDocumentDataOwnersItem,
      TemporaryDocumentDataAdvantageItem,
      AllDocumentTypes,
      ArticleTitleSlice,
      ArticleTitleSliceDefaultPrimary,
      ArticleTitleSliceVariation,
      ArticleTitleSliceDefault,
      MainTextSlice,
      MainTextSliceDefaultPrimary,
      MainTextSliceVariation,
      MainTextSliceDefault,
      MultiLinkSlice,
      MultiLinkDocumentDataLinksItem,
      MultiLinkSliceDefaultPrimary,
      MultiLinkSliceVariation,
      MultiLinkSliceDefault,
      PhotoSlice,
      PhotoSliceDefaultPrimary,
      PhotoSliceVariation,
      PhotoSliceDefault,
      RichTextSlice,
      RichTextSliceDefaultPrimary,
      RichTextSliceVariation,
      RichTextSliceDefault,
      SimpleLinkSlice,
      SimpleLinkSliceDefaultPrimary,
      SimpleLinkSliceVariation,
      SimpleLinkSliceDefault,
      TitleSlice,
      TitleSliceDefaultPrimary,
      TitleSliceVariation,
      TitleSliceDefault,
    };
  }
}
