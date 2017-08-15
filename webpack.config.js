const path = require("path");

module.exports = () => {
  return {
    context: path.join(__dirname, "src", "js"),

    entry: {
      "hello-world": "./hello-world",
      "events": "./events",
      "interval": "./interval",
      "who-to-follow": "./who-to-follow"
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
