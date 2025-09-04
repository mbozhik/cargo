import * as React from 'react'

import {cn} from '@/lib/utils'

function Input({className, type, ...props}: React.ComponentProps<'input'>) {
  return <input type={type} data-slot="input" className={cn('placeholder:text-neutral-400 selection:bg-foreground selection:text-background border-neutral-200 flex h-9 w-full min-w-0 rounded-md border bg-background px-3 py-1 text-base transition-colors outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', 'focus:border-foreground focus:ring-2 focus:ring-neutral-300', className)} {...props} />
}

export {Input}
