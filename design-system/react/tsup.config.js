import { defineConfig } from 'tsup';
import baseConfig from '@test-changeset/config/tsup';

export default defineConfig((options) => ({
  ...baseConfig(options, { withReact: true }),
  entry: ['src/index.tsx'],
}));
