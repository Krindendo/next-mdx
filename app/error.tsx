'use client';

import ArrowRightIcon from '@heroicons/react/24/solid/ArrowRightIcon';
import type { FC } from 'react';

import SitePattern from '@/components/Containers/SitePattern/SitePattern';
import Button from '@/components/ui/Button';
import BaseLayout from '@/layouts/Base';
import CenteredLayout from '@/layouts/Centered';

const GlobalErrorPage: FC<{ error: Error }> = () => {
  return (
    <html>
      <body>
        <BaseLayout>
          <CenteredLayout>
            <SitePattern />

            <main>
              500
              <h1 className="special -mt-4">Internal Server Error</h1>
              <p className="-mt-4 max-w-sm text-center text-lg">
                This page has thrown a non-recoverable error.
              </p>
              <Button href="/">
                Back to Home
                <ArrowRightIcon />
              </Button>
            </main>
          </CenteredLayout>
        </BaseLayout>
      </body>
    </html>
  );
};

export default GlobalErrorPage;
