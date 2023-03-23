import path from "path";

import type { Configuration } from 'webpack';

import { rules } from './webpack.rules';
import { plugins } from './webpack.plugins';

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});

export const rendererConfig: Configuration = {
  module: {
    rules,
  },
  plugins,
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/renderer/components"),
      "@styling": path.resolve(__dirname, "src/renderer/styling")
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
  },
};
