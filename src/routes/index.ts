import e, { Router } from "express";
export const router=Router()
let mprs=0
router.get("/getInfo",(req,res)=>{
    res.json({p1:["UP","UP"],p2:["UP","DOWN"],p3:["UP","SHOOT"]})
})

router.post("/postInfo",(req,res)=>{
    mprs+=1
    res.status(200).json({"message":"Success"})
})
router.get("/getMPRs",(req,res)=>{
    res.json(mprs)
})