import {ObjectInputProps, ObjectSchemaType} from 'sanity'

export type JsonInputValue = {
  _type?: 'json'
  json?: string
}

export interface JsonInputSchemaType extends ObjectSchemaType {}

export interface JsonInputProps extends ObjectInputProps<JsonInputValue, JsonInputSchemaType> {}
