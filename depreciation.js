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

//Read the data
d3.csv("depreciation.csv", function(data) {

    // List of groups (here I have one group per column)
    var allGroup = d3.keys(data[0]).filter(function(key) {
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
    
    svg.append("text")
      .text("Depreciation Comparison")
      .attr("x", (width / 2))             
      .attr("y", 0 - (margin.top / 2))
      .style("font-size", "20px");
      
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
        .datum(data)
        
        .attr("stroke", function(d){ return myColor("valueA") })
        .style("stroke-width", 4)
        .style("fill", "none")
    var line1 = svg
      .append('g')
      .append("path")
        .datum(data)
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
      var dataFilter = data.map(function(d){return {Year: +d.Year, value:d[selectedGroup]*100} })
      
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
          
    }
    function update1(selectedGroup) {

      // Create new data with the selection?
      var dataFilter = data.map(function(d){return {Year: d.Year, value:d[selectedGroup]*100} })

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
    }
    // When the button is changed, run the updateChart function
    d3.select("#slct2").on("change", function(d) {
        // recover the option that has been chosen
        var selectedOption = d3.select(this).property("value")
        // run the updateChart function with this selected option
        update(selectedOption)
    })
    d3.select("#slct5").on("change", function(d) {
      // recover the option that has been chosen
      var selectedOption1 = d3.select(this).property("value")
      // run the updateChart function with this selected option
      update1(selectedOption1)
  })
})