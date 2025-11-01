// Temporary module shims to allow typechecking when node_modules are not installed.
// These are minimal declarations to silence "Cannot find module" errors.

declare module 'next';
declare module 'next/image';
declare module 'next/server';
declare module 'next/font/google';
declare module 'react';
declare module 'react-dom';
declare module 'react-redux';
declare module '@reduxjs/toolkit';
declare module 'clsx';
declare module 'class-variance-authority';
declare module 'lucide-react';
declare module 'tailwind-merge';
declare module 'tailwindcss-animate';
declare module '@mui/icons-material/*';

// Allow any JSX tags while modules/types are not installed.
declare global {
  namespace JSX {
    interface IntrinsicAttributes {
      [key: string]: any;
    }
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

export {};
