import express from "express"
import Router from "./routes/routes.js"

// import path from "path"
// import { fileURLToPath } from "url"
const app=express()

app.use(express.json())
// console.log(path)
// const filepath=fileURLToPath(import.meta.url)
// const pathnew=path.join(filepath,'')
app.use(express.urlencoded({extended:true}))

app.use('/',Router)

app.listen(5000,()=>{
  console.log("started on port 5000")
})