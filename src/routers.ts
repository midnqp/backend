import {Router} from 'express'
import user from '@/user/router.js'

const router = Router()
router.use('/users', user)

export default router