import './Paragraph.scss';

import classNames from 'classnames';
import React from 'react';

export interface IParagraph {
  className?: string;
  style?: React.CSSProperties;
}

const Paragraph: React.FC<IParagraph> = ({ children, className, style }) => {
  const cls = classNames('bit-paragraph', className);
  return (
    <p className={cls} style={style}>
      {children}
    </p>
  );
};

export default Paragraph;
