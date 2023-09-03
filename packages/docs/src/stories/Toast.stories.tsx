import { Button, Toast, ToastProps } from '@felipeab10-ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

function TestComponent(props: ToastProps) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Show Toast</Button>

      <Toast open={isOpen} onOpenChange={setIsOpen} {...props} />
    </>
  )
}

export default {
  title: 'Form/Toast',
  component: TestComponent,
  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h',
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
