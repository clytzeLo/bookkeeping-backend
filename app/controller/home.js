const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async user() {
    const { ctx } = this;
    const { id } = ctx.params
    ctx.body = `hi user = ${id}`
  }
  async addUser() {
    const { ctx } = this;
    const { title } = ctx.request.body;
    ctx.body = {
      title
    }
  }
}

module.exports = HomeController;
