/* eslint-disable no-empty-function */
import {useState, useCallback, useMemo, CSSProperties, useEffect} from 'react'

type PlainJsonEditorProps = {
  value?: {}
  onChange?: (_: string) => void
  error?: string
  showInnerError?: boolean
  serializer?: (_: string) => {}
  deserializer?: (_: {}) => string
  onSerializeError?: (e: Error) => void
  styles?: {
    root?: {}
    textarea?: {}
    error?: {}
  }
}

export const PlainJsonEditor = (props: PlainJsonEditorProps) => {
  const {
    value = {},
    onChange = () => {},
    error = '',
    showInnerError = true,
    serializer = JSON.parse,
    deserializer = (json = {}) => JSON.stringify(json, null, 2),
    onSerializeError = (e = new Error('Serialize error')) => {},
    styles = {},
  } = props

  const [text, setText] = useState(() => deserializer(value))
  const [errorText, setErrorText] = useState(error)
  useEffect(() => {
    setErrorText(error)
  }, [error])
  const clearErrorText = useCallback(() => {
    setErrorText('')
  }, [setErrorText])

  const handleChange = useCallback(
    (e: any) => {
      const v = e.target.value
      setText(v)
      try {
        onChange(serializer(v))
        if (showInnerError) clearErrorText()
      } catch (sError: any) {
        onSerializeError(sError)
        if (showInnerError) setErrorText(`${sError.name}:${sError.message}`)
      }
    },
    [setText, serializer],
  )

  const mergedStyles = useMemo(
    () => ({
      root: {
        width: '100%',
        height: '50vh',
        ...styles.root,
      } as CSSProperties,
      textarea: {
        backgroundColor: 'transparent',
        width: '100%',
        height: '100%',
        ...styles.textarea,
      } as CSSProperties,
      error: {
        position: 'absolute',
        backgroundColor: 'rgba(100,100,100,0.75)',
        borderRadius: '12px',
        padding: '12px',
        color: 'white',
        transform: 'translate(-50%,-50%)',
        top: '50%',
        left: '50%',
        ...styles.error,
      } as CSSProperties,
    }),
    [styles],
  )

  return (
    <div style={mergedStyles.root}>
      <textarea style={mergedStyles.textarea} value={text} onChange={handleChange} />
      {errorText && <div style={mergedStyles.error}>{errorText}</div>}
    </div>
  )
}

PlainJsonEditor.defaultProps = {
  value: {},
  onChange: (_: {}) => {},
  error: '',
  showInnerError: true,
  serializer: JSON.parse,
  deserializer: (json: {}) => JSON.stringify(json, null, 2),
  onSerializeError: (e: Error) => {},
  styles: {},
}

PlainJsonEditor.defaultProps = {
  value: {},
  onChange: (_: {}) => {},
  error: '',
  showInnerError: true,
  serializer: JSON.parse,
  deserializer: (json: {}) => JSON.stringify(json, null, 2),
  onSerializeError: (e: Error) => {},
  styles: {},
}
