'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/getswiperlist', controller.home.getSwiperList);
  router.get('/getcatitems', controller.home.getCatItems);
  router.get('/getfloordata', controller.home.getFloorData);
};
