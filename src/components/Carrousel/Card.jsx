import React, { forwardRef } from "react"

const Card = forwardRef(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`rounded-3xl bg-white shadow-md transition-all duration-300 hover:shadow-xl 
    flex flex-col text-center overflow-hidden ${className}`}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = forwardRef(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`flex flex-col items-center justify-center space-y-4 p-8 ${className}`}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = forwardRef(({ className = "", ...props }, ref) => (
  <h3
    ref={ref}
    className={`text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight ${className}`}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = forwardRef(({ className = "", ...props }, ref) => (
  <p
    ref={ref}
    className={`text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed ${className}`}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = forwardRef(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`w-full flex flex-col items-center justify-center p-8 ${className}`}
    {...props}
  />
))
CardContent.displayName = "CardContent"

const CardFooter = forwardRef(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`flex items-center justify-center gap-6 p-6 ${className}`}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
