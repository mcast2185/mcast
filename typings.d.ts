type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

export interface Brand extends Base {
  tags: Tags[];
  title: string;
  description: string;
  image: string;
  url: string;
  company: string;
};

export interface Images extends Base {
  _id: string;
  _createdAt: string;
  title: string;
  categories: Categories[];
};

export interface Comment extends Base{
  approved: boolean;
  comment: string;
  email: string;
  name: string;
  post: {
    _ref: string;
    _type: string;
  };
};

interface Author extends Base {
  bio: Block[];
  image: Image;
  name: string;
  slug: Slug;
};

interface Image {
  _type: "image";
  asset: Reference;
};

interface Youtube {
  _type: "youtube";
  asset: Reference;
};

interface Reference {
  _ref: string;
  _type: "reference";
};

interface Slug {
  _type: "slug";
  current: string;
};

export interface Block {
  _key: string;
  _type: "block";
  children: Span[];
  markDefs: any[];
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
};

interface Span {
  _key: string;
  _type: "span";
  marks: string[];
  text: string;
};

interface Categories extends Base {
  description: string;
  title: string;
};

interface Tags extends Base {
  description: string;
  title: string;
  assets: Reference;
};

interface MainImage {
  _type: "image";
  asset: Reference;
};

interface Title {
  _type: "string";
  current: string;
};