import * as React from "react"
import { cn } from "@/lib/utils"
import PropTypes from 'prop-types';

const Input = React.forwardRef(({ className, Icon, type, ...props }, ref) => {
  return (
    <div className="relative">
      {Icon && <div className="absolute inset-y-0 start-0 ps-3.5 flex items-center justify-center pointer-events-none text-neutral-40">
        {Icon}
      </div>}
      <input
        type={type}
        className={cn(
          "flex w-full rounded-lg bg-white border border-[#D5D7DA] px-3.5 py-2.5 placeholder:text-[#414651] placeholder:text-base placeholder:not-italic placeholder:font-normal text-[#414651] text-base not-italic font-normal leading-5 shadow-sm",
          className
        )}
        ref={ref}
        {...props} />
    </div>

  )
})

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  Icon: PropTypes.node,
  props: PropTypes.object
};

Input.displayName = "Input"

export { Input }
