const buildHelper = require("@egjs/build-helper");
const commonjs = require("rollup-plugin-commonjs");
const resolve = require("rollup-plugin-node-resolve");
const vue = require("rollup-plugin-vue");

const defaultOptions = {
  sourcemap: true,
  plugins: [
    commonjs(),
    resolve(),
    vue()
  ]
};
export default buildHelper([
  {
    ...defaultOptions,
    format: "es",
    exports: "named",
    input: "./src/index.ts",
    output: "./dist/flicking.esm.js"
  },
  {
    ...defaultOptions,
    format: "cjs",
    input: "./src/index.umd.ts",
    output: "./dist/flicking.cjs.js"
  }
]);
