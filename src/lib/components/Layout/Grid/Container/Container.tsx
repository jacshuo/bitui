import '@/assets/styles/index.scss';

import React from 'react';

export interface IViewPortSize {
  sm?: number | boolean;
  md?: number | boolean;
  lg?: number | boolean;
  xl?: number | boolean;
  xxl?: number | boolean;
}

export interface IFlexContainerElement {
  alignItemsStart?: boolean;
  alignItemsCenter?: boolean;
  alignItemsEnd?: boolean;
  alignItemsStretch?: boolean;
  alignItemsBaseLine?: boolean;
  alignItemsStartSm?: boolean;
  alignItemsStartMd?: boolean;
  alignItemsStartLg?: boolean;
  alignItemsStartXl?: boolean;
  alignItemsStartXxl?: boolean;
  alignItemsCenterSm?: boolean;
  alignItemsCenterMd?: boolean;
  alignItemsCenterLg?: boolean;
  alignItemsCenterXl?: boolean;
  alignItemsCenterXxl?: boolean;
  alignItemsEndSm?: boolean;
  alignItemsEndMd?: boolean;
  alignItemsEndLg?: boolean;
  alignItemsEndXl?: boolean;
  alignItemsEndXxl?: boolean;
  alignItemsStretchSm?: boolean;
  alignItemsStretchMd?: boolean;
  alignItemsStretchLg?: boolean;
  alignItemsStretchXl?: boolean;
  alignItemsStretchXxl?: boolean;
  alignItemsBaseLineSm?: boolean;
  alignItemsBaseLineMd?: boolean;
  alignItemsBaseLineLg?: boolean;
  alignItemsBaseLineXl?: boolean;
  alignItemsBaseLineXxl?: boolean;
  justifyContentStart?: boolean;
  justifyContentStartSm?: boolean;
  justifyContentStartMd?: boolean;
  justifyContentStartLg?: boolean;
  justifyContentStartXl?: boolean;
  justifyContentStartXxl?: boolean;
  justifyContentCenter?: boolean;
  justifyContentCenterSm?: boolean;
  justifyContentCenterMd?: boolean;
  justifyContentCenterLg?: boolean;
  justifyContentCenterXl?: boolean;
  justifyContentCenterXxl?: boolean;
  justifyContentEnd?: boolean;
  justifyContentEndSm?: boolean;
  justifyContentEndMd?: boolean;
  justifyContentEndLg?: boolean;
  justifyContentEndXl?: boolean;
  justifyContentEndXxl?: boolean;
  justifyContentBetween?: boolean;
  justifyContentBetweenSm?: boolean;
  justifyContentBetweenMd?: boolean;
  justifyContentBetweenLg?: boolean;
  justifyContentBetweenXl?: boolean;
  justifyContentBetweenXxl?: boolean;
  justifyContentAround?: boolean;
  justifyContentAroundSm?: boolean;
  justifyContentAroundMd?: boolean;
  justifyContentAroundLg?: boolean;
  justifyContentAroundXl?: boolean;
  justifyContentAroundXxl?: boolean;
  justifyContentEvenly?: boolean;
  justifyContentEvenlySm?: boolean;
  justifyContentEvenlyMd?: boolean;
  justifyContentEvenlyLg?: boolean;
  justifyContentEvenlyXl?: boolean;
  justifyContentEvenlyXxl?: boolean;
}

export interface IContainer extends React.HTMLProps<HTMLDivElement>, IViewPortSize {
  fluid?: boolean;
}

import cls from 'classnames';

const Container: React.FC<IContainer> = (props) => {
  const { fluid, sm, md, lg, xl, xxl, ...rest } = props;
  const clsNames = cls('container', {
    'container-fluid': fluid,
    'container-sm': sm,
    'container-md': md,
    'container-lg': lg,
    'container-xl': xl,
    'container-xxl': xxl,
  });
  return (
    <>
      <div className={clsNames} {...rest}>
        {rest.children}
      </div>
    </>
  );
};

export default Container;
