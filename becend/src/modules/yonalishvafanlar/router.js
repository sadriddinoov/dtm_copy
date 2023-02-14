import { Router } from "express";
import controller from './controller.js'

const router = Router()

router.put('/fanlar', controller.FANLAR)
router.get('/univer/:secondFan', controller.GET)
router.get('/fakultet/:univerId', controller.FAKULTET)
router.put('/users', controller.PUT)
router.get('/tests/:fan', controller.TEST)
router.get('/tests/:testid/:testAnswer', controller.CHECK)
router.get('/univers/:univerId', controller.UNIVER)

export default router