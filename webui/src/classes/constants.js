const Constants = {
  Version: process.env.VUE_APP_VERSION,
  
  Locales: [
    'en',
    'test'
  ],

  Keys: {
    enter: 13,
    escape: 27
  },
  
  Themes: {
    Dark: 'dark',
    Light: 'light',
    System: 'system'
  },
};

export default Constants;