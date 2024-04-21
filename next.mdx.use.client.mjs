'use strict';

import { Card, CardTitle, CardDescription } from './components/Common/Card';
import JavaScriptLogo from './components/Icons/Languages/JavaScript';
import MySQLLogo from './components/Icons/Languages/MySQL';
import NextjsLogo from './components/Icons/Languages/Nextjs';
import NodejsLogo from './components/Icons/Languages/Nodejs';
import PlanetScaleLogo from './components/Icons/Languages/PlanetScale';
import ReactLogo from './components/Icons/Languages/React';
import TypeScriptLogo from './components/Icons/Languages/TypeScript';
import VueLogo from './components/Icons/Languages/Vue';
import Link from './components/Link';
import MDXCodeBox from './components/MDX/CodeBox';
import MDXCodeTabs from './components/MDX/CodeTabs';
import MDXImage from './components/MDX/Image';
import { Button } from './components/ui/Button';

/**
 * A full list of React Components that we want to pass through to MDX
 *
 * @satisfies {import('mdx/types').MDXComponents}
 */
export const clientMdxComponents = {
  // Renders MDX CodeTabs
  CodeTabs: MDXCodeTabs,
  // Renders a Button Component for `button` tags
  Button: Button,
  //
  Card: {
    //
    Box: Card,
    //
    Title: CardTitle,
    //
    Description: CardDescription,
  },
  Icons: {
    JavaScript: JavaScriptLogo,
    TypeScript: TypeScriptLogo,
    MySQL: MySQLLogo,
    Nextjs: NextjsLogo,
    Nodejs: NodejsLogo,
    PlanetScale: PlanetScaleLogo,
    React: ReactLogo,
    Vue: VueLogo,
  },
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
