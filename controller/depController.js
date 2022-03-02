
import fs from "fs"
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

export {changeDep,delDep}