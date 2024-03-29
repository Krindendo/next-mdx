import { Analytics } from '@vercel/analytics/react';
import classNames from 'classnames';
import type { FC, PropsWithChildren } from 'react';

import BaseLayout from '@/layouts/Base';
import { VERCEL_ENV } from '@/next.constants.mjs';
import { CAL_SANS, OPEN_SANS } from '@/next.fonts';
import { ThemeProvider } from '@/providers/themeProvider';

import '@/styles/index.css';

const fontClasses = classNames(CAL_SANS.variable, OPEN_SANS.variable);

const RootLayout: FC<PropsWithChildren> = async ({ children }) => {
  return (
    <html className={fontClasses}>
      <body suppressHydrationWarning>
        <ThemeProvider>
          <BaseLayout>{children}</BaseLayout>
        </ThemeProvider>

        <a
          rel="me"
          aria-hidden="true"
          className="hidden"
          href="https://social.lfx.dev/@nodejs"
        />

        {VERCEL_ENV && (
          <>
            <Analytics />
          </>
        )}
      </body>
    </html>
  );
};

export default RootLayout;
