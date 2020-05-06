const mysql= require('mysql')
const assert= require('assert')

const m1= mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'first'
})

m1.connect(function(err){
    const q= 'DELETE FROM EMPDETAILS  WHERE SALARY=30000'

    m1.query(q,function(err,result){
        if(err){
            console.log(err)
        }
        else{
            console.log('Deletion success')
        }
    })
})