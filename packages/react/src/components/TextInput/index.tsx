import { ComponentProps } from 'react'
import { Input, Prefix, TexInputContainer } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
}

export function TextInput({ prefix, ...props }: TextInputProps) {
  return (
    <TexInputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input {...props} />
    </TexInputContainer>
  )
}

TextInput.displayName = 'TextInput'
