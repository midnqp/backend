import { Application, Request, Response } from 'express'
import _ from 'lodash'

export default function (app: Application) {
	app.use(mutateResponse)
}

function mutateResponse (req: Request, res: Response, next) {
	res.ok = function (data = 'OK') {
		let result = {}
		if (typeof data == 'string') result['message'] = data
		else result = data

		res.status(200).send({ data: result, ok: true })
	}

	res.err = function (data = 'Error', code = 200) {
		res.status(code).send({	data, ok: false })
	}

	next()
}