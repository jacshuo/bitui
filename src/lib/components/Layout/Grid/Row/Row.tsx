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
    alignItemsStart,
    alignItemsCenter,
    alignItemsEnd,
    alignItemsStretch,
    alignItemsBaseLine,
    alignItemsStartSm,
    alignItemsStartMd,
    alignItemsStartLg,
    alignItemsStartXl,
    alignItemsStartXxl,
    alignItemsCenterSm,
    alignItemsCenterMd,
    alignItemsCenterLg,
    alignItemsCenterXl,
    alignItemsCenterXxl,
    alignItemsEndSm,
    alignItemsEndMd,
    alignItemsEndLg,
    alignItemsEndXl,
    alignItemsEndXxl,
    alignItemsStretchSm,
    alignItemsStretchMd,
    alignItemsStretchLg,
    alignItemsStretchXl,
    alignItemsStretchXxl,
    alignItemsBaseLineSm,
    alignItemsBaseLineMd,
    alignItemsBaseLineLg,
    alignItemsBaseLineXl,
    alignItemsBaseLineXxl,
    justifyContentStart,
    justifyContentStartSm,
    justifyContentStartMd,
    justifyContentStartLg,
    justifyContentStartXl,
    justifyContentStartXxl,
    justifyContentCenter,
    justifyContentCenterSm,
    justifyContentCenterMd,
    justifyContentCenterLg,
    justifyContentCenterXl,
    justifyContentCenterXxl,
    justifyContentEnd,
    justifyContentEndSm,
    justifyContentEndMd,
    justifyContentEndLg,
    justifyContentEndXl,
    justifyContentEndXxl,
    justifyContentBetween,
    justifyContentBetweenSm,
    justifyContentBetweenMd,
    justifyContentBetweenLg,
    justifyContentBetweenXl,
    justifyContentBetweenXxl,
    justifyContentAround,
    justifyContentAroundSm,
    justifyContentAroundMd,
    justifyContentAroundLg,
    justifyContentAroundXl,
    justifyContentAroundXxl,
    justifyContentEvenly,
    justifyContentEvenlySm,
    justifyContentEvenlyMd,
    justifyContentEvenlyLg,
    justifyContentEvenlyXl,
    justifyContentEvenlyXxl,
    ...rest
  } = props;
  const clsNames = cls(
    'row',
    {
      'align-items-start': alignItemsStart,
      'align-items-sm-start': alignItemsStartSm,
      'align-items-md-start': alignItemsStartMd,
      'align-items-lg-start': alignItemsStartLg,
      'align-items-xl-start': alignItemsStartXl,
      'align-items-xxl-start': alignItemsStartXxl,
      'align-items-center': alignItemsCenter,
      'align-items-sm-center': alignItemsCenterSm,
      'align-items-md-center': alignItemsCenterMd,
      'align-items-lg-center': alignItemsCenterLg,
      'align-items-xl-center': alignItemsCenterXl,
      'align-items-xxl-center': alignItemsCenterXxl,
      'align-items-stretch': alignItemsStretch,
      'align-items-sm-stretch': alignItemsStretchSm,
      'align-items-md-stretch': alignItemsStretchMd,
      'align-items-lg-stretch': alignItemsStretchLg,
      'align-items-xl-stretch': alignItemsStretchXl,
      'align-items-xxl-stretch': alignItemsStretchXxl,
      'align-items-end': alignItemsEnd,
      'align-items-sm-end': alignItemsEndSm,
      'align-items-md-end': alignItemsEndMd,
      'align-items-lg-end': alignItemsEndLg,
      'align-items-xl-end': alignItemsEndXl,
      'align-items-xxl-end': alignItemsEndXxl,
      'align-items-baseline': alignItemsBaseLine,
      'align-items-sm-baseline': alignItemsBaseLineSm,
      'align-items-md-baseline': alignItemsBaseLineMd,
      'align-items-lg-baseline': alignItemsBaseLineLg,
      'align-items-xl-baseline': alignItemsBaseLineXl,
      'align-items-xxl-baseline': alignItemsBaseLineXxl,
      'justify-content-start': justifyContentStart,
      'justify-content-sm-start': justifyContentStartSm,
      'justify-content-md-start': justifyContentStartMd,
      'justify-content-lg-start': justifyContentStartLg,
      'justify-content-xl-start': justifyContentStartXl,
      'justify-content-xxl-start': justifyContentStartXxl,
      'justify-content-end': justifyContentEnd,
      'justify-content-sm-end': justifyContentEndSm,
      'justify-content-md-end': justifyContentEndMd,
      'justify-content-lg-end': justifyContentEndLg,
      'justify-content-xl-end': justifyContentEndXl,
      'justify-content-xxl-end': justifyContentEndXxl,
      'justify-content-center': justifyContentCenter,
      'justify-content-sm-center': justifyContentCenterSm,
      'justify-content-md-center': justifyContentCenterMd,
      'justify-content-lg-center': justifyContentCenterLg,
      'justify-content-xl-center': justifyContentCenterXl,
      'justify-content-xxl-center': justifyContentCenterXxl,
      'justify-content-between': justifyContentBetween,
      'justify-content-sm-between': justifyContentBetweenSm,
      'justify-content-md-between': justifyContentBetweenMd,
      'justify-content-lg-between': justifyContentBetweenLg,
      'justify-content-xl-between': justifyContentBetweenXl,
      'justify-content-xxl-between': justifyContentBetweenXxl,
      'justify-content-around': justifyContentAround,
      'justify-content-sm-around': justifyContentAroundSm,
      'justify-content-md-around': justifyContentAroundMd,
      'justify-content-lg-around': justifyContentAroundLg,
      'justify-content-xl-around': justifyContentAroundXl,
      'justify-content-xxl-around': justifyContentAroundXxl,
      'justify-content-evenly': justifyContentEvenly,
      'justify-content-sm-evenly': justifyContentEvenlySm,
      'justify-content-md-evenly': justifyContentEvenlyMd,
      'justify-content-lg-evenly': justifyContentEvenlyLg,
      'justify-content-xl-evenly': justifyContentEvenlyXl,
      'justify-content-xxl-evenly': justifyContentEvenlyXxl,
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
