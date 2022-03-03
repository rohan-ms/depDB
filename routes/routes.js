import express from "express"
import * as depController from "./../controller/depController.js"
const Router=express.Router()

Router.route('/department/:id')
.put(depController.changeDep)
.delete(depController.delDep)
Router.route('/department')
.post(depController.addDep)
.get(depController.getDep)

export default Router