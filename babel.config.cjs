// eslint-disable-next-line no-undef
// module.exports = { presets: [["@babel/preset-env", { targets: { node: "current" } }]] };
// eslint-disable-next-line no-undef
module.exports = {
    presets: ["@babel/preset-env", ["@babel/preset-react", { runtime: "automatic" }], "@babel/preset-typescript"],
};
