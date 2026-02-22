import type { Linter } from 'eslint';

import {
  javascript,
  perfectionist,
  prettier,
  turbo,
  typescript,
} from './configs';

type FlatConfig = Linter.Config;

type FlatConfigPromise =
  | FlatConfig
  | FlatConfig[]
  | Promise<FlatConfig>
  | Promise<FlatConfig[]>;

async function defineConfig(config: FlatConfig[] = []): Promise<FlatConfig[]> {
  const configs: FlatConfigPromise[] = [
    javascript(),
    typescript(),
    perfectionist(),
    prettier(),
    turbo(),
    ...config,
  ];

  const resolved = await Promise.all(configs);

  return resolved.flat();
}

export { defineConfig };
