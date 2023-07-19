"use strict";

/**
 * post-custom controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::post-custom.post-custom",
  ({ strapi }) => ({
    // Custom controller
    async findPremiumPost(ctx) {
      try {
        // @ts-ignore
        const { data, meta } = await super.find(ctx);
        if (ctx.state.user) return { data, meta };
        const filterResul = data.filter(
          (post) => post.attributes.premium === null
        );
        // return { data: filterResul, meta };
        ctx.body = filterResul;
      } catch (err) {
        ctx.body = err;
      }
    },
    // Solution 1: gọi tất cả post và tìm chúng
    // async find(ctx) {
    //   // lấy ra tất cả các bài đăng
    //   const { data, meta } = await super.find(ctx);
    //   if (ctx.state.user) return { data, meta };
    //   // xet đăng nhập
    //   const filterResult = data.filter(
    //     (post) => post.attributes.premium === null
    //   );
    //   return { data: filterResult, meta };
    // },
    // Solution 2 : viết lại và chỉ gọi ra nhũng cái cần thiết
    // async find(ctx) {
    //   // B1 : kiểm tra xem yêu cầu có phải xác thực hay ko
    //   const isRequestingNonPremium =
    //     ctx.query.filter && ctx.query.filter.premium == false;
    //   // @ts-ignore
    //   if (ctx.state.user || isRequestingNonPremium) return super.find(ctx);
    //   // P2 : kiểm trâ xem yêu cầu có public hay không
    //   const { query } = ctx;
    //   const filterResult = await strapi
    //     .service("api::post-custom.post-custom")
    //     .find({
    //       ...query,
    //       filters: {
    //         ...query.filter,
    //         premium: true,
    //       },
    //     });
    //   // @ts-ignore
    //   const sanitizedPosts = await this.sanitizeOutput(filterResult, ctx);
    //   // @ts-ignore
    //   return this.transformResponse(sanitizedPosts);
    // },

    async findOne(ctx) {
      // @ts-ignore
      if (ctx.state.user) return await super.findOne(ctx);

      const { id } = ctx.params; // post/:id
      const { query } = ctx;
      const postIfPublic = await strapi
        .service("api::post-custom.post-custom")
        .findOneIfPublic({
          id,
          query,
        });
      // @ts-ignore
      const sanitizedEntity = await this.sanitizeOutput(postIfPublic, ctx);
      // @ts-ignore
      return this.transformResponse(sanitizedEntity);
    },
  })
);
