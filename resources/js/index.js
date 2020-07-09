am4core.ready(function () {
   // Themes
   am4core.useTheme(am4themes_animated);

   //creates chart object
   var chart = am4core.create("chartdiv", am4charts.XYChart);
   chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

   //insert data
   chart.data = [
      {
         name: "Aaron",
         messages: 52312
      },
      {
         name: "James",
         messages: 48526
      },
      {
         name: "Dan",
         messages: 20445
      },
      {
         name: "Chandler",
         messages: 15359
      },
      {
         name: "Thomas",
         messages: 15136
      },
      {
         name: "Bryan",
         messages: 11466
      },
      {
         name: "Hector",
         messages: 11797
      },
      {
         name: "Ryan",
         messages: 3156
      },
      {
         name: "Jackson",
         messages: 2644
      },
      {
         name: "Kam",
         messages: 1296
      },
      {
         name: "Ian",
         messages: 924
      },
      {
         name: "Brandon",
         messages: 912
      },
      {
         name: "Josh",
         messages: 584
      }
   ];

   //x-axis properties
   var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
   categoryAxis.renderer.grid.template.location = 0;
   categoryAxis.dataFields.category = "name";
   categoryAxis.renderer.minGridDistance = 40;
   categoryAxis.fontSize = 11;
   categoryAxis.title.text = "members";
   categoryAxis.title.fontWeight = "bold";

   //y-axis properties
   var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
   valueAxis.min = 0;
   valueAxis.max = 55000;
   valueAxis.strictMinMax = true;
   valueAxis.renderer.minGridDistance = 30;
   valueAxis.title.text = "total messages";
   valueAxis.title.fontWeight = "bold";

   //chart series appearance and behavior
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

   /* ---------- CIRCLE CHART -------------- */

   // Create chart instance
   var buzzChart = am4core.create("buzzChart", am4charts.PieChart);

   // Add data
   buzzChart.data = [{
      "word": "No",
      "density": 4983
   }, {
      "word": "Yes",
      "density": 2900
   }, {
      "word": "F***",
      "density": 1392
   }, {
      "word": "Work",
      "density": 1042
   }, {
      "word": "idk",
      "density": 1031
   }, {
      "word": "league",
      "density": 1030
   }, {
      "word": "gg",
      "density": 850
   }, {
      "word": "sure",
      "density": 650
   }, {
      "word": "s***",
      "density": 581
   }, {
      "word": "tarkov",
      "density": 485
   }];

   // Set inner radius
   buzzChart.innerRadius = am4core.percent(50);

   // Add and configure Series
   var pieSeries = buzzChart.series.push(new am4charts.PieSeries());
   pieSeries.dataFields.value = "density";
   pieSeries.dataFields.category = "word";
   pieSeries.slices.template.stroke = am4core.color("#fff");
   pieSeries.slices.template.strokeWidth = 2;
   pieSeries.slices.template.strokeOpacity = 1;

   // This creates initial animation
   pieSeries.hiddenState.properties.opacity = 1;
   pieSeries.hiddenState.properties.endAngle = -90;
   pieSeries.hiddenState.properties.startAngle = -90;

}); // end am4core.ready()

/* ----- Google Line Chart ------ */

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

   // currentYearMessageNumber = followingYearJanNummber - currentYearJanNumber
   var data = google.visualization.arrayToDataTable([
      ['Year', 'Aaron', 'James', 'Dan', 'Thomas', 'Bryan', 'Chandler', 'Hector', 'Ryan'],
      ['2015', 49, 0, 46, 27, 28, 0, 0, 0],
      ['2016', 9762, 8041, 4423, 4416, 1955, 1639, 0, 857],
      ['2017', 13386, 9495, 3872, 4340, 4220, 1377, 712, 750],
      ['2018', 14384, 16667, 9651, 2251, 3487, 1109, 4371, 754],
      ['2019', 8178, 9273, 1279, 1976, 324, 5604, 4349, 315 ],
      ['2020', 7045, 4567, 1144, 1888, 3218, 5327, 2215, 71]
   ]);

   var options = {
      title: '',
      curveType: 'function',
      legend: { position: 'bottom' }
   };

   var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

   chart.draw(data, {viewWindow:{min:0, max: 20000}}, options);
}

$(window).resize(function(){
   drawChart();
 });
 
