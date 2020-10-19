import React from 'react';
import styles from './index.module.css';
//import cx from 'classnames'

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}) => {
  const buttonMode = primary ? styles.storybook_button_primary : styles.storybook_button_secondary;
  let buttonSize
  switch(size) {
    case('large'):
      buttonSize = styles.storybook_button_large
      break
    case('small'):
      buttonSize = styles.storybook_button_small
      break
    default:
      buttonSize = styles.storybook_button_medium
  }
  return (
    <button
      type="button"
      className={[styles.storybook_button, buttonMode, buttonSize].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
