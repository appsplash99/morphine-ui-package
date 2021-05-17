import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Modal } from './Modal';
import { Btn, BtnInverted } from '../Button';

export default {
  title: 'Components/Modal',
  component: Modal,
} as Meta;

const Template: Story = args => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <>
      <Btn variant="dark" size="xxxs" onClick={() => setShowModal(true)}>
        Show Modal
      </Btn>
      <Modal
        {...args}
        showModal={showModal}
        handleCloseModal={() => setShowModal(!showModal)}
      />
    </>
  );
};

export const Default = Template.bind({});

export const CustomModal = Template.bind({});
CustomModal.args = {
  modalBackdropStyle: {},
  modalStyle: { backgroundColor: 'var(--light)', margin: '0 6rem' },
  modalHeader: (
    <div
      style={{
        borderBottom: '2px solid var(--grey-500)',
        padding: 'var(--space-sm)',
        fontWeight: 500,
      }}
      className="text-align--c"
    >
      Add To Playlist
    </div>
  ),
  modalBody: (
    <div
      style={{
        borderBottom: '2px solid var(--grey-500)',
        padding: 'var(--space-lg)',
      }}
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium sint,
      mollitia aliquid nihil labore quis ea accusamus, animi voluptatum nulla
      placeat repellendus nobis, eos esse. Iste iusto consectetur odio quas?
    </div>
  ),
  modalFooter: (
    <div
      className="flex align-items--c justify-content--c gap--sm"
      style={{
        padding: 'var(--space-sm)',
      }}
    >
      <BtnInverted variant="dark" shape="rounded" size="xs">
        You'r
      </BtnInverted>
      <Btn variant="primary" shape="rounded" size="xs">
        Awesome
      </Btn>
    </div>
  ),
};
