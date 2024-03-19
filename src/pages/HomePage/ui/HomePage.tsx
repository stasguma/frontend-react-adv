import { type FC } from 'react';
// import { useTranslation } from 'react-i18next';

import { Typography } from '@/shared/ui';
// import { changeName } from '@/entities/User';

const HomePage: FC = () => {
  // const { t } = useTranslation();
  const { Title } = Typography;

  // const changeNameHandler = () => {
  //   dispatch(changeName('SuperStas'));
  // };

  return (
    <>
      { }
      {/* <Button variant="filled" onClick={changeNameHandler}>Change user name</Button> */}
      <p>{}</p>
      <Title variant="1">Heading 1</Title>
      <Title variant="3" as="h1">Heading 3 as H1</Title>
      <Title variant="2">Heading 2</Title>
      <Title variant="3">Heading 3</Title>
      <Title variant="4">Heading 4</Title>
    </>
  );
};

export default HomePage;
