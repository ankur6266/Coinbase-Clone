// react-stockchart library is used to create a chart

import React from "react";
import './Stockchart.css'
import PropTypes from "prop-types";
import { scaleTime } from "d3-scale";
import { ChartCanvas, Chart } from "react-stockcharts";
import { CandlestickSeries } from "react-stockcharts/lib/series";
import { XAxis, YAxis } from "react-stockcharts/lib/axes";
import { utcDay } from "d3-time";
import { fitWidth } from "react-stockcharts/lib/helper";
import { timeIntervalBarWidth } from "react-stockcharts/lib/utils";
import stockData from "../../stockData";

let StockChart = (props) => {
  const { type, width, ratio } = props;
  const data = stockData;
  const xAccessor = (d) => {
    return d.date;
  };
  return (
    <div className="StockChart">
      <ChartCanvas
        height={400}
        ratio={ratio}
        width={800}
        type={type}
        data={data}
        seriesName="MSFT"
        xAccessor={xAccessor}
        xScale={scaleTime()}
        xExtents={[new Date(2020, 0, 30), new Date(2020, 1, 16)]}
      >
        <Chart id={1} yExtents={(d) => [d.high, d.low]}>
          <XAxis axisAt="bottom" orient="bottom" ticks={6} />
          <YAxis axisAt="left" orient="left" ticks={5} />
          <CandlestickSeries width={timeIntervalBarWidth(utcDay)} />
        </Chart>
      </ChartCanvas>
    </div>
  );
};

StockChart.prototype = {
  data: PropTypes.array.isRequired,
  width: PropTypes.number.isRequired,
  ratio: PropTypes.number.isRequired,
  type: PropTypes.oneOf(["svg", "hybrid"]).isRequired,
};

StockChart.defaultProps = {
  type: "svg",
};

StockChart = fitWidth(StockChart);

export default StockChart;
