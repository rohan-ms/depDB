import express from "express"
import * as depController from "./../controller/depController.js"
const Router=express.Router()

Router.route('/department/:id').put(depController.changeDep).delete(depController.delDep)

export default Router