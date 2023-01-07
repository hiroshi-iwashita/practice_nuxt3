export default ([
  {
    title: 'Nuxt',
    to: '/nuxt/form',
    pullDowns: []
  },
  {
    title: 'Go',
    to: '/go',
    pullDowns:[
      {
        title: 'Users',
        subMenus: [
          {
            title: 'All users',
            to: '/go/users'
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
    title: 'Docs',
    to: '/docs',
    pullDowns:[]
  }
]);