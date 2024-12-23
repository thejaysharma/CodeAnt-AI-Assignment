import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils"
import PropTypes from "prop-types";

const buttonVariants = cva(
  "border rounded-lg border-solid flex justify-center items-center",
  {
    variants: {
      variant: {
        default: "bg-[#1570EF] border-2 border-[rgba(255,255,255,0.12)] text-white",
        outline:
          "bg-white border-[#D5D7DA] text-[#171717]",
      },
      size: {
        default: "px-2.5 py-2.5 text-sm not-italic font-normal leading-5",
        md: "px-2.5 py-3 text-base not-italic font-semibold leading-6",
        lg: "px-2.5 py-4 text-base not-italic font-semibold leading-7",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

Button.propTypes = {
    variant: PropTypes.oneOf([
        "default",
        "outline",
    ]),
    size: PropTypes.oneOf(["default", "md", "lg"]),
    className: PropTypes.string,
    asChild: PropTypes.bool,
};

export { Button }
