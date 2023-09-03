import { Box, Button, Tooltip, TooltipProps } from '@felipeab10-ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Tooltip',
  component: Tooltip,
  args: {
    children: <Button variant="tertiary">Hover me</Button>,
    content: '21 de Outubro - Indisponível',
  },
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            padding: '$20',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
