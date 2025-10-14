import e, { Router } from "express";
export const router=Router()
import { PrismaClient } from "../generated/prisma";
let mprs=0
const client=new PrismaClient()
let stack={p1:[],p2:[],p3:[],p4:[]}
router.get("/getInfo",(req,res)=>{
    res.json({p1:["UP","UP"],p2:["UP","DOWN"],p3:["UP","SHOOT"],p4:["DOWN","SHOOT"]})
})

router.post("/postInfo",async(req,res)=>{
    mprs+=1
    const resp=await client.factions.findFirst({
        where:{
            github_Id:req.body.username
        },
        select:{
            faction:true
        }
    })
    if(resp){
    stack={...stack,[resp?.faction]:req.body.action}
    console.log(req.body)
    res.status(200).json({"message":"Success"})}else{
        res.status(404).json({"message":"Failed"})
    }
})
router.get("/getMPRs",(req,res)=>{
    res.json(stack)
})