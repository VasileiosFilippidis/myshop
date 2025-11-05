// eslint.config.mjs
import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'

export default defineConfig([
  // Next.js rules with Core Web Vitals emphasized
  ...nextVitals,
  // Add TypeScript-specific Next.js rules
  ...nextTs,

  // Put your custom rules/overrides here if you want:
  {
    rules: {
      // Example: allow console.warn/error only
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      // Example: turn off the <img> rule if you intentionally use it
      '@next/next/no-img-element': 'off',
    },
  },

  // Replace .eslintignore with global ignores (ESLint 9 way)
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'dist/**',
    'coverage/**',
    'next-env.d.ts',
    'node_modules/**',
    '.vercel/**',
  ]),
])
