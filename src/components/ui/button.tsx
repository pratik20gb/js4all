import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl hover:scale-[1.02]",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-lg",
        outline: "border-2 border-border bg-transparent text-foreground hover:bg-secondary hover:border-primary/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "text-foreground hover:bg-secondary hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-primary text-primary-foreground font-bold shadow-[0_0_30px_hsl(48_96%_53%/0.4)] hover:shadow-[0_0_50px_hsl(48_96%_53%/0.6)] hover:scale-105",
        level: "bg-card border-2 border-border text-foreground hover:border-primary hover:shadow-[0_0_20px_hsl(48_96%_53%/0.3)] transition-all duration-300",
        levelActive: "bg-primary text-primary-foreground border-2 border-primary shadow-[0_0_30px_hsl(48_96%_53%/0.5)]",
        option: "bg-card border-2 border-border text-foreground hover:border-primary/50 hover:bg-secondary text-left justify-start",
        optionCorrect: "bg-[hsl(142_76%_36%/0.2)] border-2 border-[hsl(142_76%_36%)] text-foreground shadow-[0_0_20px_hsl(142_76%_36%/0.3)]",
        optionIncorrect: "bg-destructive/20 border-2 border-destructive text-foreground",
        optionSelected: "bg-primary/20 border-2 border-primary text-foreground",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-md px-4",
        lg: "h-14 rounded-xl px-10 text-lg",
        xl: "h-16 rounded-xl px-12 text-xl",
        icon: "h-10 w-10",
        full: "h-14 w-full rounded-xl px-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
