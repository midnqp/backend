import {Router} from 'express'
import users from '@/user/routers.js'
//import shops from '@/modules/shops/index.js'

const router = Router()
router.use('/users', users)
//router.use('/shops', shops)
//router.use('/items', items)

export default router
