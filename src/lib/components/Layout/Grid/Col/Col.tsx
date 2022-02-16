import cls from 'classnames';
import React from 'react';

import { IViewPortSize } from '../Container/Container';

export interface ICol extends React.HTMLProps<HTMLDivElement>, IViewPortSize {
  span?: number;
  order?: number;
  // todo:: Order-breakpoints
  auto?: boolean;
  autoSm?: boolean;
  autoMd?: boolean;
  autoLg?: boolean;
  autoXl?: boolean;
  autoXxl?: boolean;
  offset?: number;
  offsetSm?: number;
  offsetMd?: number;
  offsetLg?: number;
  offsetXl?: number;
  offsetXxl?: number;
}

const Col: React.FC<ICol> = (props) => {
  const {
    span,
    sm,
    md,
    lg,
    xl,
    xxl,
    order,
    offset,
    offsetSm,
    offsetMd,
    offsetLg,
    offsetXl,
    offsetXxl,
    auto,
    autoSm,
    autoMd,
    autoLg,
    autoXl,
    autoXxl,
    ...rest
  } = props;
  const clsNames = cls({
    col: !sm && !md && !lg && !xl && !xxl && !span && !auto,
    [`col-sm`]: sm && !auto,
    [`col-md`]: md && !auto,
    [`col-lg`]: lg && !auto,
    [`col-xl`]: xl && !auto,
    [`col-xxl`]: xxl && !auto,
    [`col-${span}`]: span && !auto,
    [`col-sm-${sm}`]: sm && !auto,
    [`col-md-${md}`]: md && !auto,
    [`col-lg-${lg}`]: lg && !auto,
    [`col-xl-${xl}`]: xl && !auto,
    [`col-xxl-${xxl}`]: xxl && !auto,
    [`offset-${offset}`]: offset,
    [`offset-sm-${offsetSm}`]: offsetSm,
    [`offset-md-${offsetMd}`]: offsetMd,
    [`offset-lg-${offsetLg}`]: offsetLg,
    [`offset-xl-${offsetXl}`]: offsetXl,
    [`offset-xxl-${offsetXxl}`]: offsetXxl,
    ['order']: order,
    [`col-auto`]: auto,
    [`col-sm-auto`]: autoSm,
    [`col-md-auto`]: autoMd,
    [`col-lg-auto`]: autoLg,
    [`col-xl-auto`]: autoXl,
    [`col-xxl-auto`]: autoXxl,
  });
  return (
    <>
      <div className={clsNames} {...rest}>
        {rest.children}
      </div>
    </>
  );
};

export default Col;
