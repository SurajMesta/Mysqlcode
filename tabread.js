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

    // var q= 'SELECT * FROM EMPDETAILS'
    var q= 'SELECT * FROM EMPDETAILS WHERE EMAIL LIKE "su%" '

    m1.query(q, function(err,result){
        if(err){
            console.log(err)
        }

        else{
            console.log(result)
        }
    })
})