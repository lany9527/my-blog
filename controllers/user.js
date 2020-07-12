const { Op } = require('sequelize');
const User = require('../model/user');

const jwt = require('jsonwebtoken')
const jwtKoa = require('koa-jwt')
const util = require('util')
const verify = util.promisify(jwt.verify) // 解密
const secret = 'jwt demo';

const login = async (ctx) => {
    let userToken = {
        name: 'kenan'
    };
    const token = jwt.sign(userToken, secret, {expiresIn: '24h'})  //token签名 有效期为1小时
    // console.log('*** login ctrl ***> ', token);
    ctx.body = {
        message: '获取token成功',
        code: 200,
        token
    }
};

const register = async (ctx) => {
    console.log('*** register ***> ', ctx.request.body);
    const { username, age, phone } = ctx.request.body;

    try {
        const res = await User.addUser(username, age, phone);
        // 返回结果
        ctx.response.status = 200;
        ctx.body = res;
    } catch (e) {
        // 返回结果
        ctx.response.status = 500;
        ctx.body = 'register failed' + e;
    }
};


module.exports = {
    login,
    register
};
