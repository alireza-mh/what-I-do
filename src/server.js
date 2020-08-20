import sirv from "sirv";
import compression from "compression";
import * as sapper from "@sapper/server";
/* suppress webpack error */
const express = __non_webpack_require__('express');

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";
const app = express();
app
  .use(
    compression({ threshold: 0 }),
    sirv("static", { dev }),
    sapper.middleware()
  )
  .listen(PORT, (err) => {
    if (err) console.log("error", err);
  });
