const mysql= require('mysql')
const assert= require('assert')

const m1= mysql.createConnection({
    host:'localhost',
    user:'root',
    password:''
})

m1.connect(function(err){
    if(err){
      assert.equal(null,err)
    }

    var q= 'CREATE DATABASE FIRST'

    m1.query(q,function(err,result){
        if(err){
            assert.equal(null,err)
        }

        else{
            console.log('Database creation Success')
        }

    })
})