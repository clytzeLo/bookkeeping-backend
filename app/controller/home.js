const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async user() {
    const { ctx } = this;
    const { id } = ctx.query
    ctx.body = `hi user = ${id}`
  }
}

module.exports = HomeController;
