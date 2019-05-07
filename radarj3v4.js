var margin = { top: 50, right: 80, bottom: 50, left: 80 },
				width = Math.min(700, window.innerWidth / 4) - margin.left - margin.right,
				height = Math.min(width, window.innerHeight - margin.top - margin.bottom);

			//////////////////////////////////////////////////////////////
			////////////////////////// Data //////////////////////////////
			//////////////////////////////////////////////////////////////

var data = [
		{ name: 'First Selected Car',
		axes: [
          {axis:"MPG",value:0.5},
          {axis:"Torque",value:0.65},
          {axis:"Horsepower",value:0},
          {axis:"Reliability",value:0},
          {axis:"Whellbase",value:0}
						//{axis: 'Administration', value: 20}
		   ]
		 },
			{ name: 'Second Selected Car',
				axes: [
               {axis:"MPG",value:0.8},
            {axis:"Torque",value:0.4},
            {axis:"Horsepower",value:0},
            {axis:"Reliability",value:0},
            {axis:"Whellbase",value:0}
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

    d3.csv("radar.csv")
    .row(function(d) { return{
    model: d.Model,
    mpg: d.MPG,
    torque: d.Torque,
    horsepower: d.Horsepower,
    reliability: d.Reliability,
    wheelbase: d.Wheelbase};    
    })
    .get(function(error,data) {

   // console.log(data1) 

        d3.select("#slct2").on("change", function(d) {

     var modelid1 = d3.select(this).property("value");
     //console.log(modelid1)

     data1 = data.filter(function(d){ return d.model == modelid1});
     //console.log(data1);
     dataset1 = data1.map(function(data1){
      return{
          mpg: Number(data1.mpg),
          torque: Number(data1.torque),
          horsepower: Number(data1.horsepower),
          reliability: Number(data1.reliability),
          wheelbase: Number(data1.wheelbase)
      }
    });



        var final_data = [
		{ name: 'First Selected Car',
		axes: [
          {axis:"MPG",value:dataset1[0].mpg},
          {axis:"Torque",value:dataset1[0].torque},
          {axis:"Horsepower",value:dataset1[0].horsepower},
          {axis:"Reliability",value:dataset1[0].reliability},
          {axis:"Whellbase",value:dataset1[0].wheelbase}
						//{axis: 'Administration', value: 20}
		   ]
		 }
            ];


    console.log(final_data) ;
    //RadarChart(".radarChart", final_data, radarChartOptions)
    let svg_radar1 = RadarChart(".radarChart", final_data, radarChartOptions);
    })            


//console.log(data1) 
d3.select("#slct5").on("change", function(d) {

     var modelid2 = d3.select(this).property("value");
     //console.log(modelid2)

     data2 = data.filter(function(d){ return d.model == modelid2});
     //console.log(data1);
     dataset2 = data2.map(function(data2){
      return{
          mpg: Number(data2.mpg),
          torque: Number(data2.torque),
          horsepower: Number(data2.horsepower),
          reliability: Number(data2.reliability),
          wheelbase: Number(data2.wheelbase)
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
		   ]
		 },
			{ name: 'Second Selected Car',
				axes: [
                {axis:"MPG",value:dataset2[0].mpg},
         {axis:"Torque",value:dataset2[0].torque},
         {axis:"Horsepower",value:dataset2[0].horsepower},
         {axis:"Reliability",value:dataset2[0].reliability},
         {axis:"Wheelbase",value:dataset2[0].wheelbase}
					]
				}
			];



    console.log(final_data); 
    let svg_radar1 = RadarChart(".radarChart", final_data, radarChartOptions);

    }); 
});  