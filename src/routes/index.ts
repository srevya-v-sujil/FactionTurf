import e, { Router } from "express";
export const router=Router()
router.get("/getInfo",(req,res)=>{
    res.json({p1:["UP","UP"],p2:["UP","DOWN"],p3:["UP","SHOOT"]})
})