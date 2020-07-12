const Sequelize = require('sequelize');
const sequelize = require('../sequelize');

const modelDefinition = {
    username:{
        type: Sequelize.STRING,
        field: 'username', // 指定存储在表中的键名称 没有指定 field，表中键名称则与对象键名相同
    },
    age:{
        type: Sequelize.INTEGER,
        field: 'age',
    },
    phone:{
        type: Sequelize.STRING,
        field: 'phone',
    },
};

const modelOption = {
    // 如果为 true 则表的名称和 model 相同，即 user
    // 为 false MySQL创建的表名称会是复数 users
    // 如果指定的表名称本就是复数形式则不变
    freezeTableName: true
};

const User = sequelize.define('users', modelDefinition, modelOption);

// 创建表
// User.sync() 会创建表并且返回一个Promise对象
// 如果 force = true 则会把存在的表（如果users表已存在）先销毁再创建表
// 默认情况下 force = false
const user = User.sync({force: false});

// 添加新用户
exports.addUser = (username, age, phone) => {
    return User.create({
        username,
        age,
        phone
    })
};
