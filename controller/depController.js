
import fs from "fs"

import {promises} from "fs"
const changeDep=(req,res)=>{
    const depId=req.params.id
    const depName=req.body.name
    let depData=JSON.parse(fs.readFileSync('./public/emp.json','utf-8'))
    for(let i=0;i<depData.length;i++){
      if(depData[i].id==parseInt(depId)){
          depData[i]["name"]=depName
      }
    }
    console.log(depData)
    fs.writeFileSync('./public/emp.json',JSON.stringify(depData))
    res.send("OK")
  }

const delDep=(req,res)=>{
    const id=req.params.id 
    let depData=JSON.parse(fs.readFileSync('./public/emp.json','utf-8'))
    for(let i=0;i<depData.length;i++){
        if(depData[i].id==parseInt(id)){
            depData.splice(i,1)
        }
    }
    fs.writeFileSync('./public/emp.json',JSON.stringify(depData))
    res.send("OK")

}
//importing file data
//get body using post
//putting it in array
//writing it to file back
const addDep=async (req,res)=>{
    let depData=JSON.parse(await promises.readFile('./public/emp.json'))
    console.log(depData)
    let newDep=req.body
    depData.push(newDep)
    await promises.writeFile('./public/emp.json',JSON.stringify(depData))
    res.send("OK")
}

const getDep=async (req,res)=>{
    let depData=JSON.parse(await promises.readFile('./public/emp.json'))
    if(depData.length>=1){
        res.json({
            "status":"success",
            "data":depData
        })
    }else{
        res.json({
            "status":"fail",
            "message":"no dep data found"
        })
    }
}
export {changeDep,delDep,addDep,getDep} 