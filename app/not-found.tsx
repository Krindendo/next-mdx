'use client';

import ArrowRightIcon from '@heroicons/react/24/solid/ArrowRightIcon';
import type { FC } from 'react';

import SitePattern from '@/components/Containers/SitePattern/SitePattern';
import Button from '@/components/ui/Button';
import CenteredLayout from '@/layouts/Centered';

const NotFoundPage: FC = () => {
  return (
    <CenteredLayout>
      <SitePattern />

      <main>
        404
        <h1 className="special -mt-4">Page could not be found</h1>
        <p className="-mt-4 max-w-sm text-center text-lg">
          Sorry, we couldn't find the page you're after!
        </p>
        <Button href="/">
          Back to Home
          <ArrowRightIcon />
        </Button>
      </main>
    </CenteredLayout>
  );
};

export default NotFoundPage;
