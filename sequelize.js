const Sequelize = require('sequelize');

/**
 * database
 * username
 * pwd
 */
const sequelize = new Sequelize('blog', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql', // 数据库类型
    operatorsAliases: false,
    timezone: '+08:00', //东八时区
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

sequelize.authenticate()
    .then(() => {
        console.log('*** 数据库连接成功 ***> ');
    })
    .catch(err => {
        console.log('*** 数据库连接失败 ***> ');
    })

sequelize.sync();
module.exports = sequelize;
