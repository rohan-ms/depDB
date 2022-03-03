import express from "express"
import * as depController from "./../controller/depController.js"
const Router=express.Router()

<<<<<<< HEAD
Router.route('/department/:id')
.put(depController.changeDep)
.delete(depController.delDep)
Router.route('/department')
.post(depController.addDep)
.get(depController.getDep)
=======
Router.route('/department/:id').put(depController.changeDep).delete(depController.delDep)
>>>>>>> add1

export default Router