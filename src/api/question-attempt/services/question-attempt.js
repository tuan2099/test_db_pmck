'use strict';

/**
 * question-attempt service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::question-attempt.question-attempt');
