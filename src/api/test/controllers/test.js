"use strict";

/**
 * test controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::test.test", ({ strapi }) => ({
  // async exampleAction(ctx) {
  //   console.log(strapi);
  //   try {
  //     // ctx.body = "ok";
  //     return ctx.body;
  //   } catch (err) {
  //     ctx.body = err;
  //   }
  // },
  async getData(ctx) {
    const testData = await strapi.query("tests").find();
    return testData;
  },
}));
