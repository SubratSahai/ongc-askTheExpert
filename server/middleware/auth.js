import jwt from 'jsonwebtoken';

const auth = async (req,res,next) =>{
    try {
        // console.log(req);
        // console.log('reached in middleware')
        const token = req.headers.authorization;
        //const isCustomAuth = token.length<500;
        let decodedData;
        if(token){
            decodedData = jwt.sign(token,'test');

            req.userId = decodedData?.indexOf;
        }else {
            decodedData = jwt.decode(token);
            req.userId= decodedData?.sub;
        }
        next();
        } catch (error) {
            console.log(error);
    }
}

export default auth;