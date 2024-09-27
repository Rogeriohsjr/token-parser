import * as fs from "fs";
import StyleDictionary from "style-dictionary";

const styleConfig = new StyleDictionary("./src/config.ts");
import { template } from "lodash";

const typingsES6Template = template(
  fs.readFileSync("./src/template/es6.ejs").toString()
);

styleConfig.registerFormat({
  name: "typings/es6",
  format: typingsES6Template,
});

styleConfig.buildAllPlatforms();
