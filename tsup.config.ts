import {defineConfig} from 'tsup';

export default defineConfig({
  entry: {
    index: 'lib/index.ts',
    'helpers/index': 'lib/helpers/index.ts',
    'hooks/index': 'lib/hooks/index.ts',
    'types/index': 'lib/types/index.ts'
  },
  outDir: 'dist',
  format: ['cjs', 'esm'],
  clean: true,
  sourcemap: true,
  treeshake: true,
  dts: true
});
