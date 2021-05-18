import React, { ReactElement } from 'react';
import { IoIosCloseCircle } from 'react-icons/io';
import { BtnIcon } from '../Button';
import { defaultModalStyle, defaultModalBackdropStyle } from './Modal.styles';

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  modalBackdropStyle?: React.CSSProperties;
  modalStyle?: React.CSSProperties;
  handleCloseModal?: () => void;
  showModal?: boolean;
  modalHeader?:
    | React.ReactNode
    | ReactElement
    | JSX.Element
    | HTMLElement
    | string;
  modalBody?:
    | React.ReactNode
    | ReactElement
    | JSX.Element
    | HTMLElement
    | string;
  modalFooter?:
    | React.ReactNode
    | ReactElement
    | JSX.Element
    | HTMLElement
    | string;
}

export const Modal: React.FC<ModalProps> = ({
  modalBackdropStyle,
  handleCloseModal,
  modalStyle,
  modalHeader,
  modalFooter,
  modalBody,
  showModal,
}) => {
  return (
    <div className="flex flex--column align-items--c justify-content--c">
      <div
        style={{
          display: showModal ? 'block' : 'none',
          ...defaultModalBackdropStyle,
          zIndex: 8999, // with respect to modal
          ...modalBackdropStyle,
        }}
      ></div>
      <div
        style={{
          display: showModal ? 'block' : 'none',
          ...defaultModalStyle,
          zIndex: 9000,
          ...modalStyle,
        }}
      >
        <BtnIcon
          size="lg"
          style={{
            position: 'absolute',
            right: 0,
          }}
          onClick={handleCloseModal}
        >
          <IoIosCloseCircle className="text--xl" />
        </BtnIcon>
        {modalHeader || (
          <div
            style={{
              borderBottom: '2px solid var(--grey-500)',
              padding: 'var(--space-sm)',
              fontWeight: 500,
            }}
          >
            Modal Header
          </div>
        )}
        {modalBody || (
          <div
            style={{
              borderBottom: '2px solid var(--grey-500)',
              padding: 'var(--space-lg)',
            }}
          >
            Modal Body
          </div>
        )}
        {modalFooter || (
          <div
            className="flex align-items--c justify-content--c gap--sm"
            style={{
              padding: 'var(--space-sm)',
            }}
          >
            Modal Footer
          </div>
        )}
      </div>
    </div>
  );
};
