let express = require('express');
const router = express.Router();

// 引入封装好的数据库连接池
var db = require('../db');


// 录入新单词
router.post('/inputNewWord', (req, res) => {
    let body = req.body;
    let sql = db.inputNewWordDB(body);
    db.Query(sql).then(data => {
        console.log('单词录入成功！');
        res.json({ res: true });
    }, err => {
        console.log(err);
        res.json({
            res: true,
            exception: `单词录入失败, ${err}`
        });
    });
});

// 检索所有单词
router.post('/listAllWord', (req, res) => {
    let body = req.body;
    let sql = db.listAllWordDB(body);
    db.Query(sql).then(data => {
        console.log('笔记本加载成功！');
        console.log(data)
        res.json({ res: data });
    }, err => {
        console.log(err);
        res.json({
            res: true,
            exception: `加载失败, ${err}`
        });
    });
});



module.exports = router;