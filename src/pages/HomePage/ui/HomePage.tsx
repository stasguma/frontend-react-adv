import { type FC } from 'react';

import { memo } from 'react';

import { Typography } from '@/shared/ui';

const HomePage: FC = () => {
  const { Title } = Typography;

  return (
    <>
      {/** eslint-disable */}
      <Title variant="1">Heading 1</Title>
      <Title variant="3" as="h1">Heading 3 as H1</Title>
      <Title variant="2">Heading 2</Title>
      <Title variant="3">Heading 3</Title>
      <Title variant="4">Heading 4</Title>
      {/** eslint-enable */}
    </>
  );
};

export default memo(HomePage);
