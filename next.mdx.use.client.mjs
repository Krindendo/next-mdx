'use strict';

import Callout from './components/Common/Callout';
import { Card, CardTitle, CardDescription } from './components/Common/Card';
import MdxCard from './components/Common/MdxCard';
import ReactLogo from './components/Icons/Languages/React';
import Link from './components/Link';
import MDXCodeBox from '@/components/MDX/CodeBox';
import MDXCodeTabs from '@/components/MDX/CodeTabs';
import MDXImage from '@/components/MDX/Image';
import { Button } from '@/components/ui/button';

/**
 * A full list of React Components that we want to pass through to MDX
 *
 * @satisfies {import('mdx/types').MDXComponents}
 */
export const clientMdxComponents = {
  // Renders MDX CodeTabs
  CodeTabs: MDXCodeTabs,
  // Renders a Button Component for `button` tags
  Button,
  //
  Card: {
    //
    Box: Card,
    //
    Title: CardTitle,
    //
    Description: CardDescription,
  },
  MdxCard,
  Icons: {
    React: ReactLogo,
  },
  Callout,
};

/**
 * A full list of wired HTML elements into custom React Components
 *
 * @type {import('mdx/types').MDXComponents}
 */
export const htmlComponents = {
  // Renders a Link Component for `a` tags
  a: Link,
  // Renders a CodeBox Component for `pre` tags
  pre: MDXCodeBox,
  // Renders an Image Component for `img` tags
  img: MDXImage,
};
