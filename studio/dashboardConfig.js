export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e5febdb42ce0f2f3cb444e9',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-q53jnxb2',
                  apiId: '7f32ee5b-c5ce-448c-b307-187fc9ecb845'
                },
                {
                  buildHookId: '5e5febdc53d5c22b1bba9ab8',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-efob75ej',
                  apiId: '1c8c1cfe-148c-4236-8629-aa17a5faeb28'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alperacabey/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-efob75ej.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
