const mysql = require('mysql');

//创建连接池，效率更高，不需要每次操作数据库都创建连接
let pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'newpass',
    database: 'mynotebook',
    port: '3306',
    connectionLimit: 3,//允许连接数
    multipleStatements: true, //是否允许执行多条sql语句
    timezone: '08:00' //大坑，必须加这句，否则时间可能不对
})

//封装数据库sql请求操作，返回的是一个包含对象的数组
let Query = (sql, ...params) => {
    return new Promise(function (resolve, reject) {
        //从连接池拿出一条链接
        pool.getConnection(function (err, connection) {
            if (err) {
                return reject(err);
            }
            connection.query(sql, params, function (error, res) {
                // console.log(res);
                connection.release();
                if (error) {
                    return reject(error);
                }
                resolve(res);
            })
        })
    })
}


// 录入单词
let inputNewWordDB = function (params) {
    let sql = `
        insert into
            word (cn_word,en_word)
        values
            ('${params.cn_word}', '${params.en_word}'); 
    `;
    return sql;
}

let listAllWordDB = function () {
    let sql = ` 
    select
        *
    from
    word; 
    `;
    return sql;
}



module.exports = {
    Query,
    inputNewWordDB,
    listAllWordDB
}