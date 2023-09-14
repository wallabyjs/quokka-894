import { defineConfig, loadEnv } from 'vite'
import solid from 'vite-plugin-solid'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig(({mode}) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  return {

    plugins: [
      tsconfigPaths({loose: true}),
      solid({
        babel: {
          plugins: [
            // ["@locator/babel-jsx/dist", {env: "development"}],
          ],
        }
      })
    ],
  }
})