import path from 'path'
import { Configuration } from 'webpack'
import { buildWebpackConfiguration } from './config/build/buildWebpackConfiguration'
import { BuildEnv, BuildPath } from './config/type/config'

export default (env: BuildEnv) => {
  const paths: BuildPath = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
  }

  const mode = env.mode
  const port = env.port || 3000

  const isDev = mode === 'development'

  const config: Configuration = buildWebpackConfiguration({
    mode,
    paths,
    isDev,
    port,
  })

  return config
}
