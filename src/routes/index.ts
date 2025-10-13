import e, { Router } from "express";
export const router=Router()
router.get("/getInfo",(req,res)=>{
    res.json({moveStack:["UP","UP"]})
})