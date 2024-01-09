type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

export interface Images extends Base {
  _id: string;
  _createdAt: string;
  title: string;
  categories: Categories[];
};



interface Image {
  _type: "image";
  asset: Reference;
};


interface Reference {
  _ref: string;
  _type: "reference";
};

interface Categories extends Base {
  description: string;
  title: string;
};