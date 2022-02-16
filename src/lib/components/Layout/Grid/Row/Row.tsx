import cls from 'classnames';
import React from 'react';

import { IFlexContainerElement, IViewPortSize } from '../Container/Container';

export interface IRow
  extends React.HTMLProps<HTMLDivElement>,
    IViewPortSize,
    IFlexContainerElement {
  rowCols?: number;
  rowColsSm?: number;
  rowColsMd?: number;
  rowColsLg?: number;
  rowColsXl?: number;
  rowColsXxl?: number;
  // 横向与纵向同时设置的间距
  gutter?: number;
  gutterSm?: number;
  gutterMd?: number;
  gutterLg?: number;
  gutterXl?: number;
  gutterXxl?: number;
  // 横向间距
  xGutter?: number;
  xGutterSm?: number;
  xGutterMd?: number;
  xGutterLg?: number;
  xGutterXl?: number;
  xGutterXxl?: number;
  // 纵向间距
  yGutter?: number;
  yGutterSm?: number;
  yGutterMd?: number;
  yGutterLg?: number;
  yGutterXl?: number;
  yGutterXxl?: number;
}

const Row: React.FC<IRow> = (props) => {
  const {
    sm,
    md,
    lg,
    xl,
    xxl,
    gutter,
    gutterSm,
    gutterMd,
    gutterLg,
    gutterXl,
    gutterXxl,
    xGutter,
    xGutterSm,
    xGutterMd,
    xGutterLg,
    xGutterXl,
    xGutterXxl,
    yGutter,
    yGutterSm,
    yGutterMd,
    yGutterLg,
    yGutterXl,
    yGutterXxl,
    rowCols,
    rowColsSm,
    rowColsMd,
    rowColsLg,
    rowColsXl,
    rowColsXxl,
    ...rest
  } = props;
  const clsNames = cls(
    'row',
    {
      'align-items-start': props.alignItemsStart,
      'align-items-sm-start': props.alignItemsStartSm,
      'align-items-md-start': props.alignItemsStartMd,
      'align-items-lg-start': props.alignItemsStartLg,
      'align-items-xl-start': props.alignItemsStartXl,
      'align-items-xxl-start': props.alignItemsStartXxl,
      'align-items-center': props.alignItemsCenter,
      'align-items-sm-center': props.alignItemsCenterSm,
      'align-items-md-center': props.alignItemsCenterMd,
      'align-items-lg-center': props.alignItemsCenterLg,
      'align-items-xl-center': props.alignItemsCenterXl,
      'align-items-xxl-center': props.alignItemsCenterXxl,
      'align-items-end': props.alignItemsEnd,
      'align-items-sm-end': props.alignItemsEndSm,
      'align-items-md-end': props.alignItemsEndMd,
      'align-items-lg-end': props.alignItemsEndLg,
      'align-items-xl-end': props.alignItemsEndXl,
      'align-items-xxl-end': props.alignItemsEndXxl,
      'align-items-baseline': props.alignItemsBaseLine,
      'align-items-sm-baseline': props.alignItemsBaseLineSm,
      'align-items-md-baseline': props.alignItemsBaseLineMd,
      'align-items-lg-baseline': props.alignItemsBaseLineLg,
      'align-items-xl-baseline': props.alignItemsBaseLineXl,
      'align-items-xxl-baseline': props.alignItemsBaseLineXxl,
      'justify-content-start': props.justifyContentStart,
      'justify-content-sm-start': props.justifyContentStartSm,
      'justify-content-md-start': props.justifyContentStartMd,
      'justify-content-lg-start': props.justifyContentStartLg,
      'justify-content-xl-start': props.justifyContentStartXl,
      'justify-content-xxl-start': props.justifyContentStartXxl,
      'justify-content-end': props.justifyContentEnd,
      'justify-content-sm-end': props.justifyContentEndSm,
      'justify-content-md-end': props.justifyContentEndMd,
      'justify-content-lg-end': props.justifyContentEndLg,
      'justify-content-xl-end': props.justifyContentEndXl,
      'justify-content-xxl-end': props.justifyContentEndXxl,
      'justify-content-center': props.justifyContentCenter,
      'justify-content-sm-center': props.justifyContentCenterSm,
      'justify-content-md-center': props.justifyContentCenterMd,
      'justify-content-lg-center': props.justifyContentCenterLg,
      'justify-content-xl-center': props.justifyContentCenterXl,
      'justify-content-xxl-center': props.justifyContentCenterXxl,
      'justify-content-between': props.justifyContentBetween,
      'justify-content-sm-between': props.justifyContentBetweenSm,
      'justify-content-md-between': props.justifyContentBetweenMd,
      'justify-content-lg-between': props.justifyContentBetweenLg,
      'justify-content-xl-between': props.justifyContentBetweenXl,
      'justify-content-xxl-between': props.justifyContentBetweenXxl,
      'justify-content-around': props.justifyContentAround,
      'justify-content-sm-around': props.justifyContentAroundSm,
      'justify-content-md-around': props.justifyContentAroundMd,
      'justify-content-lg-around': props.justifyContentAroundLg,
      'justify-content-xl-around': props.justifyContentAroundXl,
      'justify-content-xxl-around': props.justifyContentAroundXxl,
      'justify-content-evenly': props.justifyContentEvenly,
      'justify-content-sm-evenly': props.justifyContentEvenlySm,
      'justify-content-md-evenly': props.justifyContentEvenlyMd,
      'justify-content-lg-evenly': props.justifyContentEvenlyLg,
      'justify-content-xl-evenly': props.justifyContentEvenlyXl,
      'justify-content-xxl-evenly': props.justifyContentEvenlyXxl,
    },
    {
      [`row-cols-${rowCols}`]: rowCols,
      [`row-cols-sm-${rowColsSm}`]: rowColsSm,
      [`row-cols-md-${rowColsMd}`]: rowColsMd,
      [`row-cols-lg-${rowColsLg}`]: rowColsLg,
      [`row-cols-xl-${rowColsXl}`]: rowColsXl,
      [`row-cols-xxl-${rowColsXxl}`]: rowColsXxl,
    },
    {
      [`row-sm-${sm}`]: sm,
      [`row-md-${md}`]: md,
      [`row-lg-${lg}`]: lg,
      [`row-xl-${xl}`]: xl,
      [`row-xxl-${xxl}`]: xxl,
    },
    {
      [`g-${gutter}`]: gutter,
      [`g-sm-${gutterSm}`]: gutterSm,
      [`g-md-${gutterMd}`]: gutterMd,
      [`g-lg-${gutterLg}`]: gutterLg,
      [`g-xl-${gutterXl}`]: gutterXl,
      [`g-xxl-${gutterXxl}`]: gutterXxl,
    },
    {
      [`gx-${gutter}`]: xGutter,
      [`gx-sm-${xGutterSm}`]: xGutterSm,
      [`gx-md-${xGutterMd}`]: xGutterMd,
      [`gx-lg-${xGutterLg}`]: xGutterLg,
      [`gx-xl-${xGutterXl}`]: xGutterXl,
      [`gx-xxl-${xGutterXxl}`]: xGutterXxl,
    },
    {
      [`gy-${gutter}`]: yGutter,
      [`gy-sm-${yGutterSm}`]: yGutterSm,
      [`gy-md-${yGutterMd}`]: yGutterMd,
      [`gy-lg-${yGutterLg}`]: yGutterLg,
      [`gy-xl-${yGutterXl}`]: yGutterXl,
      [`gy-xxl-${yGutterXxl}`]: yGutterXxl,
    },
  );
  return (
    <>
      <div className={clsNames} {...rest}>
        {rest.children}
      </div>
    </>
  );
};

export default Row;
