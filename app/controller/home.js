const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async user() {
    const { ctx } = this;
    const { id } = ctx.params
    const result = await ctx.service.home.addUser()
    // ctx.body = `hi user = ${id}`
    // ctx.body = {
    //   ...result
    // }
    await ctx.render('index.html', {
      ...result[0]
    })
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
