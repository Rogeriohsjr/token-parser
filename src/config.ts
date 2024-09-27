import { Config } from "style-dictionary";

const config: Config = {
  source: ["./src/tokens/**/*.json"],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: "build/css/",
      files: [
        {
          destination: "variables.css",
          format: "css/variables",
        },
      ],
    },
    js: {
      transformGroup: "js",
      buildPath: "build/js/",
      files: [
        {
          destination: "index.js",
          format: "javascript/es6",
        },
      ],
    },
    ts: {
      transformGroup: "js",
      buildPath: "build/js/",
      files: [
        {
          destination: "index.d.ts",
          format: "typings/es6",
        },
      ],
    },
    tsv1: {
      transformGroup: "js",
      buildPath: "build/js/",
      files: [
        {
          format: "javascript/es6",
          destination: "variables_tsv1.js",
        },
        {
          format: "typescript/es6-declarations",
          destination: "variables_tsv1.d.ts",
        },
      ],
    },
  },
};

export default config;
