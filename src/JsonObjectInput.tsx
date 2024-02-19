import {Stack} from '@sanity/ui'
import {useFieldMember} from './useFieldMember'
import {JsonInputProps} from './types'
import {JsonField} from './JsonField'

const JsonObjectInput = (props: JsonInputProps) => {
  const {members, renderField, renderInput, renderItem, renderPreview} = props

  const json = useFieldMember(members, 'json')

  return (
    <Stack space={4}>
      {json && (
        <JsonField
          member={json}
          renderField={renderField}
          renderItem={renderItem}
          renderInput={renderInput}
          renderPreview={renderPreview}
        />
      )}
    </Stack>
  )
}

export default JsonObjectInput
