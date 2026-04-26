// Hydration: in Astro, use client:* on the .astro page.
// In RSC frameworks (Next.js App Router), add 'use client' here.
import React from 'react'
import { Button as ButtonPrimitive } from '@base-ui-components/react/button'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

type PressButtonPrimitiveProps = Omit<
  Extract<ButtonPrimitive.Props, { nativeButton?: true }>,
  'className' | 'nativeButton' | 'render'
>

const pressButtonVariants = cva(
  [
    'border-2 border-solid rounded-none shadow-none',
    'inline-flex items-center justify-center gap-2 px-5 py-2.5',
    'font-mono text-[11px] font-medium uppercase tracking-[0.1em]',
    'transition-[background-color,border-color,color,transform] duration-120 ease-linear',
    'cursor-pointer enabled:active:translate-y-px',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
    'focus-visible:outline-[var(--pr-focus-ring)]',
    'disabled:cursor-not-allowed disabled:border-[var(--pr-border-light)]',
    'disabled:bg-[var(--pr-surface-mid)] disabled:text-[var(--pr-text-3)]',
  ],
  {
    variants: {
      variant: {
        primary: [
          'border-[var(--pr-border)] bg-[var(--pr-border)] text-[var(--pr-text-inv)]',
          'enabled:hover:border-[var(--pr-orange)] enabled:hover:bg-[var(--pr-orange)]',
        ],
        ghost: [
          'border-[var(--pr-border)] bg-transparent text-[var(--pr-text)]',
          'enabled:hover:border-[var(--pr-orange)] enabled:hover:bg-[var(--pr-orange-dim)]',
          'enabled:hover:text-[var(--pr-orange)]',
        ],
      },
    },
    defaultVariants: { variant: 'primary' },
  }
)

export interface PressButtonProps
  extends PressButtonPrimitiveProps,
    VariantProps<typeof pressButtonVariants> {
  className?: string
}

export function PressButton({
  className,
  variant,
  ...props
}: PressButtonProps) {
  return (
    <ButtonPrimitive
      className={cn(pressButtonVariants({ variant, className }))}
      {...props}
    />
  )
}
