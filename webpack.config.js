const path = require("path");

module.exports = () => {
  return {
    context: path.join(__dirname, "src", "js"),

    entry: {
      "hello-world": "./hello-world",
      "events": "./events"
    },

    output: {
      path: path.join(__dirname, "dist", "js"),
      filename: "[name].js"
    },

    module: {
      rules: [
        { 
          test: /\.js?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader"
            }
          ]
        }
      ]
    },

    resolve: {
      extensions: [".js"]
    }
  };
};
