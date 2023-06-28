import React from "react";

export function Title({
    children,
    as = "h1",
    className,
  }: {
    children: React.ReactNode;
    as?: React.ElementType;
    className?: string;
  }) {
    const Tag = as;
    return (
      <Tag className={`${className} text-9xl font-semibold text-gray-200`}>
        {children}
      </Tag>
    );
  }
  
  export function Title1({
    children,
    as = "h1",
    className,
  }: {
    children: React.ReactNode;
    as?: React.ElementType;
    className?: string;
  }) {
    const Tag = as;
    return (
      <Tag className={`${className} text-8xl font-semibold text-gray-200`}>
        {children}
      </Tag>
    );
  }
  
  export function Title2({
    children,
    as = "h1",
    className,
  }: {
    children: React.ReactNode;
    as?: React.ElementType;
    className?: string;
  }) {
    const Tag = as;
    return (
      <Tag className={`${className} text-7xl font-semibold text-gray-200`}>
        {children}
      </Tag>
    );
  }
  
  export function Title3({
    children,
    as = "h1",
    className,
  }: {
    children: React.ReactNode;
    as?: React.ElementType;
    className?: string;
  }) {
    const Tag = as;
    return (
      <Tag className={`${className} text-6xl font-semibold text-gray-200`}>
        {children}
      </Tag>
    );
  }
  
  export function Subheading({
    children,
    as = "h1",
    className,
  }: {
    children: React.ReactNode;
    as?: React.ElementType;
    className?: string;
  }) {
    const Tag = as;
    return (
      <Tag className={`${className} text-4xl font-semibold text-gray-200`}>
        {children}
      </Tag>
    );
  }
  
