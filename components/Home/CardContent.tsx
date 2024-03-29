interface LanguageCard {
  href: string;
  title: string;
  description: string;
  icon: JSX.Element;
  pattern: {
    y: number;
    squares: Array<Array<number>>;
  };
}

const frontend: Array<LanguageCard> = [
  {
    href: '/docs/js',
    title: 'JavaScript',
    description:
      'Scripting language for web development, but it is used everywhere',
    icon: <Icons.javascript />,
    pattern: {
      y: -12,
      squares: [
        [0, 2],
        [1, 3],
      ],
    },
  },
  {
    href: '/docs/ts',
    title: 'TypeScript',
    description:
      'Statically typed superset of JavaScript that enhances code quality.',
    icon: <Icons.typescript />,
    pattern: {
      y: 0,
      squares: [
        [1, 4],
        [1, 4],
      ],
    },
  },
  {
    href: '/docs/react',
    title: 'React',
    description: 'Library for building web and native user interfaces.',
    icon: <Icons.react />,
    pattern: {
      y: -8,
      squares: [
        [-2, 0],
        [1, 3],
      ],
    },
  },
  {
    href: '/docs/next',
    title: 'Next.js',
    description:
      'The React framework for building full-stack web applications.',
    icon: <Icons.nextjs />,
    pattern: {
      y: 8,
      squares: [
        [1, 2],
        [0, 2],
      ],
    },
  },
  {
    href: '/docs/react-native',
    title: 'React Native',
    description: 'Native apps with React',
    icon: <Icons.react />,
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    href: '/docs/vue',
    title: 'Vue',
    description: 'JavaScript framework for building user interfaces.',
    icon: <Icons.vue />,
    pattern: {
      y: -6,
      squares: [
        [-1, 2],
        [1, 3],
      ],
    },
  },
];

const backend: Array<LanguageCard> = [
  {
    href: '/docs/node',
    title: 'Node.js',
    description:
      'Runtime environment that allows executing JavaScript code outside web browsers.',
    icon: <Icons.nodejs />,
    pattern: {
      y: 32,
      squares: [
        [0, 2],
        [1, 4],
      ],
    },
  },
];

const database: Array<LanguageCard> = [
  {
    href: '/docs/mysql',
    title: 'MySql',
    description:
      'Relational database management system, known for its speed, reliability.',
    icon: <Icons.planetScale />,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
];
export type { LanguageCard };
export { frontend, backend, database };
