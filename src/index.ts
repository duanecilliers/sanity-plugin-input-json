import {definePlugin} from 'sanity'
import {jsonInputSchema} from './schema'

interface InputJsonConfig {
  /* nothing here yet */
}

/**
 * Usage in `sanity.config.ts` (or .js)
 *
 * ```ts
 * import {defineConfig} from 'sanity'
 * import {inputJson} from 'sanity-plugin-input-json'
 *
 * export default defineConfig({
 *   // ...
 *   plugins: [inputJson()],
 * })
 * ```
 */
export const inputJson = definePlugin<InputJsonConfig | void>((config = {}) => {
  return {
    name: 'sanity-plugin-input-json',
    schema: {
      types: [jsonInputSchema],
    },
  }
})
