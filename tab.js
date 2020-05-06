const mysql=require('mysql')
const assert= require('assert')

const m1= mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'first'

})

m1.connect(function(err){
    if(err){
        console.log(err)
    }

    const q= 'CREATE TABLE EMPDETAILS ( Id Int(30) , name varchar(30) , salary varchar(30) , email varchar(30) , PRIMARY KEY(Id))'

    m1.query(q,function(err,result){
        if(err){
            console.log(err)
        }
        else{
            console.log('Table creation success')
        }
    })
})