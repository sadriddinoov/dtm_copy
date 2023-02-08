import { Router } from "express";
import controller from './controller.js'

const router = Router()

router.post('/users', controller.POST)


export default router