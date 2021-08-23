export default {
    cms_manual_init: true,
    backend: {
      name: 'github',
      repo: 'yourname/your-github-repo-name',
      branch: 'main',
    },
    media_folder: 'public',
    public_folder: 'images',
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
            ],
          },
        ],
      },
    ],
  };