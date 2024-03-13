import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './Modal';

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

export const SmallSize: Story = {
  args: {
    children: 'Loasdoa sdas das daosdaosk doas dasdo kasdaskodkaso daso dkasodasod kasodkasodkaoskdoa sdo akosdk asod kasodk asodk asod kasod kaso dkaso kasodk asodj ashdu ashjhdasljdhasljdhlas jdhalsjhdlasjhdqwu hdsajhdlasjhdlajshld jasdh asjdhlasjhdasljdh saljdhlasjhdlasj hlsjakhdlajskhdlasjhda jsajldhlajshdaljsdals ljasd',
    isOpen: true,
    size: 'sm',
  },
};
export const LargeSize: Story = {
  args: {
    children: 'Loasdoa sdas das daosdaosk doas dasdo kasdaskodkaso daso dkasodasod kasodkasodkaoskdoa sdo akosdk asod kasodk asodk asod kasod kaso dkaso kasodk asodj ashdu ashjhdasljdhasljdhlas jdhalsjhdlasjhdqwu hdsajhdlasjhdlajshld jasdh asjdhlasjhdasljdh saljdhlasjhdlasj hlsjakhdlajskhdlasjhda jsajldhlajshdaljsdals ljasd',
    isOpen: true,
    size: 'lg',
  },
};
