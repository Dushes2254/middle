import { ProgressPlugin, WebpackPluginInstance } from 'webpack'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import { BuildOptions } from '../type/config'

export function buildPlugins({ paths }: BuildOptions): WebpackPluginInstance[] {
  return [
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    new ProgressPlugin(),
  ]
}
