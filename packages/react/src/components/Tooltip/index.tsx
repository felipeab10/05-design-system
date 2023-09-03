import * as TooltipBase from '@radix-ui/react-tooltip'
import { ComponentProps, ReactNode } from 'react'
import { TooltipArrow, TooltipContent } from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipBase.Root> {
  content: string | ReactNode
}

export function Tooltip({ children, content, ...props }: TooltipProps) {
  return (
    <TooltipBase.Provider>
      <TooltipBase.Root {...props}>
        <TooltipBase.Trigger asChild>{children}</TooltipBase.Trigger>
        <TooltipBase.Portal>
          <TooltipContent>
            <TooltipArrow />

            {content}
          </TooltipContent>
        </TooltipBase.Portal>
      </TooltipBase.Root>
    </TooltipBase.Provider>
  )
}

Tooltip.displayName = 'Tooltip'
