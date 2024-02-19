import {useCallback} from 'react'
import {FieldMember, InputProps, MemberField, MemberFieldProps, StringInputProps} from 'sanity'
import {JsonInput} from './JsonInput'

export interface JsonFieldProps extends StringInputProps {}

export function JsonField(props: MemberFieldProps & {member: FieldMember}) {
  const {member, renderItem, renderField, renderPreview} = props

  const renderInput = useCallback(
    (inputProps: Omit<InputProps, 'renderDefault'>) => {
      return (
        <JsonInput
          {...(inputProps as StringInputProps)}
          json={(member.field.value as string) || ''}
        />
      )
    },
    [member.field],
  )

  return (
    <MemberField
      member={member}
      renderItem={renderItem}
      renderField={renderField}
      renderInput={renderInput}
      renderPreview={renderPreview}
    />
  )
}
