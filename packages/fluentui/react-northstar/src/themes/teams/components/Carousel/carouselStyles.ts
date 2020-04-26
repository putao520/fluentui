import { pxToRem } from '../../../../utils';
import { CarouselProps, CarouselState } from '../../../../components/Carousel/Carousel';
import { ComponentSlotStylesPrepared, ICSSInJSStyle } from '@fluentui/styles';
import { CarouselVariables } from './carouselVariables';

const carouselStyles: ComponentSlotStylesPrepared<CarouselProps & CarouselState, CarouselVariables> = {
  root: (): ICSSInJSStyle => ({
    display: 'inline-block',
  }),
  itemsContainerWrapper: ({ variables: v, props: p }): ICSSInJSStyle => ({
    display: 'flex',
    width: pxToRem(v.width),
    overflowX: 'hidden',
    border: '1px solid transparent',
    ...(p.shouldFocusContainer &&
      p.isFromKeyboard && {
        border: `1px solid ${v.focusOuterBorderColor}`,
        borderRadius: v.focusOuterBorderRadius,
      }),
  }),
  itemsContainer: (): ICSSInJSStyle => ({
    padding: 0,
    margin: 0,
    display: 'flex',
    listStyle: 'none',
    willChange: 'transform',
  }),
};

export default carouselStyles;
