import React from 'react';
import {
  FaInfo,
  FaCheckCircle,
  FaExclamationCircle,
  FaExclamationTriangle,
} from 'react-icons/fa';

export interface AlertVariant {
  className?: string;
  icon?: JSX.Element;
  alertTitle?: string;
}

export interface AlertVariants {
  default: AlertVariant;
  light: AlertVariant;
  dark: AlertVariant;
  primary: AlertVariant;
  secondary: AlertVariant;
  success: AlertVariant;
  error: AlertVariant;
  info: AlertVariant;
  warning: AlertVariant;
}

export const alertVariants: AlertVariants = {
  default: {
    className: 'bg--dark text--light',
    icon: <FaInfo className="text--md" />,
    alertTitle: 'default alert title',
  },
  light: {
    className: 'bg--light text--dark',
    icon: <FaInfo className="text--md" />,
    alertTitle: 'light alert',
  },
  dark: {
    className: 'bg--dark text--light',
    icon: <FaInfo className="text--md" />,
    alertTitle: 'dark alert',
  },
  error: {
    className: 'bg--danger text--light',
    icon: <FaExclamationCircle className="text--md" />,
    alertTitle: 'Error',
  },
  warning: {
    className: 'bg--warning text--dark',
    icon: <FaExclamationTriangle className="text--md" />,
    alertTitle: 'Warning',
  },
  info: {
    className: 'bg--info text--light',
    icon: <FaInfo className="text--md" />,
    alertTitle: 'Info',
  },
  success: {
    className: 'bg--success text--light',
    icon: <FaCheckCircle className="text--md" />,
    alertTitle: 'Success',
  },
  primary: {
    className: 'bg--primary text--light',
    icon: <FaInfo className="text--md" />,
    alertTitle: 'Primary',
  },
  secondary: {
    className: 'bg--secondary text--dark',
    icon: <FaInfo className="text--md" />,
    alertTitle: 'Secondary',
  },
};
