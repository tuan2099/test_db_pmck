module.exports = {
  routes: [
    {
      method: "GET",
      path: "/custom-posts/premium-post",
      handler: "api::post-custom.post-custom.findPremiumPost",
      config: {},
    },
  ],
};
