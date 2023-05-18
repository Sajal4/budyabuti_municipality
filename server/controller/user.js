const userData=[];
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const secretKey="dxc-mrx5";
const saltRound=10;

const register=(req, res)=>{
    const newUser=req.body;
    const oldUser=userData.find((info)=>{
        return newUser.mobile === info.mobile
    })
    if (oldUser){
        return res.status(200).send({message:"User already existed. Please try to LogIn !"})
    }
    const hashedpassword=bcrypt.hashSync(newUser.password, saltRound);
    const userCredinals={
        name:newUser.name,
        mobile:newUser.mobile,
        password:hashedpassword
    }
    userData.push(userCredinals);
    res.status(200).send({message:"New user Registered Successfully !"})
}
const login= (req, res)=>{
    const loginData=req.body;
    const storedData=userData.find((items)=>{
        if(loginData.mobile === items.mobile){
            return items
        }
        else{
            return res.send({message:"New user needs to register first!"});
        }
    });
    console.log(storedData);
    const validate=bcrypt.compareSync(loginData.password, storedData.password);
    if(validate){
        const token= jwt.sign(loginData.mobile, secretKey);
        return res.status(200).send({message:"User Logged in successfully !", Token: token});
    }
    else{
        return res.status(200).send({message:"Invalid log in details !"})
    }
}
const getData=(req,res)=>{
    res.status(200).send(userData);
}
module.exports={register, login, getData}