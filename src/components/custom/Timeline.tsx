
import * as React from "react";
import { cn } from "@/lib/utils";
import Icon from "@/components/ui/icon";

export const Timeline = ({ 
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div 
      className={cn("relative ml-3", className)} 
      {...props}
    >
      {children}
    </div>
  );
};

export const TimelineItem = ({ 
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div 
      className={cn("flex mb-6 last:mb-0", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export const TimelineSeparator = ({ 
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div 
      className={cn("flex flex-col items-center mr-4", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export const TimelineDot = ({ 
  className,
  icon,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  icon?: string;
}) => {
  return (
    <div 
      className={cn(
        "flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 z-10",
        className
      )}
      {...props}
    >
      {icon && <Icon name={icon} className="w-5 h-5" />}
    </div>
  );
};

export const TimelineConnector = ({ 
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div 
      className={cn("w-1 grow bg-gray-200 my-1", className)}
      {...props}
    />
  );
};

export const TimelineContent = ({ 
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div 
      className={cn("pt-1 pb-5", className)}
      {...props}
    >
      {children}
    </div>
  );
};
