import { ITheme, IStyle } from 'office-ui-fabric-react/lib/Styling';
import { IVerticalStackedChartProps } from '@uifabric/charting';
import { IOverflowSetProps } from 'office-ui-fabric-react/lib/OverflowSet';
import { IFocusZoneProps } from '@fluentui/react-focus';
import { IStyleFunctionOrObject } from 'office-ui-fabric-react/lib/Utilities';

export interface IVerticalStackedBarChartProps {
  /**
   * Data to render in the chart.
   */
  data: IVerticalStackedChartProps[];

  /**
   * Width of the chart.
   */
  width?: number;

  /**
   * Height of the chart.
   */
  height?: number;

  /**
   * Width of each bar in the chart.
   */
  barWidth?: number;

  /**
   * Number of ticks on the y-axis.
   */
  yAxisTickCount?: number;

  /**
   * Colors from which to select the color of each bar.
   */
  colors?: string[];

  /**
   * Label to apply to the whole chart.
   */
  chartLabel?: string;

  /**
   * Additional CSS class(es) to apply to the VerticalStackedBarChart.
   */
  className?: string;

  /**
   * Theme (provided through customization.)
   */
  theme?: ITheme;

  /**
   * Url that the data-viz needs to redirect to upon clicking on it
   */
  href?: string;

  /**
   * Call to provide customized styling that will layer on top of the variant rules.
   */
  styles?: IStyleFunctionOrObject<IVerticalStackedBarChartStyleProps, IVerticalStackedBarChartStyles>;

  /**
   * Enable the legends to wrap lines if there is not enough space to show all legends on a single line
   */
  enabledLegendsWrapLines?: boolean;

  /**
   * overflow props for the legends
   */
  legendsOverflowProps?: Partial<IOverflowSetProps>;

  /**
   * focus zone props in hover card for legends
   */
  focusZonePropsForLegendsInHoverCard?: IFocusZoneProps;
}

export interface IVerticalStackedBarChartStyleProps {
  /**
   * Theme (provided through customization.)
   */
  theme: ITheme;

  /**
   * Additional CSS class(es) to apply to the StackedBarChart.
   */
  className?: string;

  /**
   * Width of the chart.
   */
  width: number;

  /**
   * Height of the chart.
   */
  height: number;

  /**
   * color of the datapoint legend
   */
  legendColor?: string;

  /**
   * Link to redirect if click action for graph
   */
  href?: string;

  /**
   * prop to check if the chart is selcted or hovered upon to determine opacity
   */
  shouldHighlight?: boolean;
}

export interface IVerticalStackedBarChartStyles {
  /**
   *  Style for the root element.
   */
  root?: IStyle;

  /**
   * Style for the chart.
   */
  chart?: IStyle;

  /**
   * Style for the chart label.
   */
  chartLabel?: IStyle;

  /**
   * Style for the element containing the x-axis.
   */
  xAxis?: IStyle;

  /**
   * Style for the line representing the domain of the x-axis.
   */
  xAxisDomain?: IStyle;

  /**
   * Style for the lines representing the ticks along the x-axis.
   */
  xAxisTicks?: IStyle;

  /**
   * Style for the text labeling each tick along the x-axis.
   */
  xAxisText?: IStyle;

  /**
   * Style for the element containing the y-axis.
   */
  yAxis?: IStyle;

  /**
   * Style for the line representing the domain of the y-axis.
   */
  yAxisDomain?: IStyle;

  /**
   * Style for the lines representing the ticks along the y-axis.
   */
  yAxisTicks?: IStyle;

  /**
   * Style for the text labeling each tick along the y-axis.
   */
  yAxisText?: IStyle;

  /**
   * Style for the element containing all the bars in the chart.
   */
  bars?: IStyle;

  /**
   * Style for the root of the hover card
   */
  hoverCardRoot: IStyle;

  /**
   * Style for the legend card title displayed in the hover card
   */
  hoverCardTextStyles: IStyle;

  /**
   * Style for the data displayed in the hover card
   */
  hoverCardDataStyles: IStyle;

  /**
   * Style to change the opacity of bars in dataviz when we hover on a single bar or legends
   */
  opacityChangeOnHover: IStyle;

  /**
   * Style for the legends container
   */
  legendContainer?: IStyle;
}
