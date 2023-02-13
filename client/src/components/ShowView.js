import React from 'react'
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';

// Include the chart type
import Column2D from 'fusioncharts/fusioncharts.charts';

// Include the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);
const chartData = [
  {
    label: 'Venezuela',
    value: '290',
  },
  {
    label: 'Saudi',
    value: '260',
  },
  {
    label: 'Canada',
    value: '180',
  },
  {
    label: 'Iran',
    value: '140',
  },
  {
    label: 'Russia',
    value: '115',
  },
  {
    label: 'UAE',
    value: '100',
  },
  {
    label: 'US',
    value: '30',
  },
  {
    label: 'China',
    value: '30',
  },
];

const ShowView = ({arr_of_pie}) => {
    // console.log({ arr_of_pie });
    const chartConfigs = {
      type: 'pie3d', // The chart type
      //  width: "100%", // Width of the chart
      height: '400', // Height of the chart
      dataFormat: 'json',
      dataSource: {
        // Chart Configuration
        chart: {
          caption: '',
          theme: 'fusion',
          decimals: 0,
          pieRadius: '65%',
          paletteColors:
            '#F84B0A,F8DF0A,#0A2EF8,#0AF8DB,#000000,#784212,#76F80A,#CD853F,#708090,#FF6347,#9370DB',
        },
        // Chart Data
        data: arr_of_pie,
      },
    };
  return <ReactFC {...chartConfigs} />;
};

export default ShowView
