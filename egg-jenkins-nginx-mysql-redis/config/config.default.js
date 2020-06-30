/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1593398831487_3472';

  // add your middleware config here
  config.middleware = [];

  config.sequelize = {
    dialect: 'mysql',
    // host
    host: '127.0.0.1',
    // 端口号
    port: '3306',
    // 用户名
    username: 'root',
    // 密码
    password: 'test123',
    // 数据库名
    database: 'lioenix_db',
  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
