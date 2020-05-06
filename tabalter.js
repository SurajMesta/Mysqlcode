const mysql= require('mysql')
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

    const q= 'ALTER TABLE EMPDETAILS ADD COLUMN ACTIVE varchar(30)'

    m1.query(q,function(err,result){
        if(err){
            console.log(err)
        }

        else{
            console.log('Alteration Success')
        }
    })
})