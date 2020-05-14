import React from 'react'
import styles from './styles.module.css'

// package import for chart
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

export class ChartComponent extends React.Component {
  
  componentDidMount() {
    let chart = am4core.create("chartdiv", am4charts.XYChart);
    chart.data = this.props.data;
    chart.padding(40, 40, 40, 40);

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.dataFields.category = "data_category";
      categoryAxis.renderer.minGridDistance = 60;
      categoryAxis.renderer.inversed = true;
      categoryAxis.renderer.grid.template.disabled = true;

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.min = 0;
      valueAxis.extraMax = 0.1;

      let series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.categoryX = "data_category";
      series.dataFields.valueY = "data_value";
      series.tooltipText = "{valueY.value}"
      series.columns.template.strokeOpacity = 0;
      series.columns.template.column.cornerRadiusTopRight = 10;
      series.columns.template.column.cornerRadiusTopLeft = 10;

      let labelBullet = series.bullets.push(new am4charts.LabelBullet());
      labelBullet.label.verticalCenter = "bottom";
      labelBullet.label.dy = -10;
      labelBullet.label.text = "{values.valueY.workingValue.formatNumber('#.')}";

      chart.zoomOutButton.disabled = true;
      
      series.columns.template.adapter.add("fill", function (fill, target) {
        return chart.colors.getIndex(target.dataItem.index);
       });

      //  setInterval(function () {
      //   am4core.array.each(chart.data, function (item) {
      //     item.visits += Math.round(Math.random() * 200 - 100);
      //     item.visits = Math.abs(item.visits);
      //   })
      //   chart.invalidateRawData();
      //  }, 2000)

       categoryAxis.sortBySeries = series;
  }

  
  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
      // return <div className={styles.test}>Example Component: {this.props.text}</div>
      return <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
  }
}
