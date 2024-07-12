'use client'

import { useTheme } from 'next-themes'
import { Toaster as Sonner } from 'sonner'

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast: 'bg-white border-2 border-softer-gray pb-2',
          title:
            'font-black text-main-text text-sm flex align-baseline items-end',
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
