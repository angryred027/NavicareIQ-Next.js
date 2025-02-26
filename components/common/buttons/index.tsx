import React, { FC } from 'react';
import ButtonOutlined from './btn-outlined';
import { TButtons } from './buttons-type';

type Props = TButtons & {
  variant: 'primary' | 'secondary' | 'outlined';
};
export const Button: FC<Props> = ({ variant, ...rest }) => {
  switch (variant) {
    case 'primary':
      return <ButtonOutlined {...rest} />;
    case 'secondary':
      return <ButtonOutlined {...rest} />;
    case 'outlined':
      return <ButtonOutlined {...rest} />;
    default:
      return null;
  }
};
