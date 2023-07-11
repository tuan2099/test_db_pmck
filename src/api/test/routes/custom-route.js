module.exports = {
  routes: [
    {
      method: "GET",
      path: "/hello",
      handler: "api::test.test.getData",
      config: {
        // something
      },
    },
  ],
};
