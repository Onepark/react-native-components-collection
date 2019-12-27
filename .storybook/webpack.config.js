const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.stories\.jsx?$/,
        loaders: [require.resolve("@storybook/addon-storysource/loader")],
        enforce: "pre"
      },
      {
        test: /\.js$/,
        include: [
          /node_modules\/react-native-/,
          /node_modules\/@onepark\.tech\/react-native-/
        ],
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            presets: ["react-native"]
          }
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      "react-native": "react-native-web",
      "react-native-linear-gradient": "react-native-web-linear-gradient",
      "@onepark/react-native-component-circle-image": path.join(
        __dirname,
        "../packages/react-native-component-circle-image"
      ),
      "@onepark/react-native-component-map-clustering": path.join(
        __dirname,
        "../packages/react-native-component-map-clustering"
      ),
      "@onepark/react-native-component-password-strength-indicator": path.join(
        __dirname,
        "../packages/react-native-component-password-strength-indicator"
      ),
      "@onepark/react-native-component-progress-bar": path.join(
        __dirname,
        "../packages/react-native-component-progress-bar"
      ),
      "@onepark/react-native-component-separator": path.join(
        __dirname,
        "../packages/react-native-component-separator"
      ),
      "@onepark/react-native-component-text": path.join(
        __dirname,
        "../packages/react-native-component-text"
      ),
      "@onepark/react-native-component-text-input": path.join(
        __dirname,
        "../packages/react-native-component-text-input"
      ),
      "@onepark/react-native-component-verification-code-input": path.join(
        __dirname,
        "../packages/react-native-component-verification-code-input"
      )
    },
    extensions: [".web.js", ".js"]
  }
};
