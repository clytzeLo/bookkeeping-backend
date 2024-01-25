/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, middleware } = app;
  const _jwt = middleware.jwtErr(app.config.jwt.secret);

  router.post('/api/user/register', controller.user.register);
  router.post('/api/user/login', controller.user.login);

  router.post('/api/upload', controller.upload.upload);
  router.get('/api/user/test', _jwt, controller.user.test);

  router.get('/api/user/get_userinfo', _jwt, controller.user.getUserInfo);
  router.post('/api/user/edit_userinfo', _jwt, controller.user.editUserInfo);

  router.post('/api/bill/add', _jwt, controller.bill.add); // 添加账单
  router.get('/api/bill/list', _jwt, controller.bill.list); // 获取账单列表
  router.get('/api/bill/detail', _jwt, controller.bill.detail); // 获取账单列表详情
  router.get('/api/bill/update', _jwt, controller.bill.update); // 更新账单信息
  router.post('/api/bill/delete', _jwt, controller.bill.delete);

  router.get('/api/bill/data', _jwt, controller.bill.data);
};
