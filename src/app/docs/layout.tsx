import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      sidebar={{
        tabs: [
          {
            title: 'Componentsfretrfgtr',
            description: 'Hello World!',
            // active for `/docs/components` and sub routes like `/docs/components/button`
            url: '/docs/components',
            // optionally, you can specify a set of urls which activates the item
            // urls: new Set(['/docs/test', '/docs/components']),
          },
        ],
      }}
      tree={source.pageTree}
      {...baseOptions}
    >
      {children}
    </DocsLayout>
  );
}
