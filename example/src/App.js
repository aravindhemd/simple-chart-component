import React from 'react'

import { ChartComponent } from 'test-head'
import 'test-head/dist/index.css'


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
 }, {
  "data_category": "UK",
  "data_value": 1122
 }, {
  "data_category": "France",
  "data_value": 1114
 }, {
  "data_category": "India",
  "data_value": 984
 }, {
  "data_category": "Spain",
  "data_value": 711
 }, {
  "data_category": "Netherlands",
  "data_value": 665
 }, {
  "data_category": "Russia",
  "data_value": 580
 }, {
  "data_category": "South Korea",
  "data_value": 443
 }, {
  "data_category": "Canada",
  "data_value": 441
 }, {
  "data_category": "South Africa",
  "data_value": 2267
 }];

const App = () => {
  return <ChartComponent data={data} text="Create React Library Example 😄" />
}

export default App
