import { DocsLayout, type DocsLayoutProps } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';
import { BookIcon, ServerOff, Waypoints } from 'lucide-react'
import { GithubInfo } from 'fumadocs-ui/components/github-info';

const docsOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: source.pageTree,
  links: [
    {
      type: 'custom',
      children: (
        <GithubInfo owner="aboodi.jay" repo="aboodi-jay" className="lg:-mx-2" />
      ),
    },
  ],
};


export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      sidebar={{
        enabled: true,
        tabs: {
          transform: (option, node) => {
            console.log('Sidebar Item:', option.title, option.title);

            let icon;
            switch(option.title) {
              case 'Active Directory Lab Setup':
                icon = <Waypoints size={20} />;
                break;
              case 'Active Directory Pentesting':
                icon = <ServerOff size={20} />;
                break;
              default:
                icon = <BookIcon size={20} />;  
            }

            return {
              ...option,
              icon,
            };
          }
        }
      }}

      

     tree={source.pageTree} {...baseOptions}>
      {children}
     </DocsLayout>
  );
  
}






/* Latest working implementation of sidebar

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      sidebar={{
        enabled: true,
        tabs: {
          transform: (option, node) => ({
            ...option,
            icon: <NetworkIcon size={20} />,
          })
        }
      }}

      

     tree={source.pageTree} {...baseOptions}>
      {children}
    </DocsLayout>
  );
  
}

*/


/* Old implementation of side bar

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout 
        sidebar={{
    tabs: [
      {
        title: 'whoami',
        description: 'If this shows up anywhere, you know!',
        // active for `/docs/components` and sub routes like `/docs/components/button`
        url: '/docs',

        // optionally, you can specify a set of urls which activates the item
        urls: new Set(['/docs/my-folder/test','/docs']),
      },
    ],
  }}

      tree={{
        name: 'docs',
        children: [],
      }}
      // other props
    >
      {children}
    </DocsLayout>
  );
}

*/




/*

# Fumadocs Framework: GitHub Info
URL: /docs/ui/components/github-info
Source: https://raw.githubusercontent.com/fuma-nama/fumadocs/refs/heads/main/apps/docs/content/docs/ui/components/github-info.mdx

Display your GitHub repository information
        
## Usage

```tsx
import { GithubInfo } from 'fumadocs-ui/components/github-info';

<GithubInfo
  owner="fuma-nama"
  repo="fumadocs"
  // your own GitHub access token (optional)
  token={process.env.GITHUB_TOKEN}
/>;
```

It's recommended to add it to your docs layout with `links` option:

```tsx title="app/docs/layout.tsx"
import { DocsLayout, type DocsLayoutProps } from 'fumadocs-ui/layouts/notebook';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';
import { GithubInfo } from 'fumadocs-ui/components/github-info';

const docsOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: source.pageTree,
  links: [
    {
      type: 'custom',
      children: (
        <GithubInfo owner="fuma-nama" repo="fumadocs" className="lg:-mx-2" />
      ),
    },
  ],
};

export default function Layout({ children }: { children: ReactNode }) {
  return <DocsLayout {...docsOptions}>{children}</DocsLayout>;
}
```
*/