/*---------------------------------------------------------------------------------------------
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT License.
*--------------------------------------------------------------------------------------------*/
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  transpileDependencies:true,
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      builderOptions:{
        extraFiles: [
        {from:'./CalculatorCLI/drop',to:'./'}],
      }
    }
  },
  configureWebpack: {
    plugins: [new MiniCssExtractPlugin()],
  }
};
