import * as services from "@/services.js";

export default {
  doArithmetic,
};

async function doArithmetic(
  type: "sum" | "subtract",
  opts: { a: number; b: number },
) {
  let result: number;
  console.log("doarithmetic", {
    type,
    opts,
    result: await services.sum.sum(opts.a, opts.b),
  });

  switch (type) {
    case "sum":
      result = await services.sum.sum(opts.a, opts.b);
      break
    case "subtract":
      result = await services.subtract.subtract(opts.a, opts.b);
      break
  }

  return result;
}
