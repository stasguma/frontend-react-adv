import type { Meta, StoryObj } from '@storybook/react';

import { Paragraph } from './Paragraph';

const meta: Meta<typeof Paragraph> = {
  title: 'Shared/Typography/Paragraph',
  component: Paragraph,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Paragraph>;

export const Default: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ducimus id soluta modi minima accusamus, magni tempora dolorem reiciendis fugit vero voluptas neque autem totam officia sapiente ex debitis facere nisi omnis dolores delectus doloribus in. Quam aperiam nulla, nihil eius tenetur harum rerum eaque libero eum corrupti doloribus consectetur laboriosam voluptas porro nam aspernatur dignissimos molestias veniam rem quasi labore repellat facere. Consequuntur temporibus maxime fuga consequatur excepturi culpa tempore quaerat, facere labore deserunt.',
  },
};

export const ParagraphSizes: Story = {
  name: 'Paragraph sizes',
  render: () => (
    <div style={{ display: 'flex', flexFlow: 'column', gap: 10 }}>
      <Paragraph>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, impedit non. Libero explicabo blanditiis mollitia quae quod similique ad vitae autem voluptatibus labore doloremque totam, voluptatum repellendus nam rem delectus suscipit fugit doloribus! Adipisci corporis et reiciendis! Nihil sed earum aperiam debitis veritatis, natus dicta quasi cum beatae est quia!</Paragraph>
      <Paragraph size="sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, impedit non. Libero explicabo blanditiis mollitia quae quod similique ad vitae autem voluptatibus labore doloremque totam, voluptatum repellendus nam rem delectus suscipit fugit doloribus! Adipisci corporis et reiciendis! Nihil sed earum aperiam debitis veritatis, natus dicta quasi cum beatae est quia!</Paragraph>
    </div>
  ),
};
