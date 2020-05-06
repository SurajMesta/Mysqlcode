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
     
    const arr= [[ '1' , 'Darshan' , '50000' , 'darshan47@yahoo.com' , 'YES'] ,
[ '2' , 'Suraj' , '40000' , 'surajmesta47@gmail.com' , 'YES'] ,
[ '3' ,'DarshanKA47' , '30000' , 'darshanmesta33@gmail.com' , 'YES']


]


const q = 'INSERT INTO EMPDETAILS VALUES  ? '   

m1.query(q,[arr],function(err,result){
    if(err){
        assert.equal(null,err)

    }

    else{
        console.log('Data Insertion Success')
    }
})
})
