const Service = require('egg').Service;

class UserService extends Service {
    async findById(id) {
      const user = await this.ctx.model.User.findById(id);
      if (!user) {
        this.ctx.throw(404, 'user not found');
      }
      return user;
    }
  }

module.exports = UserService;
