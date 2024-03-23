const jwt=require('jsonwebtoken');

const EncodeToken=(email,id)=>{
    const key="ABC-DEF-123";
    const expire={expiresIn: '24h'};
    const payload={email:email,userID:id};
    return jwt.sign(payload,key,expire);
}

const DecodeToken=(token)=>{
    try{
        const key="ABC-DEF-123";
        return jwt.verify(token,key)
    }
    catch (e) {
        return  null;
    }
}

module.exports={
    EncodeToken,
    DecodeToken
}