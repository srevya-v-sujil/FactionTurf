import e, { Router } from "express";
export const router=Router()
let mprs=0
const stack={p1:[],p2:[],p3:[],p4:[]}
router.get("/getInfo",(req,res)=>{
    res.json({p1:["UP","UP"],p2:["UP","DOWN"],p3:["UP","SHOOT"],p4:["DOWN","SHOOT"]})
})

router.post("/postInfo",(req,res)=>{
    mprs+=1
    console.log(req.body)
    res.status(200).json({"message":"Success"})
})
router.get("/getMPRs",(req,res)=>{
    res.json(mprs)
})