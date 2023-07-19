"use strict";

/**
 * post-custom router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::post-custom.post-custom", {
  prefix: "", // config route -> đưa tiền tố lên trước api (ví dụ: /post-custom  -> /something/post-custom)
  only: ["find", "findOne", "findPremiumPost"], // chỉ đinh các phần được phép hiện trông phần role
  except: [],
  config: {
    find: {
      auth: false, // disabling the strapi jwt auth system for this route
      policies: [],
      middlewares: [],
    },
    findOne: {},
    create: {},
    update: {},
    delete: {},
  },
});
