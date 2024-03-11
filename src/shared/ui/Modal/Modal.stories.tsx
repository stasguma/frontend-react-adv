import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './Modal';

// 👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Modal> = {
  title: 'Shared/Modal',
  component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    children: 'Loasdoa sdas das daosdaosk doas dasdo kasdaskodkaso daso dkasodasod kasodkasodkaoskdoa sdo akosdk asod kasodk asodk asod kasod kaso dkaso kasodk asodj ashdu ashjhdasljdhasljdhlas jdhalsjhdlasjhdqwu hdsajhdlasjhdlajshld jasdh asjdhlasjhdasljdh saljdhlasjhdlasj hlsjakhdlajskhdlasjhda jsajldhlajshdaljsdals ljasd',
    isOpen: true,
  },
};
