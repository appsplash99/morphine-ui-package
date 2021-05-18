import React, { useState } from 'react';
import { FaMagic, FaShippingFast } from 'react-icons/fa';
import { Meta, Story } from '@storybook/react';
import { Alert, AlertProps } from './Alert';
import { Btn } from '../Button';

export default {
  title: 'components/Alert',
  component: Alert,
  parameters: {
    controls: { expanded: true },
  },
} as Meta;

const Template: Story<AlertProps> = args => {
  const [showAlert, setShowAlert] = useState<boolean>(true);
  const handleHideAlert: () => void = () => {
    setShowAlert(false);
  };
  return (
    <div className="flex flex--column gap--lg">
      {!showAlert ? (
        <Btn
          onClick={() => setShowAlert(true)}
          size="xs"
          style={{ width: 'var(--space-xxxl)' }}
        >
          Show Alert
        </Btn>
      ) : (
        <Alert
          showAlert={showAlert}
          handleHideAlert={handleHideAlert}
          {...args}
        />
      )}
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  showAlert: true,
};

export const ErrorAlert = Template.bind({});
ErrorAlert.args = {
  severity: 'error',
};

export const Warning = Template.bind({});
Warning.args = {
  severity: 'warning',
};

export const Info = Template.bind({});
Info.args = {
  severity: 'info',
};

export const Light = Template.bind({});
Light.args = {
  severity: 'light',
};

export const Success = Template.bind({});
Success.args = {
  severity: 'success',
};

export const Primary = Template.bind({});
Primary.args = {
  severity: 'primary',
  alertTitle: 'Woosh...',
  alertIcon: <FaShippingFast className="text--md" />,
};

export const Secondary = Template.bind({});
Secondary.args = {
  severity: 'secondary',
  alertIcon: <FaMagic className="text--md" />,
  alertTitle: 'Abra ka dabra',
  children: 'Gilli Gilli CHoo....',
};

export const Custom = Template.bind({});
Custom.args = {
  shape: 'capsule',
  className: 'bg--themeRed',
  alertIcon: <FaMagic className="text--md" />,
  alertTitle: 'Abra ka dabra',
  children: 'Gilli Gilli CHoo....',
};
