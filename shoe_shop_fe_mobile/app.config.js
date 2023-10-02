module.exports = {
  version: process.env.MY_CUSTOM_PROJECT_VERSION || '1.0.0',
  // All values in extra will be passed to your app.
  extra: {
    //apiURL: "http://localhost:8000/v1/",
    apiURL: "http://192.168.1.10:8000/v1/",
  },
};