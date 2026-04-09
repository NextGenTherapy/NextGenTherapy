// Type declarations for SCSS imports
// TypeScript 6.0 requires explicit type declarations for side-effect imports

declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}
