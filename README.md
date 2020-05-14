# Bar-chart and Pie-Chart

> react component for Bar Chart

[![NPM](https://img.shields.io/npm/v/test-head.svg)](https://www.npmjs.com/package/bar-chart-simple) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save bar-chart-simple
```

## Usage

```jsx
import React, { Component } from 'react'

import {ChartComponent} from 'bar-chart-simple'
import 'test-head/dist/index.css'

class Example extends Component {
  let data = [{
    "data_category": "USA",
    "data_value": 2025
   }, {
    "data_category": "China",
    "data_value": 1882
   }];
  render() {
    return <ChartComponent data={data} chart_type="pie_chart"/>
  }
}
```

## Chart types

- chart_type="pie_chart"
- chart_type="bar_chart"

## Sample Data

```sample data
let data = [{
    "data_category": "USA",
    "data_value": 2025
   }, {
    "data_category": "China",
    "data_value": 1882
   }, {
    "data_category": "Japan",
    "data_value": 1809
   }, {
    "data_category": "Germany",
    "data_value": 1322
   }]
```

## License

MIT © [](https://github.com/)
