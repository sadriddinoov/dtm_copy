import { Router } from "express";
import controller from './controller.js'

const router = Router()

router.post('/users', controller.POST)
router.put('/users/:userId/:bal', controller.PUT)


export default router