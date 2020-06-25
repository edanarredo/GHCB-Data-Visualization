am4core.ready(function () {

   // Themes begin
   am4core.useTheme(am4themes_animated);
   // Themes end

   var chart = am4core.create("chartdiv", am4charts.XYChart);
   chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

   chart.data = [
      {
         name: "Aaron",
         messages: 48580
      },
      {
         name: "James",
         messages: 46435
      },
      {
         name: "Dan",
         messages: 19746
      },
      {
         name: "Thomas",
         messages: 13827
      },
      {
         name: "Chandler",
         messages: 12472
      },
      {
         name: "Bryan",
         messages: 11466
      },
      {
         name: "Hector",
         messages: 10506
      },
      {
         name: "Ryan",
         messages: 3186
      },
      {
         name: "Jackson",
         messages: 1955
      },
      {
         name: "Kameron",
         messages: 1289
      },
      {
         name: "Brandon",
         messages: 912
      },
      {
         name: "Ian",
         messages: 638
      },
      {
         name: "Others",
         messages: 500
      }
   ];

   var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
   categoryAxis.renderer.grid.template.location = 0;
   categoryAxis.dataFields.category = "name";
   categoryAxis.renderer.minGridDistance = 40;
   categoryAxis.fontSize = 11;

   var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
   valueAxis.min = 0;
   valueAxis.max = 50000;
   valueAxis.strictMinMax = true;
   valueAxis.renderer.minGridDistance = 30;
   // axis break
   var axisBreak = valueAxis.axisBreaks.create();
   axisBreak.startValue = 20000;
   axisBreak.endValue = 22900;
   //axisBreak.breakSize = 0.005;

   // fixed axis break
   var d = (axisBreak.endValue - axisBreak.startValue) / (valueAxis.max - valueAxis.min);
   axisBreak.breakSize = 0.05 * (1 - d) / d; // 0.05 means that the break will take 5% of the total value axis height

   // make break expand on hover
   var hoverState = axisBreak.states.create("hover");
   hoverState.properties.breakSize = 1;
   hoverState.properties.opacity = 0.1;
   hoverState.transitionDuration = 1500;

   axisBreak.defaultState.transitionDuration = 1000;
   /*
   // this is exactly the same, but with events
   axisBreak.events.on("over", function() {
     axisBreak.animate(
       [{ property: "breakSize", to: 1 }, { property: "opacity", to: 0.1 }],
       1500,
       am4core.ease.sinOut
     );
   });
   axisBreak.events.on("out", function() {
     axisBreak.animate(
       [{ property: "breakSize", to: 0.005 }, { property: "opacity", to: 1 }],
       1000,
       am4core.ease.quadOut
     );
   });*/

   var series = chart.series.push(new am4charts.ColumnSeries());
   series.dataFields.categoryX = "name";
   series.dataFields.valueY = "messages";
   series.columns.template.tooltipText = "{valueY.value}";
   series.columns.template.tooltipY = 0;
   series.columns.template.strokeOpacity = 0;

   // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
   series.columns.template.adapter.add("fill", function (fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
   });

   
   // -------- LINE CHART --------- //


   var lineChart = am4core.create("linechartdiv", am4charts.XYChart);

   // Add data
   lineChart.data = [{
      "ax": 1,
      "ay": 0.5,
      "bx": 1,
      "by": 2.2
   }, {
      "ax": 2,
      "ay": 1.3,
      "bx": 2,
      "by": 4.9
   }, {
      "ax": 3,
      "ay": 2.3,
      "bx": 3,
      "by": 5.1
   }, {
      "ax": 4,
      "ay": 2.8,
      "bx": 4,
      "by": 5.3
   }, {
      "ax": 5,
      "ay": 3.5,
      "bx": 5,
      "by": 6.1
   }, {
      "ax": 6,
      "ay": 5.1,
      "bx": 6,
      "by": 8.3
   }, {
      "ax": 7,
      "ay": 6.7,
      "bx": 7,
      "by": 10.5
   }, {
      "ax": 8,
      "ay": 8,
      "bx": 8,
      "by": 12.3
   }, {
      "ax": 9,
      "ay": 8.9,
      "bx": 9,
      "by": 14.5
   }, {
      "ax": 10,
      "ay": 9.7,
      "bx": 10,
      "by": 15
   }, {
      "ax": 11,
      "ay": 10.4,
      "bx": 11,
      "by": 18.8
   }, {
      "ax": 12,
      "ay": 11.7,
      "bx": 12,
      "by": 19
   }];

   // Create axes
   var valueAxisX = lineChart.xAxes.push(new am4charts.ValueAxis());
   valueAxisX.title.text = 'Year';
   valueAxisX.renderer.minGridDistance = 40;

   // Create value axis
   var valueAxisY = lineChart.yAxes.push(new am4charts.ValueAxis());
   valueAxisY.title.text = 'Total Messages';

   // Create series
   var lineSeries = lineChart.series.push(new am4charts.LineSeries());
   lineSeries.dataFields.valueY = "ay";
   lineSeries.dataFields.valueX = "ax";
   lineSeries.strokeOpacity = 0;

   var lineSeries2 = lineChart.series.push(new am4charts.LineSeries());
   lineSeries2.dataFields.valueY = "by";
   lineSeries2.dataFields.valueX = "bx";
   lineSeries2.strokeOpacity = 0;

   // Add a bullet
   var bullet = lineSeries.bullets.push(new am4charts.Bullet());

   // Add a triangle to act as am arrow
   var arrow = bullet.createChild(am4core.Triangle);
   arrow.horizontalCenter = "middle";
   arrow.verticalCenter = "middle";
   arrow.strokeWidth = 0;
   arrow.fill = chart.colors.getIndex(0);
   arrow.direction = "top";
   arrow.width = 12;
   arrow.height = 12;

   // Add a bullet
   var bullet2 = lineSeries2.bullets.push(new am4charts.Bullet());

   // Add a triangle to act as am arrow
   var arrow2 = bullet2.createChild(am4core.Triangle);
   arrow2.horizontalCenter = "middle";
   arrow2.verticalCenter = "middle";
   arrow2.rotation = 180;
   arrow2.strokeWidth = 0;
   arrow2.fill = chart.colors.getIndex(3);
   arrow2.direction = "top";
   arrow2.width = 12;
   arrow2.height = 12;

   //add the trendlines
   var trend = lineChart.series.push(new am4charts.LineSeries());
   trend.dataFields.valueY = "value2";
   trend.dataFields.valueX = "value";
   trend.strokeWidth = 2
   trend.stroke = chart.colors.getIndex(0);
   trend.strokeOpacity = 0.7;
   trend.data = [
      { "value": 1, "value2": 2 },
      { "value": 12, "value2": 11 }
   ];

   var trend2 = lineChart.series.push(new am4charts.LineSeries());
   trend2.dataFields.valueY = "value2";
   trend2.dataFields.valueX = "value";
   trend2.strokeWidth = 2
   trend2.stroke = chart.colors.getIndex(3);
   trend2.strokeOpacity = 0.7;
   trend2.data = [
      { "value": 1, "value2": 1 },
      { "value": 12, "value2": 19 }
   ];
}); // end am4core.ready()
