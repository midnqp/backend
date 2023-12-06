import express from 'express'
import expressConfig from '@src/config/express-app.js'
import expressError from '@src/config/express-error.js'
import {routers} from '@src/module'

const app = express()
<<<<<<< HEAD
appReq(app)
appRes(app)
appConfig(app)
endpoints(app)
appErr(app)
=======
expressConfig(app)
>>>>>>> e660964 (initial commit)

// All application endpoints.
app.use('/v1/', routers.user)

// Error handler must be the last.
expressError(app)
export { app }
