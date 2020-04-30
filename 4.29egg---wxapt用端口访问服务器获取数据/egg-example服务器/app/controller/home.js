'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  index() {
    const { ctx } = this;
    ctx.body = ctx.service.index.index();
  }
  getSwiperList(){
    const { ctx } = this;
    ctx.body = ctx.service.index.getSwiperList();
  }
  getCatItems(){
    const { ctx } = this;
    ctx.body = ctx.service.index.getCatItems();
  }
  getFloorData(){
    const { ctx } = this;
    ctx.body = ctx.service.index.getFloorData();
  }
}

module.exports = HomeController;
