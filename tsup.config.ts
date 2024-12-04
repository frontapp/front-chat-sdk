import {defineConfig} from 'tsup';

export default defineConfig({
  entry: {
    index: 'lib/index.ts',
    'helpers/index': 'lib/helpers/index.ts',
    'hooks/index': 'lib/hooks/index.ts',
    'types/index': 'lib/types/index.ts'
  },
  outDir: 'dist',
  format: ['esm', 'cjs'],
  clean: true,
  sourcemap: true,
  splitting: false,
  dts: true
});
