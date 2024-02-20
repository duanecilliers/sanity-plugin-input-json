import {defineType} from 'sanity'
import JsonObjectInput from './JsonObjectInput'

export const jsonInputSchema = defineType({
  title: 'JSON',
  name: 'json',
  type: 'object',
  fields: [
    {
      type: 'string',
      title: 'JSON',
      name: 'json',
      validation: (Rule) =>
        Rule.custom((json: string) => {
          if (!json) return true
          try {
            JSON.parse(json)
            return true
          } catch (err: any) {
            return `Invalid JSON: ${err.message}`
          }
        }),
    },
  ],
  components: {
    input: JsonObjectInput,
    // preview: IframePreview as any, // add preview component
  },
  preview: {
    select: {
      json: 'json',
    },
    prepare: ({json}) => {
      return {
        title: 'json',
        json,
      }
    },
  },
})
