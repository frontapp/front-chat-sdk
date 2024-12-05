import {defineConfig} from 'tsup';

export default defineConfig({
  entry: {
    index: 'lib/index.ts',
    'helpers/index': 'lib/helpers/index.ts',
    // 'helpers/boot/index': 'lib/helpers/boot/index.ts',
    'hooks/index': 'lib/hooks/index.ts',
    // 'hooks/use-front-chat/index': 'lib/hooks/use-front-chat/index.ts',
    // 'hooks/use-front-chat-boot/index': 'lib/hooks/use-front-chat-boot/index.ts',
    'types/index': 'lib/types/index.ts'
  },
  outDir: 'dist',
  format: ['cjs', 'esm'],
  clean: true,
  sourcemap: true,
  treeshake: true,
  dts: true
});
