export default ({
  // page
  page: {
    title: 'Go installation',
    description: "Select the tab for your computer's operating system below, then follow its installation instructions.",
  }, // page
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
  ], // breadcrumbs
  // tabs
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
  ], // tabs
  // mockupCode
  mockupCodes: {
    // linux
    linux: [
      {
        prefix: '$',
        text: 'go version',
        color: 'secondary',
        backgroundColor: ''
      },
      {
        prefix: '',
        text: 'installing for Linux...',
        color: '',
        backgroundColor: ''
      },
      {
        prefix: '',
        text: 'Done!',
        color: '',
        backgroundColor: ''
      }
    ], // linux
    // mac
    mac: [
      {
        prefix: '$',
        text: 'go version',
        color: 'secondary',
        backgroundColor: ''
      },
      {
        prefix: '',
        text: 'installing for Mac...',
        color: '',
        backgroundColor: ''
      },
      {
        prefix: '',
        text: 'Done!',
        color: '',
        backgroundColor: ''
      }
    ], // mac
    // windows
    windows: [
      {
        prefix: '$',
        text: 'go version',
        color: 'secondary',
        backgroundColor: ''
      },
      {
        prefix: '',
        text: 'installing for Windows...',
        color: '',
        backgroundColor: ''
      },
      {
        prefix: '',
        text: 'Done!',
        color: '',
        backgroundColor: ''
      }
    ] // windows
  } // mockupCodes
});
