import React, { ReactElement } from 'react';

import { Chart, Line, Legend, ColorScheme } from '@adobe/react-spectrum-charts';
import { StoryFn } from '@storybook/react';

export default {
  title: 'RSC/Line',
  component: Line,
};

const data = [
  { datetime: 1667890800000, point: 1, value: 3738, users: 477, series: 'Add Fallout' },
  { datetime: 1667977200000, point: 2, value: 2704, users: 481, series: 'Add Fallout' },
  { datetime: 1668063600000, point: 3, value: 1730, users: 483, series: 'Add Fallout' },
  { datetime: 1668150000000, point: 4, value: 465, users: 310, series: 'Add Fallout' },
  { datetime: 1668236400000, point: 5, value: 31, users: 18, series: 'Add Fallout' },
  { datetime: 1668322800000, point: 8, value: 108, users: 70, series: 'Add Fallout' },
  { datetime: 1668409200000, point: 12, value: 648, users: 438, series: 'Add Fallout' },
  { datetime: 1667890800000, point: 4, value: 12208, users: 5253, series: 'Add Freeform table' },
  { datetime: 1667977200000, point: 5, value: 11309, users: 5103, series: 'Add Freeform table' },
  { datetime: 1668063600000, point: 17, value: 11099, users: 5047, series: 'Add Freeform table' },
  { datetime: 1668150000000, point: 20, value: 7243, users: 3386, series: 'Add Freeform table' },
  { datetime: 1668236400000, point: 21, value: 395, users: 205, series: 'Add Freeform table' },
  { datetime: 1668322800000, point: 22, value: 1606, users: 790, series: 'Add Freeform table' },
  { datetime: 1668409200000, point: 25, value: 10932, users: 4913, series: 'Add Freeform table' },
  { datetime: 1667890800000, point: 4, value: 1208, users: 2253, series: 'Add Line viz' },
  { datetime: 1667977200000, point: 5, value: 1309, users: 1103, series: 'Add Line viz' },
  { datetime: 1668063600000, point: 17, value: 1699, users: 1547, series: 'Add Line viz' },
  { datetime: 1668150000000, point: 20, value: 2743, users: 1386, series: 'Add Line viz' },
  { datetime: 1668236400000, point: 21, value: 2350, users: 75, series: 'Add Line viz' },
  { datetime: 1668322800000, point: 22, value: 2806, users: 270, series: 'Add Line viz' },
  { datetime: 1668409200000, point: 25, value: 1932, users: 1413, series: 'Add Line viz' },
  { datetime: 1667890800000, point: 4, value: 208, users: 3523, series: 'Add Bar viz' },
  { datetime: 1667977200000, point: 5, value: 309, users: 3513, series: 'Add Bar viz' },
  { datetime: 1668063600000, point: 17, value: 1099, users: 3507, series: 'Add Bar viz' },
  { datetime: 1668150000000, point: 20, value: 1743, users: 3336, series: 'Add Bar viz' },
  { datetime: 1668236400000, point: 21, value: 3350, users: 3025, series: 'Add Bar viz' },
  { datetime: 1668322800000, point: 22, value: 4806, users: 3070, series: 'Add Bar viz' },
  { datetime: 1668409200000, point: 25, value: 6932, users: 3493, series: 'Add Bar viz' },
];

const BasicLineStory: StoryFn<typeof Line> = (args): ReactElement => {
  const chartProps = { data: data, minWidth: 400, maxWidth: 800, height: 400, colorScheme: 'light' as ColorScheme };

  return (
    <Chart {...chartProps}>
      <Line {...args} />
      <Legend lineWidth={{ value: 0 }} />
    </Chart>
  );
};

const Basic = BasicLineStory.bind({});
Basic.args = {
  color: 'series',
  dimension: 'datetime',
  metric: 'value',
  name: 'line0',
  scaleType: 'time',
};

export { Basic };
