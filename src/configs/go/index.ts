export default ({
  // breadcrumbs
  breadcrumbs: [
    {
      value: 'go',
      link: false,
      path: '/go',
      text: {
        en: 'Go',
        ja: 'Go'
      }
    }
  ],
  tabs: [
    {
      type: 'bordered',
      size: 'lg',
      value: 'linux',
      text: 'Linux'
    },
    {
      type: 'bordered',
      size: 'lg',
      value: 'mac',
      text: 'Mac'
    },
    {
      type: 'bordered',
      size: 'lg',
      value: 'windows',
      text: 'Windows'
    }
  ],
  mockupCodes: [
    {
      prefix: '$',
      text: 'go version',
      color: 'secondary',
      backgroundColor: ''
    },
    {
      prefix: '',
      text: 'installing...',
      color: '',
      backgroundColor: ''
    },
    {
      prefix: '',
      text: 'Done!',
      color: '',
      backgroundColor: ''
    },
  ]
});
