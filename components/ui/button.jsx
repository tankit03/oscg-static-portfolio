import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-satoshiBold text-[16px] transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
  {
    variants: {
      variant: {
        default:
          'bg-primaryBlack text-primary-foreground shadow hover:bg-primaryOrange hover:scale-105', // Add hover:bg-primaryOrange and hover:scale-105
        destructive:
          'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 hover:scale-105',
        outline:
          'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground hover:scale-105',
        secondary:
          'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 hover:scale-105',
        ghost: 'hover:bg-accent hover:text-accent-foreground hover:scale-105',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, className }),
          'cursor-pointer'
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
