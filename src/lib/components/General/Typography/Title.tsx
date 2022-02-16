import './Title.scss';

import classNames from 'classnames';
import React, { FC } from 'react';

export interface ITitle extends React.HTMLProps<HTMLHeadingElement> {
  theme?: 'light' | 'dark';
  level?: number;
}

const Title: FC<ITitle> = ({ level, theme, children, className, ...rest }) => {
  const cls = classNames('bit-title', {
    [`${theme ?? 'light'}`]: true,
  });
  const renderTitle = (level?: number) => {
    switch (level) {
      case undefined:
      case 1:
        return (
          <h1 className={classNames(cls, 'h1', className)} {...rest}>
            {children}
          </h1>
        );
      case 2:
        return (
          <h2 className={classNames(cls, 'h2', className)} {...rest}>
            {children}
          </h2>
        );
      case 3:
        return (
          <h3 className={classNames(cls, 'h3', className)} {...rest}>
            {children}
          </h3>
        );
      case 4:
        return (
          <h4 className={classNames(cls, 'h4', className)} {...rest}>
            {children}
          </h4>
        );
      case 5:
        return (
          <h5 className={classNames(cls, 'h5', className)} {...rest}>
            {children}
          </h5>
        );
    }
  };
  return <>{renderTitle(level)}</>;
};

export default Title;
