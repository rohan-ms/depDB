import express from "express"
import * as depController from "./../controller/depController.js"
const Router=express.Router()

Router.route('/changeDep/:id').put(depController.changeDep)

export default Router