const MonacoEditorPlugin = require("monaco-editor-webpack-plugin");

module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            "vue-style-loader",
            "css-loader",
            {
              loader: "sass-loader",
              // Requires sass-loader@^7.0.0
              // Requires sass-loader@^8.0.0
              options: {
                // This is the path to your variables
                prependData: "@import '@/styles/variables.scss'",
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new MonacoEditorPlugin({
        languages: ["javascript", "css", "html", "typescript"],
      }),
    ],
  },
};
