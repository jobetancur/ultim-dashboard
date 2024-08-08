import Card from '@mui/material/Card';
import useTheme from '@mui/material/styles/useTheme';
import merge from 'lodash.merge';
import Chart from 'react-apexcharts';
// CUSTOM COMPONENTS
import Title from '@/components/title';
import MoreButton from '@/components/more-button';
import FlexBetween from '@/components/flexbox/FlexBetween';
// CUSTOM UTILS METHOD
import { baseChartOptions } from '@/utils/baseChartOptions';
export default function AveragePosition() {
  const theme = useTheme();

  // REACT CHART DATA SERIES
  const chartSeries = [{
    name: 'Sales',
    data: [6, 15, 10, 17]
  }];

  // REACT CHART CATEGORIES LABEL
  const chartCategories = ['Sep 20', 'Sep 21', 'Sep 22', 'Sep 23'];

  // REACT CHART OPTIONS
  const chartOptions = merge(baseChartOptions(theme), {
    colors: [theme.palette.success.main],
    markers: {
      strokeColors: theme.palette.success.main
    },
    grid: {
      show: true,
      strokeDashArray: 3,
      borderColor: theme.palette.divider
    },
    xaxis: {
      categories: chartCategories,
      labels: {
        show: true,
        style: {
          colors: theme.palette.text.secondary
        }
      },
      crosshairs: {
        show: true,
        fill: {
          color: theme.palette.success.main
        },
        stroke: {
          color: theme.palette.success.main
        }
      }
    },
    yaxis: {
      min: 0,
      max: 20,
      show: true,
      tickAmount: 6,
      labels: {
        style: {
          colors: theme.palette.text.secondary,
          fontWeight: 500
        }
      }
    }
  });
  return <Card className="p-3 h-full">
      <FlexBetween mb={4}>
        <div>
          <Title title="5.8" subtitle="Average Positions" percentage="+12.5%" />
        </div>

        <MoreButton size="small" />
      </FlexBetween>

      <Chart type="line" height={330} options={chartOptions} series={chartSeries} width="100%" />
    </Card>;
}