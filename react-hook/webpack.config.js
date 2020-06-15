const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "telefonica",
    projectName: "react-hook",
    webpackConfigEnv,
  });

  return webpackMerge.smart(defaultConfig, {
    module: {
      rules: [
        {
          test: /\.svg$/,
          use: ["@svgr/webpack", "url-loader"],
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ],
        },
      ],
    },
    // modify the webpack config however you'd like to by adding to this object
  });
};
