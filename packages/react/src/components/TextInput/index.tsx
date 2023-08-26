import { ComponentProps, ElementRef, forwardRef } from 'react'
import { Input, Prefix, TexInputContainer } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ prefix, ...props }: TextInputProps, ref) => {
    return (
      <TexInputContainer>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input ref={ref} {...props} />
      </TexInputContainer>
    )
  },
)

TextInput.displayName = 'TextInput'
