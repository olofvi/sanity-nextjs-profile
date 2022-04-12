export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '62557df000e2fb0072bb9bc5',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-profile-studio',
                  apiId: '5514e384-2244-4079-9659-485ce044f00f'
                },
                {
                  buildHookId: '62557df05c78c8005d96b1fe',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-profile',
                  apiId: 'd6d747f3-c957-4f79-a5eb-9f56a73d3546'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/olofvi/sanity-nextjs-profile',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-profile.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
