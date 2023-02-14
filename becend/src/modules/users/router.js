import { Router } from "express";
import controller from './controller.js'

const router = Router()

router.post('/users', controller.POST)
router.put('/users/:userId/:bal', controller.PUT)
router.get('/users', controller.GET )


export default router