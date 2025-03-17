import React, { FC } from 'react';
import ButtonOutlined from './btn-outlined';
import ButtonFilled from './btn-filled';
import { TButtons } from './buttons-type';

type Props = TButtons & {
  variant: 'primary' | 'secondary' | 'outlined';
  disabled?: boolean;
};
export const Button: FC<Props> = ({ variant, ...rest }) => {
  switch (variant) {
    case 'primary':
      return <ButtonFilled {...rest} />;
    case 'secondary':
      return <ButtonOutlined {...rest} />;
    case 'outlined':
      return <ButtonOutlined {...rest} />;
    default:
      return null;
  }
};
