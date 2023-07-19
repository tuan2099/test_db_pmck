"use strict";

/**
 * post-custom service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService(
  "api::post-custom.post-custom",
  ({ strapi }) => ({
    async findOneIfPublic(args) {
      const { id, query } = args;
      const post = await strapi.entityService.findOne(
        "api::post-custom.post-custom",
        id,
        // @ts-ignore
        this.getFetchParams(query)
      );
      // get ra nhữngbài post có field premium là null
      return post.premium ? null : post;
    },
  })
);
