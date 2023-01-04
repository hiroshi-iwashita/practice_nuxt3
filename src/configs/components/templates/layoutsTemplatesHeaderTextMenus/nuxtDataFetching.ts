export default ([
  {
    title: 'Nuxt',
    to: '/nuxt/index',
    pullDowns: [
      {
        title: 'Data',
        subMenus: [
          {
            title: 'Form',
            to: '/nuxt/form'
          },
          {
            title: 'Data Fetching',
            to: '/nuxt/dataFetching-users'
          }
        ]
      },
      {
        title: 'Chat',
        subMenus: [
          {
            title: 'Chat',
            to: '/nuxt/chat'
          },
          {
            title: 'test',
            to: '/nuxt/ga'
          }
        ]
      }
    ]
  },
  {
    title: 'Go',
    to: '/go',
    pullDowns:[]
  },
  {
    title: 'Docs',
    to: '/go/index',
    pullDowns: [
      {
        title: 'saa',
        subMenus: [
          {
            title: 'Index',
            to: '/nuxt/index'
          },
          {
            title: 'Data Fetching',
            to: '/nuxt/dataFetching'
          }
        ]
      },
      {
        title: 'test',
        subMenus: [
          {
            title: 'tsss',
            to: '/nuxt/sss'
          },
          {
            title: 'test',
            to: '/nuxt/ga'
          }
        ]
      }
    ]
  }
]);