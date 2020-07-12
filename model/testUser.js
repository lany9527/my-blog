const user = require('./user');

// 测试添加用户
user.addUser('alice', 21, '13428769809').then((res) => {
    console.log('*** 测试添加用户成功 ***> ', res);
}).catch(error => {
    console.log('*** 测试添加用户失败 ***> ', error);
})
