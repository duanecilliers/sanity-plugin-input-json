import {useCallback} from 'react'
import {set, StringInputProps, unset} from 'sanity'
import {PlainJsonEditor} from './PlainJsonEditor'

export interface JsonInputProps extends StringInputProps {
  json: string
}

export function JsonInput(props: JsonInputProps) {
  const {json, onChange} = props

  const handleChange = useCallback(
    (value: string) => {
      onChange(value ? set(JSON.stringify(value)) : unset())
    },
    [onChange],
  )

  const handleSerializeError = (e: Error) => {
    console.info(e)
  }

  // return <TextArea {...props} value={json} onChange={handleChange} />
  return (
    <PlainJsonEditor
      value={JSON.parse(json)}
      onChange={handleChange}
      // onSubmit={handleSubmit}
      onSerializeError={handleSerializeError}
    />
  )
}
