'use client';
import React from 'react';
import { cn } from '@/lib/utils'; // optional utility for conditional classNames

// Card component
export const Card = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});
Card.displayName = 'Card';

// CardContent component
export const CardContent = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('p-4', className)}
      {...props}
    >
      {children}
    </div>
  );
});
CardContent.displayName = 'CardContent';
