import { Router } from "express";
import controller from './controller.js'

const router = Router()

router.put('/fanlar', controller.FANLAR)


export default router