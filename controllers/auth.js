const {response} = require('express'); 

const createUser = (req, res = response)=>{
    res.json({
        ok: true,
        msg: 'registro'
    })
}

const loginUser = (req, res)=>{
    res.json({
        ok: true,
        msg: 'login'
    })
}


const renew = (req, res)=>{
    res.json({
        ok: true,
        msg: 'renew'
    })
}

module.exports = {
    createUser, 
    loginUser, 
    renew
}
