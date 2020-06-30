'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const user  = await ctx.service.user.findById(1);
    ctx.body = "hi egg" + user;
  }
}

module.exports = HomeController;
