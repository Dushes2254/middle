import path from 'path'
import { Configuration } from 'webpack'
import { buildWebpackConfiguration } from './config/build/buildWebpackConfiguration'
import { BuildPath } from './config/type/config'

const paths: BuildPath = {
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  build: path.resolve(__dirname, 'build'),
  html: path.resolve(__dirname, 'public', 'index.html'),
}

const mode = 'development'
const isDev = mode === 'development'

const config: Configuration = buildWebpackConfiguration({
  mode: 'development',
  paths,
  isDev,
})

export default config
