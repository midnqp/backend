import services from "./services.js";
import express from "express";

const router = express.Router();

router.get("/", becomeHandler(services.getOne));

export default router;

function becomeHandler(serviceFunc: Function) {
  return async function (request: express.Request, response: express.Response) {
    const payloadResult: Record<string, unknown> = {};
    const reqFields = ["body", "query", "params"] as const;

    for (let field of reqFields) {
      const payload = request[field];
      Object.assign(payloadResult, payload);
    }

    const serviceResult = await serviceFunc(payloadResult);
    const apiResult = becomeApiResult(serviceResult);
    response.json(apiResult);
  };
}

type ApiErrorResult = {
  errorCode: number;
  errorMessage: string;
  details: Array<unknown>;
};

type ApiOkayResult = Record<"data" | string | "page" | "limit", unknown>;

function becomeApiResult(
  data: Record<string, unknown> | Array<unknown> | Error,
): ApiOkayResult | ApiErrorResult {
  // at this point, i don't think, this is possible.
  // at this point, i think, having controller functions to finally decide the API response codes are important.
  // this just varies based on the service.
  // It could also be that, multiple services are required to be invoked for a controller function,
  // and having a separate service per controller isn't sensical.
}

/* 
Goals:
1. No controller function.
2. Clean API requests and responses.
    2.1. Such as {errorCode: number, errorMessage: string, details: Array<any>} with 404.
    2.2. The direct request body instead of wrapping it in another property e.g. "item" or "shop"
    2.3. The almost direct response body e.g. {data: GetOneShop }
    2.4. That will allow for pagination/metadata e.g. {totalPages: 72, data: GetOneShop, responseDurationMs:number}
    2.5. Useful query variables e.g. $page, $limit, $fields, $exclude, $format=xml|json, $prettyPrint=true, etc.
📝 2.6. Check the Postman API repository for how big companies do the search API. 📝 TODO

Constraints required:
1. No duplicate names between query, params, body.
2. Service functions can only take one argument.

Ideas:
- TypeScript is true
- No ESlint
- Prettier is enough
- Remove EditorConfig
- No implicit any
- No implicit return 

- Assert for backend
- All service functions be async, for microservice decomposition
- Things like constants and utils could be private npm packages with versioning?
  - Or they could be microservices too?
*/
