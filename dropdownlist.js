function populate(s1,s2){
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);
    s2.innerHTML = "";
    if(s1.value == "Chevy") {
        var optionArray = ["|Model", "Bolt|Bolt","Camero|Camaro","Corvette|Corvette","Cruze|Cruze","Equinox|Equinox","Impala|Impala","Malibu|Malibu",
        "Sonic|Sonic","Spark|Spark","Suburban|Suburban",
        "Tahoe|Tahoe","Traverse|Traverse","Trax|Trax",
        "Volt|Volt"
    ];
    }
    if(s1.value == "Ford") {
        var optionArray = ["|Model", "C-Max|C-Max","EcoSport|EcoSport","Edge|Edge","Escape|Escape",
        "Expedition|Expedition","Explorer|Explorer",
        "Flex|Flex","Focus|Focus","Fiesta|Fiesta","Fusion|Fusion",
        "Mustang|Mustang",
        "Taurus|Taurus"
    ];
    }
    if(s1.value == "Jeep") {
        var optionArray = ["|Model", "C-Max|C-Max","EcoSport|EcoSport","Edge|Edge","Escape|Escape",
        "Expedition|Expedition","Explorer|Explorer",
        "Flex|Flex","Focus|Focus","Fiesta|Fiesta","Fusion|Fusion",
        "Mustang|Mustang",
        "Taurus|Taurus"
    ];
    }
    if(s1.value == "Toyota") {
        var optionArray = ["|Model","Avalon|Avalon","C-HR|C-HR","Camry|Camry","Corolla|Corolla",
        "Highlander|Highlander",
        "Prius|Prius",
        "RAV4|RAV4",
        "Yaris|Yaris",
        "4Runner|4Runner",
        "86 / FR-S|86 / FR-S"
    ];
    }
    if(s1.value == "Nissan") {
        var optionArray = ["|Model","Altima|Altima","Armada|Armada",
        "Kicks|Kicks","Leaf|Leaf",
        "Maxima|Maxima","Murano|Murano",
        "Pathfinder|Pathfinder",
        "Rogue|Rogue",
        "Sentra|Sentra",
        "Versa|Versa",
        "370Z|370Z"
    ];
    }
    if(s1.value == "Honda") {
        var optionArray = ["|Model","Accord|Accord",
        "Clarity FCV|Clarity FCV","Civic|Civic","CR-V|CR-V",
        "Fit|Fit",
        "HR-V|HR-V","Insight|Insight",
        "Pilot|Pilot"
    ];
    }
    for(var option in optionArray) {
        var pair = optionArray[option].split("|");
        var newOption = document.createElement("option");
        newOption.value = pair[0];
        newOption.innerHTML = pair[1];
        s2.options.add(newOption);
    }

}