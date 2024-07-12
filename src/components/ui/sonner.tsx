'use client'

import { useTheme } from 'next-themes'
import { Nunito } from 'next/font/google'
import { Toaster as Sonner } from 'sonner'

type ToasterProps = React.ComponentProps<typeof Sonner>

const nunito = Nunito({ subsets: ['latin'] })

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className={`${nunito.className} toaster group`}
      toastOptions={{
        classNames: {
          toast: 'bg-white border-2 border-softer-gray',
          title:
            'font-semibold text-main-text text-sm flex align-baseline items-end',
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
