import e, { Router } from "express";
export const router=Router()
import { PrismaClient } from "../generated/prisma";
let mprs=0
const client=new PrismaClient()
interface stackType{
    p1:string[],
    p2:string[],
    p3:String[],
    p4:String[],
}
let stack:stackType={p1:[],p2:[],p3:[],p4:[]}
router.get("/getInfo",(req,res)=>{
    const dataStack=stack
    stack={p1:[],p2:[],p3:[],p4:[]}
    res.status(200).json(dataStack)

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
    if (resp?.faction && resp.faction in stack) {
    stack[resp.faction as keyof stackType].push(req.body.action);
}
    console.log(req.body)
    res.status(200).json({"message":"Success"})}else{
        console.log("BROK WHY")
        console.log(resp)
        res.status(404).json({"message":"Failed"})
    }
})
router.get("/getMPRs",(req,res)=>{
    res.json(stack)
})