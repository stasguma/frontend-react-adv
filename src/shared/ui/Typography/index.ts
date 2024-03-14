import { Text } from './Text/Text';
import { Title } from './Title/Title';
import { Paragraph } from './Paragraph/Paragraph';

export interface TypographyType {
  Text: typeof Text;
  Title: typeof Title;
  Paragraph: typeof Paragraph;
};

const Typography: TypographyType = Object.assign({}, {
  Text,
  Title,
  Paragraph,
});

export default Typography;
