export default {
    cms_manual_init: true,
    backend: {
      name: 'github',
      repo: 'Suraj-Quilt/sphere-brochure-dev',
      branch: 'main',
      auth_endpoint: 'auth'
    },
    media_folder: 'public/img',
    public_folder: 'img',
    collections: [
      {
        name: 'pages',
        label: 'Sections',
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
                label: 'About Text',
                name: 'about_text',
                widget: 'string',
              },
              {
                label: 'About Image',
                name: 'about_image',
                widget: 'image',
              },
            ],
          },
          {
            label: 'Text Section',
            name: 'text1',
            file: 'content/pages/text1.md',
            fields: [
              {
                label: 'Text',
                name: 'text_1',
                widget: 'string',
              },
            ],
          },
          {
            label: 'Banner',
            name: 'banner',
            file: 'content/pages/banner.md',
            fields: [
              {
                label: 'Banner',
                name: 'banner',
                widget: 'string',
              },
            ],
          },
          {
            label: 'Benefits Carousel',
            name: 'benefits',
            file: 'content/pages/benefits.md',
            fields: [
              {
                label: 'Benefits List',
                name: 'benefits_list',
                widget: 'list',
                fields: [
                  {
                    label: 'Card Heading',
                    name: 'card_heading',
                    widget: 'string',
                  }, 
                  {
                    label: 'Card Body',
                    name: 'card_body',
                    widget: 'string',
                  }, 
                  {
                    label: 'Card Image',
                    name: 'card_image',
                    widget: 'image',
                  }
                ]
              },
            ],
          },
          {
            label: 'Horizontal Card 1',
            name: 'horizontal_1',
            file: 'content/pages/horizontal_1.md',
            fields: [
              {
                label: 'Heading',
                name: 'heading',
                widget: 'string',
              },
              {
                label: 'Body',
                name: 'body',
                widget: 'string',
              },
              {
                label: 'Image',
                name: 'horizontal_image_1',
                widget: 'image',
              },
            ],
          },
          {
            label: 'Horizontal Card 2',
            name: 'horizontal_2',
            file: 'content/pages/horizontal_2.md',
            fields: [
              {
                label: 'Heading',
                name: 'heading',
                widget: 'string',
              },
              {
                label: 'Body',
                name: 'body',
                widget: 'string',
              },
              {
                label: 'Image',
                name: 'horizontal_image_2',
                widget: 'image',
              },
            ],
          },
          {
            label: 'Text with Background',
            name: 'textwbg',
            file: 'content/pages/textwbg.md',
            fields: [
              {
                label: 'Text',
                name: 'text',
                widget: 'string',
              },
            ],
          },
          {
            label: 'Product Info',
            name: 'info',
            file: 'content/pages/info.md',
            fields: [
              {
                label: 'Info',
                name: 'info_list',
                widget: 'list',
                fields: [
                  {
                    label: 'Card Heading',
                    name: 'card_heading',
                    widget: 'string',
                  }, 
                  {
                    label: 'Card Body',
                    name: 'card_body',
                    widget: 'string',
                  }, 
                  {
                    label: 'Card Image',
                    name: 'card_image',
                    widget: 'image',
                  }
                ]
              },
            ],
          },
          {
            label: 'Testimonials',
            name: 'testimonials',
            file: 'content/pages/testimonials.md',
            fields: [
              {
                label: 'Testimonials List',
                name: 'testimonials_list',
                widget: 'list',
                fields: [
                  {
                    label: 'Name',
                    name: 'name',
                    widget: 'string',
                  }, 
                  {
                    label: 'Designation',
                    name: 'designation',
                    widget: 'string',
                  },
                  {
                    label: 'Review',
                    name: 'body',
                    widget: 'string',
                  }, 
                  {
                    label: 'Image',
                    name: 'image',
                    widget: 'image',
                  }
                ]
              },
            ],
          },
        ],
      },
    ],
  };