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
    // TODO: change iframe preview. It auto scrolls to the embed and is annoying
    // preview: IframePreview as any, // TODO: fix this type
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
