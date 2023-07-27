const data=require('../data.json')
// const fs=require('fs')
// const data=fs.readFileSync('data.json','utf-8')
const users=data.users


exports.showallproducts=(req,res)=>{
    res.json(users) 

}


exports.createallproduct=(req,res)=>{
    users.push(req.body);
    res.json(req.body); 

}

exports.updateproducts=(req,res)=>{
    console.log(req.params.id)
    const id=+req.params.id;
    const prdindex=users.findIndex(p=>p.id===id)
    const produ=users[prdindex]
     
    users.splice(prdindex,1,{...produ,...req.body}) 
    res.json("mil gya bhai patch vala hu")
    

}

exports.deleteproduct=(req,res)=>{
    console.log(req.params.id)
    const id=+req.params.id;
    const prdindex=users.findIndex(p=>p.id===id)
    
     
    users.splice(prdindex,1) 
    res.json(users)
    

}

exports.getproductbyid=(req,res)=>{
    console.log(req.params.id)
    const id=+req.params.id;
    const prd=users.find(p=>p.id===id)
    res.json(prd)
    

}