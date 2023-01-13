import services from "@/services.js";
import auths from "@/auths.js";
import express from "express";

const router = express.Router();

router.get("/:id", auths.open, async function (req:express.Request, res: express.Response, next: express.NextFunction) {
  const {id} = req.params
  const user = await services.user.getOne(id)
  res.json({data:user})
});

export default router;

type ApiErrorResult = {
  errorCode: number;
  errorMessage: string;
  details: Array<unknown>;
};

type ApiOkayResult = Record<"data" | string | "totalPages", unknown>;

/* 
Goals:
1. No controller function. Old.
2. Clean API requests and responses.
    2.1. Such as {errorCode: number, errorMessage: string, details: Array<any>} with 404.
    2.2. The direct request body instead of wrapping it in another property e.g. "item" or "shop".
    2.3. The almost direct response body e.g. {data: GetOneShop }
    2.4. That will allow for pagination/metadata e.g. {totalPages: 72, data: GetOneShop, responseDurationMs:number}
    2.5. Useful query variables e.g. $page, $limit, $fields, $exclude, $format=xml|json, $prettyPrint=true, etc.
📝 2.6. Check the Postman API repository for how big companies do the search API. 📝 TODO

Constraints required:
1. No duplicate names between query, params, body. Old.
2. Service functions can only take one argument. Old.

Ideas:
- TypeScript is true
- No ESlint
- Prettier is enough
- Remove EditorConfig
- No implicit any
- No implicit return 

- Assert for backend
- All service functions be async, for microservice decomposition.
- Things like constants and utils could be private npm packages with versioning?
  - Or they could be microservices too?
*/
