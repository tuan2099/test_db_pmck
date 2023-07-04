'use strict';

/**
 * question-dataset service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::question-dataset.question-dataset');
