import { CheckIcon } from "@heroicons/react/24/solid";
import * as Select from "@radix-ui/react-select";
import React, { ReactNode } from "react";

interface SelectCustomItemProps extends Select.SelectItemProps {
  children: ReactNode
  className?: string
}

export const SelectItem = React.forwardRef<HTMLDivElement, SelectCustomItemProps>(({ children, className, ...props }: SelectCustomItemProps, forwardedRef) => {
  return (
    <Select.Item
      className={
        'leading-none text-violet11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-slate-200 data-[highlighted]:text-blue-500'
        + className
      }
      {...props}
      ref={forwardedRef}
    >
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
        <CheckIcon />
      </Select.ItemIndicator>
    </Select.Item>
  );
});