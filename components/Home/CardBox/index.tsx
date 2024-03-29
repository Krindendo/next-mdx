import type { LanguageCard } from '../CardContent';

import { Card, CardTitle, CardDescription } from '@/components/Common/Card';

const CardBox = (language: Array<LanguageCard>) => {
  return (
    <>
      {language.map(language => (
        <Card
          key={language.href}
          href={language.href}
          pattern={language.pattern}
        >
          {language.icon}
          <CardTitle>{language.title}</CardTitle>
          <CardDescription>{language.description}</CardDescription>
        </Card>
      ))}
    </>
  );
};

export default CardBox;
