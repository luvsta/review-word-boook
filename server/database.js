const mysql = require('mysql');
let db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'newpass',
    port: '3306'
})

//创建数据库
let creteDB = `create database if not exists mynotebook character set utf8 collate utf8_general_ci`;

//使用数据库
let useDB = `use mynotebook`;

//创建用户基本信息
let createUser = `create table if not exists user(
    id int unsigned primary key auto_increment comment '用户id',
    name varchar(50) not null default '' comment '用户姓名',
    age varchar(20) not null default '' comment '年龄',
    number varchar(20) not null default '' comment '账号',
    password varchar(20) not null default '' comment '密码'
)charset=utf8 engine=myisam comment '用户账号表';`

// //插入管理员用户
// let insertUser = `
//     insert into user ( name,age,number,password ) values ('管理员','100','admin','admin');
// `;

let Query = function (db, sql, feedback = '') {
    return new Promise((resolve, reject) => {
        db.query(sql, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(feedback + '成功')
            }
        })
    })
}


async function init() {
    let query1 = await Query(db, creteDB, '创建数据库\n');
    let query2 = await Query(db, useDB, '使用数据库\n');
    let query3 = await Query(db, createUser, '创建用户基本信息\n');
    // let query4 = await Query(db, insertUser, '插入管理员用户');
    await db.end(err => { err ? console.log(err) : console.log('数据库断开连接\n') });
    console.log(query1, query2, query3);
}

module.exports = init;