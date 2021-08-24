export default {
    cms_manual_init: true,
    backend: {
      name: 'github',
      repo: 'Suraj-Quilt/sphere-brochure-dev',
      branch: 'main',
    },
    media_folder: 'public/img',
    public_folder: 'img',
    collections: [
      {
        name: 'pages',
        label: 'Pages',
        files: [
          {
            label: 'Home',
            name: 'home',
            file: 'content/pages/home.md',
            fields: [
              {
                label: 'Hero Title',
                name: 'hero_title',
                widget: 'string',
              },
              {
                label: 'Hero Description',
                name: 'hero_description',
                widget: 'markdown',
              },
              {
                label: 'Hero Image',
                name: 'hero_image',
                widget: 'image',
              },
            ],
          },
          {
            label: 'About',
            name: 'about',
            file: 'content/pages/about.md',
            fields: [
              {
                label: 'About',
                name: 'about',
                widget: 'string',
              },
              {
                label: 'About Image',
                name: 'about_image',
                widget: 'image',
              },
            ],
          },
        ],
      },
    ],
  };