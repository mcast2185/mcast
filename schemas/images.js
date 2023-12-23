export default {
  name: 'images',
  title: 'Images',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      descrition: "Keep it short and sweet",
      type: 'string',
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'categories'}}],
    },
    {
      name: 'url',
      title: "URL",
      type: "url"
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }
  ],
};