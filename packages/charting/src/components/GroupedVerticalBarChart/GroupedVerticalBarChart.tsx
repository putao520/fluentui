import { styled } from '../../Utilities';
import {
  IGroupedVerticalBarChartProps,
  IGroupedVerticalBarChartStyleProps,
  IGroupedVerticalBarChartStyles,
} from './GroupedVerticalBarChart.types';
import { GroupedVerticalBarChartBase } from './GroupedVerticalBarChart.base';
import { getStyles } from './GroupedVerticalBarChart.styles';

// Create a GroupedVerticalBarChart variant which uses these default styles and this styled subcomponent.
export const GroupedVerticalBarChart: React.FunctionComponent<IGroupedVerticalBarChartProps> = styled<
  IGroupedVerticalBarChartProps,
  IGroupedVerticalBarChartStyleProps,
  IGroupedVerticalBarChartStyles
>(GroupedVerticalBarChartBase, getStyles);
