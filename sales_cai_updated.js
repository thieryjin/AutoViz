//////////////////////////////////////////////////////////////////////////////
var margin = {top: 30, right: 100, bottom: 40, left: 30},
    width = 460 - margin.left - margin.right,
    height = 420 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");
//////////////////////////////////////////////////////////////////////////////

// set the dimensions and margins of the graph
var margin1 = {top: 10, right: 30, bottom: 30, left: 60},
    width1 = 460 - margin1.left - margin1.right,
    height1 = 450 - margin1.top - margin1.bottom;

// append the svg object to the body of the page
var svg1 = d3.select("#sales")
  .append("svg")
    .attr("width", width1 + margin1.left + margin1.right)
    .attr("height", height1 + margin1.top + margin1.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin1.left + "," + margin1.top + ")");



d3.queue()
    .defer(d3.csv, 'full.csv')
    .defer(d3.csv, 'depreciation.csv')
    .defer(d3.json, 'radar.json')
    .await(processData);
//Read the data
function processData(error, data1, data2,data3) {
  
  // Add X axis
  var x1 = d3.scaleLinear()
    .domain([0, 3000])
    .range([ 0, width1 ]);
  svg1.append("g")
    .attr("transform", "translate(0," + height1 + ")")
    .call(d3.axisBottom(x1).tickValues([]));

  // Add Y axis
  var y1 = d3.scaleLinear()
    .domain([0, 450000])
    .range([ height1, 0]);
  svg1.append("g")
    .call(d3.axisLeft(y1));

  // Add a tooltip div. Here I define the general feature of the tooltip: stuff that do not depend on the data point.
  // Its opacity is set to 0: we don't see it by default.
  var tooltip = d3.select("#sales")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("background-color", "white")
    .style("border", "solid")
    .style("border-width", "1px")
    .style("border-radius", "5px")
    .style("padding", "10px")



  // A function that change this tooltip when the user hover a point.
  // Its opacity is set to 1: we can now see it. Plus it set the text and position of tooltip depending on the datapoint (d)


  // Add dots
  svg1.append('g')
    .selectAll("dot")
    .data(data1) // the .filter part is just to keep a few dots on the chart, not all of them
    .enter()
    .append("circle")
      .attr("cx", function (d) { return d=150; } )
      .attr("cy", function (d) { return y1(+d.YTD); } )
      .attr("r", 7)
      .style("fill", "#69b3a2")
      .style("opacity", 0.3)
      .style("stroke", "white")
    
    d3.select("#slct2").on("change", function(d) {
        // recover the option that has been chosen
        var selectedOption1 = d3.select(this).property("value")
        // run the updateChart function with this selected option
        renew(selectedOption1)
    })

    
  //////////////////////////////////////////////////////////////////////////////
  var allGroup = d3.keys(data2[0]).filter(function(key) {
    return key !=="Year";});
  


  // A color scale: one color for each group
  var myColor = d3.scaleOrdinal()
    .domain(allGroup)
    .range(d3.schemeSet2);

  // Add X axis --> it is a date format
  var x = d3.scaleLinear()
    .domain([2020,2006])
    .range([ 0, width ]);
 
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x).tickFormat(d3.format("d")))
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-0.6em")
      .attr("transform", "rotate(-80)")
      .attr("dy", "0em");
  

    
  // Add Y axis
  var y = d3.scaleLinear()
    .domain( [0,100])
    .range([ height, 0 ]);
  svg.append("g")
    .call(d3.axisLeft(y));

  // Initialize line with group a
  var line = svg
    .append('g')
    .append("path")
      .datum(data2)
      
      .attr("stroke", function(d){ return myColor("valueA") })
      .style("stroke-width", 4)
      .style("fill", "none")
  var line1 = svg
    .append('g')
    .append("path")
      .datum(data2)
      /*.attr("d", d3.line()
        .x(function(d) { return x(+d.Year) })
        .y(function(d) { return y(+d.A3*100) })
      )*/
      .attr("stroke", function(d){ return myColor("valueA") })
      .style("stroke-width", 4)
      .style("fill", "none")
  // A function that update the chart
  function update(selectedGroup) {

    // Create new data with the selection?
    var dataFilter = data2.map(function(d){return {Year: +d.Year, value:d[selectedGroup]*100} })
    
    // Give these new data to update line
    line
        .datum(dataFilter)
        .transition()
        .duration(1000)
        .attr("d", d3.line()
          .x(function(d) { return x(d.Year) })
          .y(function(d) { return y(+d.value) })
          .defined(function(d) {return d.value})
        )
        .attr("stroke", "red")
        


        var dataFilter1 = data1.filter(function(d){return d.Model==selectedGroup})
        d3.selectAll('circle[r="8"]')
          .remove()
          ;
        var mouseover = function(d) {
            tooltip
              .style("opacity", 1)
          }
        var mousemove = function(d) {
            tooltip
              .html("2018 "+d.Model+ " Annual Sales: " + d.YTD+". "+
              "It is ranked #"+d.rank+" in 2018 "+d.Category +" Sales.")
              .style("left", (d3.mouse(this)[0]+90) + "px") // It is important to put the +90: other wise the tooltip is exactly where the point is an it creates a weird effect
              .style("top", (d3.mouse(this)[1]) + "px")
          }
          var mouseleave = function(d) {
            tooltip
              .transition()
              .duration(200)
              .style("opacity", 0)
          }
        // Give these new data to update line
        svg1.append('g')
        .append("circle").data(dataFilter1)
        .attr("cx", function (d) { return d=150; } )
        .attr("cy", function (d) { return y1(+d.YTD); } )
        .attr("r", 8)
        .style("fill", "red")
        .style("opacity", 0.5)
        .style("stroke", "white")
        .on("mouseover", mouseover )
        .on("mousemove", mousemove )
        .on("mouseleave", mouseleave )
        
        ;





  }
  function update1(selectedGroup) {

    // Create new data with the selection?
    var dataFilter = data2.map(function(d){return {Year: d.Year, value:d[selectedGroup]*100} })

    // Give these new data to update line
    line1
        .datum(dataFilter)
        .transition()
        .duration(1000)
        .attr("d", d3.line()
          .x(function(d) { return x(+d.Year) })
          .y(function(d) { return y(+d.value) })
          .defined(function(d) {return d.value})
        )
        .attr("stroke", "blue");


    

        var dataFilter1 = data1.filter(function(d){return d.Model==selectedGroup})
        d3.selectAll('circle[r="8.1"]')
          .remove()
          ;
        var mouseover = function(d) {
            tooltip
              .style("opacity", 1)
          }
        var mousemove = function(d) {
            tooltip
              .html("2018 "+d.Model+ " Annual Sales: " + d.YTD+". "+
              "It is ranked #"+d.rank+" in 2018 "+d.Category +" Sales.")
              .style("left", (d3.mouse(this)[0]+90) + "px") // It is important to put the +90: other wise the tooltip is exactly where the point is an it creates a weird effect
              .style("top", (d3.mouse(this)[1]) + "px")
          }
          var mouseleave = function(d) {
            tooltip
              .transition()
              .duration(200)
              .style("opacity", 0)
          }
        // Give these new data to update line
        svg1.append('g')
        .append("circle").data(dataFilter1)
        .attr("cx", function (d) { return d=150; } )
        .attr("cy", function (d) { return y1(+d.YTD); } )
        .attr("r", 8.1)
        .style("fill", "blue")
        .style("opacity", 0.5)
        .style("stroke", "white")
        .on("mouseover", mouseover )
        .on("mousemove", mousemove )
        .on("mouseleave", mouseleave )
        
        ;



  }
  // When the button is changed, run the updateChart function
  d3.select("#slct2").on("change", function(d) {
      // recover the option that has been chosen
      var selectedOption = d3.select(this).property("value")
      // run the updateChart function with this selected option
      update(selectedOption)

      ds1 = data3.filter(function(d){ return d.Model == selectedOption});
      // console.log(ds1);
      dataset1 = ds1.map(function(ds1){
       return{
           mpg: ds1.MPG,
           torque: ds1.Torque,
           horsepower: ds1.Horsepower,
           reliability: ds1.Reliability,
           wheelbase: ds1.Wheelbase
       }
     });
	 
	  var final_data = [
		  { name: 'First Selected Car',
		  axes: [
		    {axis:"MPG",value:dataset1[0].mpg},
		    {axis:"Torque",value:dataset1[0].torque},
		    {axis:"Horsepower",value:dataset1[0].horsepower},
		    {axis:"Reliability",value:dataset1[0].reliability},
		    {axis:"Wheelbase",value:dataset1[0].wheelbase}
		   ]}
      ]
      console.log(final_data);
      let svg_radar1 = RadarChart(".radarChart", final_data, radarChartOptions);
  })
  d3.select("#slct5").on("change", function(d) {
    // recover the option that has been chosen
    var selectedOption1 = d3.select(this).property("value")
    // run the updateChart function with this selected option
    update1(selectedOption1)

    ds2 = data3.filter(function(d){ return d.Model == selectedOption1});
      console.log(ds2);
      dataset2 = ds2.map(function(ds2){
       return{
          mpg: ds2.MPG,
          torque: ds2.Torque,
          horsepower: ds2.Horsepower,
          reliability: ds2.Reliability,
          wheelbase: ds2.Wheelbase
       }
     });
     console.log(dataset2)
 
     var final_data = [
         { name: 'First Selected Car',
         axes: [
         {axis:"MPG",value:dataset1[0].mpg},
        {axis:"Torque",value:dataset1[0].torque},
        {axis:"Horsepower",value:dataset1[0].horsepower},
        {axis:"Reliability",value:dataset1[0].reliability},
        {axis:"Wheelbase",value:dataset1[0].wheelbase}
            ]},
             { name: 'Second Selected Car',
                 axes: [
                 {axis:"MPG",value:dataset2[0].mpg},
          {axis:"Torque",value:dataset2[0].torque},
          {axis:"Horsepower",value:dataset2[0].horsepower},
          {axis:"Reliability",value:dataset2[0].reliability},
          {axis:"Wheelbase",value:dataset2[0].wheelbase}
                     ]}
             ];
     console.log(final_data); 
     let svg_radar1 = RadarChart(".radarChart", final_data, radarChartOptions);
})
///////////////////////////////////////////////////////////////////////////////////
/*
var margin = { top: 50, right: 80, bottom: 50, left: 80 },
				width = Math.min(700, window.innerWidth / 4) - margin.left - margin.right,
				height = Math.min(width, window.innerHeight - margin.top - margin.bottom);
*/
			//////////////////////////////////////////////////////////////
			////////////////////////// Data //////////////////////////////
			//////////////////////////////////////////////////////////////
   // Blank Graph
  var data = [
		{ name: 'First Selected Car',
		axes: [
          {axis:"MPG",value:0},
          {axis:"Torque",value:0},
          {axis:"Horsepower",value:0},
          {axis:"Reliability",value:0},
          {axis:"Wheelbase",value:0}
						//{axis: 'Administration', value: 20}
		   ]
		 },
			{ name: 'Second Selected Car',
				axes: [
               {axis:"MPG",value:0},
            {axis:"Torque",value:0},
            {axis:"Horsepower",value:0},
            {axis:"Reliability",value:0},
            {axis:"Wheelbase",value:0}
						//{axis: 'Administration', value: 23}
					]
				}
			];

			var radarChartOptions = {
			  w: 290,
			  h: 350,
			  margin: margin,
              levels: 5,
              maxValue: 1,
			  roundStrokes: true,
			  color: d3.scaleOrdinal().range(["red", "blue"]),
			  //format: '.0f'
			};

			// Draw the chart, get a reference the created svg element :
      let svg_radar1 = RadarChart(".radarChart", data, radarChartOptions);
      
     // Graph 1 of the first selected car
     
    
    // Graph of second selected car
   

}

