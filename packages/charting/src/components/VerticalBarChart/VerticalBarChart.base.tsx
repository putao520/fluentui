import * as React from 'react';
import { max as d3Max } from 'd3-array';
import { axisLeft as d3AxisLeft, axisBottom as d3AxisBottom, Axis as D3Axis } from 'd3-axis';
import { scaleBand as d3ScaleBand, scaleLinear as d3ScaleLinear, ScaleLinear as D3ScaleLinear } from 'd3-scale';
import { select as d3Select } from 'd3-selection';
import { classNamesFunction } from 'office-ui-fabric-react/lib/Utilities';
import { IProcessedStyleSet, IPalette } from 'office-ui-fabric-react/lib/Styling';
import { Callout, DirectionalHint } from 'office-ui-fabric-react/lib/Callout';
import { FocusZone, FocusZoneDirection } from '@fluentui/react-focus';
import { ILegend, Legends } from '../Legends/index';

import {
  IVerticalBarChartProps,
  IVerticalBarChartStyleProps,
  IVerticalBarChartStyles,
  IVerticalBarChartDataPoint,
} from './VerticalBarChart.types';

const getClassNames = classNamesFunction<IVerticalBarChartStyleProps, IVerticalBarChartStyles>();
type numericAxis = D3Axis<number | { valueOf(): number }>;
type stringAxis = D3Axis<string>;

export interface IVerticalBarChartState {
  isCalloutVisible: boolean;
  isLegendSelected: boolean;
  isLegendHovered: boolean;
  selectedLegendTitle: string;
  // tslint:disable-next-line:no-any
  refSelected: any;
  dataForHoverCard: number;
  color: string;
}

export interface IRefArrayData {
  legendText?: string;
  refElement?: SVGGElement;
}

export class VerticalBarChartBase extends React.Component<IVerticalBarChartProps, IVerticalBarChartState> {
  private _points: IVerticalBarChartDataPoint[];
  private _width: number;
  private _height: number;
  private _barWidth: number;
  private _yAxisTickCount: number;
  private _colors: string[];
  private _classNames: IProcessedStyleSet<IVerticalBarChartStyles>;
  private _refArray: IRefArrayData[];

  public constructor(props: IVerticalBarChartProps) {
    super(props);
    this.state = {
      isCalloutVisible: false,
      isLegendSelected: false,
      isLegendHovered: false,
      selectedLegendTitle: '',
      refSelected: null,
      dataForHoverCard: 0,
      color: '',
    };
    this._refArray = [];
    this._adjustProps();
  }

  public render(): JSX.Element {
    this._adjustProps();
    const isNumeric = this._points.length > 0 && typeof this._points[0].x === 'number';

    const xAxis = isNumeric ? this._createNumericXAxis() : this._createStringXAxis();
    const yAxis = this._createYAxis();
    const { isCalloutVisible } = this.state;
    const { hideLegend = false } = this.props;
    const bars = isNumeric ? this._createNumericBars() : this._createStringBars();
    const legends: JSX.Element = this._getLegendData(this._points, this.props.theme!.palette);

    return (
      <div className={this._classNames.root}>
        {this.props.chartLabel && <p className={this._classNames.chartLabel}>{this.props.chartLabel}</p>}
        <FocusZone direction={FocusZoneDirection.horizontal}>
          <svg className={this._classNames.chart}>
            <g ref={(node: SVGGElement | null) => this._setXAxis(node, xAxis)} className={this._classNames.xAxis} />
            <g ref={(node: SVGGElement | null) => this._setYAxis(node, yAxis)} className={this._classNames.yAxis} />
            <g className={this._classNames.bars}>{bars}</g>
          </svg>
        </FocusZone>
        {!hideLegend && <div className={this._classNames.legendContainer}>{legends}</div>}
        {isCalloutVisible ? (
          <Callout
            gapSpace={10}
            isBeakVisible={false}
            target={this.state.refSelected}
            setInitialFocus={true}
            directionalHint={DirectionalHint.topRightEdge}
          >
            <div className={this._classNames.hoverCardRoot}>
              <div className={this._classNames.hoverCardTextStyles}>{this.state.selectedLegendTitle}</div>
              <div className={this._classNames.hoverCardDataStyles}>{this.state.dataForHoverCard}</div>
            </div>
          </Callout>
        ) : null}
      </div>
    );
  }

  private _onBarHover(
    customMessage: string,
    pointData: number,
    color: string,
    mouseEvent: React.MouseEvent<SVGPathElement>,
  ): void {
    mouseEvent.persist();
    this.setState({
      refSelected: mouseEvent,
      isCalloutVisible: true,
      dataForHoverCard: pointData,
      selectedLegendTitle: customMessage,
      color: color,
    });
  }

  private _getLegendData(data: IVerticalBarChartDataPoint[], palette: IPalette): JSX.Element {
    const actions: ILegend[] = [];
    data.map((point: IVerticalBarChartDataPoint, _index: number) => {
      const color: string = point.color!;
      // mapping data to the format Legends component needs

      const legend: ILegend = {
        title: point.legend!,
        color: color,
        action: () => {
          this._onLegendClick(point.legend!);
        },
        hoverAction: () => {
          this._onLegendHover(point.legend!);
        },
        onMouseOutAction: (isLegendSelected?: boolean) => {
          this._onLegendLeave(isLegendSelected);
        },
      };
      actions.push(legend);
    });
    const legends = (
      <Legends
        legends={actions}
        enabledWrapLines={this.props.enabledLegendsWrapLines}
        overflowProps={this.props.legendsOverflowProps}
        focusZonePropsInHoverCard={this.props.focusZonePropsForLegendsInHoverCard}
        overflowText={this.props.legendsOverflowText}
      />
    );
    return legends;
  }

  private _onLegendClick(customMessage: string): void {
    if (this.state.isLegendSelected) {
      if (this.state.selectedLegendTitle === customMessage) {
        this.setState({
          isLegendSelected: false,
          selectedLegendTitle: customMessage,
        });
      } else {
        this.setState({
          selectedLegendTitle: customMessage,
        });
      }
    } else {
      this.setState({
        isLegendSelected: true,
        selectedLegendTitle: customMessage,
      });
    }
  }

  private _onLegendHover(customMessage: string): void {
    if (this.state.isLegendSelected === false) {
      this.setState({
        isLegendHovered: true,
        selectedLegendTitle: customMessage,
      });
    }
  }

  private _onLegendLeave(isLegendFocused?: boolean): void {
    if (!!isLegendFocused || this.state.isLegendSelected === false) {
      this.setState({
        isLegendHovered: false,
        selectedLegendTitle: '',
        isLegendSelected: !!isLegendFocused ? false : this.state.isLegendSelected,
      });
    }
  }

  private _onBarLeave = (): void => {
    this.setState({
      isCalloutVisible: false,
    });
  };

  private _adjustProps(): void {
    this._points = this.props.data || [];

    this._width = this.props.width || 600;
    this._height = this.props.height || 350;
    this._barWidth = this.props.barWidth || 15;
    this._yAxisTickCount = this.props.yAxisTickCount || 5;

    const { theme, className, styles } = this.props;
    const { palette } = theme!;
    this._colors = this.props.colors || [palette.blueLight, palette.blue, palette.blueMid, palette.blueDark];

    this._classNames = getClassNames(styles!, {
      theme: theme!,
      width: this._width,
      height: this._height,
      className,
      legendColor: this.state.color,
    });
  }

  private _setXAxis(node: SVGGElement | null, xAxis: numericAxis | stringAxis): void {
    if (node === null) {
      return;
    }
    const axisNode = d3Select(node).call(xAxis);
    axisNode.selectAll('.domain').attr('class', this._classNames.xAxisDomain!);
    axisNode.selectAll('line').attr('class', this._classNames.xAxisTicks!);
    axisNode.selectAll('text').attr('class', this._classNames.xAxisText!);
  }

  private _setYAxis(node: SVGElement | null, yAxis: numericAxis | stringAxis): void {
    if (node === null) {
      return;
    }
    const axisNode = d3Select(node).call(yAxis);
    axisNode.selectAll('.domain').attr('class', this._classNames.yAxisDomain!);
    axisNode.selectAll('line').attr('class', this._classNames.yAxisTicks!);
    axisNode.selectAll('text').attr('class', this._classNames.yAxisText!);
  }

  private _createNumericXAxis(): numericAxis {
    const xMax = d3Max(this._points, (point: IVerticalBarChartDataPoint) => point.x as number)!;
    const xAxisScale = d3ScaleLinear()
      .domain([0, xMax])
      .range([0, this._width]);
    const xAxis = d3AxisBottom(xAxisScale).ticks(10);
    return xAxis;
  }

  private _createStringXAxis(): stringAxis {
    const xAxisScale = d3ScaleBand()
      .domain(this._points.map((point: IVerticalBarChartDataPoint) => point.x as string))
      .range([0, this._width]);
    const xAxis = d3AxisBottom(xAxisScale).tickFormat((x: string, index: number) => this._points[index].x as string);
    return xAxis;
  }

  private _createYAxis(): numericAxis {
    const yMax = d3Max(this._points, (point: IVerticalBarChartDataPoint) => point.y)!;
    const yAxisScale = d3ScaleLinear()
      .domain([0, yMax])
      .range([this._height, 10]);
    const yAxis = d3AxisLeft(yAxisScale).ticks(this._yAxisTickCount);
    return yAxis;
  }

  private _refCallback = (element: SVGRectElement, legendTitle: string, index: number): void => {
    const refArray = { legendText: legendTitle, refElement: element };
    this._refArray.push(refArray);
  };

  private _createNumericBars(): JSX.Element[] {
    const xMax = d3Max(this._points, (point: IVerticalBarChartDataPoint) => point.x as number)!;
    const yMax = d3Max(this._points, (point: IVerticalBarChartDataPoint) => point.y)!;
    const { theme, className, styles } = this.props;

    const xBarScale = d3ScaleLinear()
      .domain([0, xMax])
      .range([0, this._width - this._barWidth]);
    const yBarScale = d3ScaleLinear()
      .domain([0, yMax])
      .range([0, this._height - 10]);

    const colorScale = this._createColors(yMax);
    const bars = this._points.map((point: IVerticalBarChartDataPoint, index: number) => {
      let shouldHighlight = true;
      if (this.state.isLegendHovered || this.state.isLegendSelected) {
        shouldHighlight = this.state.selectedLegendTitle === point.legend;
      }
      const refArrayIndexNumber = index;

      this._classNames = getClassNames(styles!, {
        theme: theme!,
        width: this._width,
        height: this._height,
        className: className,
        shouldHighlight: shouldHighlight,
        legendColor: this.state.color,
      });
      return (
        <rect
          key={point.x}
          x={xBarScale(point.x as number)}
          className={this._classNames.opacityChangeOnHover}
          y={this._height - yBarScale(point.y)}
          width={this._barWidth}
          data-is-focusable={true}
          height={yBarScale(point.y)}
          ref={(e: SVGRectElement) => {
            this._refCallback(e, point.legend!, refArrayIndexNumber);
          }}
          onMouseOver={this._onBarHover.bind(this, point.legend, point.y, point.color)}
          onMouseLeave={this._onBarLeave}
          onFocus={this._onBarFocus.bind(this, point.legend, point.y, point.color, refArrayIndexNumber)}
          onBlur={this._onBarLeave}
          fill={point.color ? point.color : colorScale(point.y)}
        />
      );
    });

    return bars;
  }

  private _onBarFocus = (legendText: string, pointData: number, color: string, refArrayIndexNumber: number): void => {
    if (
      this.state.isLegendSelected === false ||
      (this.state.isLegendSelected && this.state.selectedLegendTitle === legendText)
    ) {
      this._refArray.map((obj: IRefArrayData, index: number) => {
        if (obj.legendText === legendText && refArrayIndexNumber === index) {
          this.setState({
            refSelected: obj.refElement,
            isCalloutVisible: true,
            selectedLegendTitle: legendText,
            dataForHoverCard: pointData,
            color: color,
          });
        }
      });
    }
  };

  private _createStringBars(): JSX.Element[] {
    const yMax = d3Max(this._points, (point: IVerticalBarChartDataPoint) => point.y)!;

    const endpointDistance = 0.5 * (this._width / this._points.length);
    const xBarScale = d3ScaleLinear()
      .domain([0, this._points.length - 1])
      .range([endpointDistance - 0.5 * this._barWidth, this._width - endpointDistance - 0.5 * this._barWidth]);
    const yBarScale = d3ScaleLinear()
      .domain([0, yMax])
      .range([0, this._height]);

    const colorScale = this._createColors(yMax);

    const bars = this._points.map((point: IVerticalBarChartDataPoint, index: number) => {
      return (
        <rect
          key={point.x}
          x={xBarScale(index)}
          y={this._height - yBarScale(point.y)}
          width={this._barWidth}
          height={yBarScale(point.y)}
          onMouseOver={this._onBarHover.bind(this, point.y, point.color)}
          onMouseLeave={this._onBarLeave}
          onBlur={this._onBarLeave}
          fill={point.color ? point.color : colorScale(point.y)}
        />
      );
    });

    return bars;
  }

  private _createColors(yMax: number): D3ScaleLinear<string, string> {
    const increment = this._colors.length <= 1 ? 1 : 1 / (this._colors.length - 1);
    const domainValues = [];
    for (let i = 0; i < this._colors.length; i++) {
      domainValues.push(increment * i * yMax);
    }
    const colorScale = d3ScaleLinear<string>()
      .domain(domainValues)
      .range(this._colors);
    return colorScale;
  }
}
