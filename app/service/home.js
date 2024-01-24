
const Service = require('egg').Service

class HomeService extends Service {
  async addUser() {
    return {
      title: 'wsd',
      slogen: '放弃吗?'
    }
  }
}

module.exports = HomeService;