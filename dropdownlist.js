function populate(s1,s2){
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);
    s2.innerHTML = "";
    if(s1.value == "") {
        var optionArray = ["|Model"
    ];
    }
    if(s1.value == "Acura") {
        var optionArray = ["|Model", "ILX|ILX","MDX|MDX","RDX|RDX","TLX|TLX"
    ];
    }
    if(s1.value == "Audi") {
        var optionArray = ["|Model", "A3|A3","A4|A4","A5|A5","A6|A6","A7|A7",
        "A8|A8",
        "Q3|Q3","Q5|Q5","Q7|Q7","Q8|Q8",
        "R8|R8","TT|TT"
    ];
    }
    if(s1.value == "BMW") {
        var optionArray = ["|Model",
        "I3|I3","I8|I8",
        "X1|X1","X2|X2","X3|X3","X4|X4","X5|X5","X6|X6",
        "2-Series|2-Series",
        "3-Series|3-Series","4-Series|4-Series","5-Series|5-Series","6-Series|6-Series",
        "7-Series|7-Series","8-Series|8-Series"
    ];
    }
    if(s1.value == "Buick") {
        var optionArray = ["|Model","Cascada|Cascada",
        "Enclave|Enclave","Encore|Encore","Envision|Envision",
        "LaCrosse|LaCrosse","Regal|Regal"
    ];
    }
    if(s1.value == "Cadillac") {
        var optionArray = ["|Model","ATS|ATS","CTS|CTS","CT6|CT6", 
        "Escalade|Escalade",
        "XTS|XTS","XT4|XT4","XT5|XT5"
    ];
    }
    if(s1.value == "Chevy") {
        var optionArray = ["|Model", "Bolt|Bolt","Camero|Camaro","Corvette|Corvette","Cruze|Cruze","Equinox|Equinox","Impala|Impala","Malibu|Malibu",
        "Sonic|Sonic","Spark|Spark","Suburban|Suburban",
        "Tahoe|Tahoe","Traverse|Traverse","Trax|Trax",
        "Volt|Volt"
    ];
    }
    if(s1.value == "Dodge") {
        var optionArray = ["|Model", "Charger|Charger","Challenger|Challenger","Durango|Durango",
        "Journey|Journey"
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
    if(s1.value == "GMC") {
        var optionArray = ["|Model", "Acadia|Acadia","Terrain|Terrain",
        "Yukon|Yukon"
    ];
    }
    if(s1.value == "Hyundai") {
        var optionArray = ["|Model", "Accent|Accent","Elantra|Elantra",
        "Ioniq|Ioniq",
        "Kona|Kona",
        "Santa Fe|Santa Fe","Sonata|Sonata",
        "Tuscon|Tuscon",
        "Veloster|Veloster"
    ];
    }
    if(s1.value == "Infiniti") {
        var optionArray = ["|Model","Q50|Q50","Q60|Q60","Q70|Q70",
        "QX30|QX30", "QX50|QX50","QX60|QX60","QX70|QX70","QX80|QX80"
    ];
    }
    if(s1.value == "Jeep") {
        var optionArray = ["|Model", "Cherokee|Cherokee","Compass|Compass",
        "Grand Cherokee|Grand Cherokee","Renegade|Renegade",
        "Wrangler|Wrangler"
    ];
    }
    if(s1.value == "Kia") {
        var optionArray = ["|Model", "Cadenza|Cadenza","Forte|Forte","Niro|Niro",
        "Optima|Optima","Rio|Rio",
        "Sorento|Sorento","Soul|Soul","Sportage|Sportage","Stinger|Stinger"
    ];
    }
    if(s1.value == "Lexus") {
        var optionArray = ["|Model", "ES|ES","GS|GS","GX|GX","IS|IS",
        "LS|LS",
        "NX|NX",
        "RC|RC","RX|RX"
    ];
    }
    if(s1.value == "Lincoln") {
        var optionArray = ["|Model", "Continental|Continental",
        "MKC|MKC","MKT|MKT","MKX|MKX",
        "MKZ|MKZ",
        "Navigator|Navigator"
    ];
    }
    if(s1.value == "Mazda") {
        var optionArray = ["|Model", "CX-3|CX-3","CX-5|CX-5","CX-9|CX-9",
        "Mazda 3|Mazda 3","Mazda 6|Mazda 6","MX-5 Miata|MX-5 Miata"
    ];
    }
    if(s1.value == "Mercedes-Benz") {
        var optionArray = ["|Model", "AMG GT|AMG GT","B-Class|B-Class",
        "C-Class|C-Class","CLA-Class|CLA-Class",
        "E-Class|E-Class",
        "G-Class|G-Class","GLA-Class|GLA-Class","GLC-Class|GLC-Class","GLE-Class|GLE-Class","GLS-Class|GLS-Class",
        "S-Class|S-Class","SL-Class|SL-Class","SLC-Class|SLC-Class"
    ];
    }
    if(s1.value == "Mini") {
        var optionArray = ["|Model", "Cooper|Cooper","Countryman|Countryman"
    ];
    }
    if(s1.value == "Porsche") {
        var optionArray = ["|Model", "Cayenne|Cayenne","Macan|Macan",
        "Panamera|Panamera","718|718","911|911"
    ];
    }
    if(s1.value == "Smart") {
        var optionArray = ["|Model", "ForTwo|ForTwo"
    ];
    }
    if(s1.value == "Subaru") {
        var optionArray = ["|Model", "Ascent|Ascent","BRZ|BRZ","CrossTrek|CrossTrek",
        "Forester|Forester",
        "Impreza|Impreza","Legacy|Legacy",
        "Outback|Outback",
        "WRX|WRX"
    ];
    }
    if(s1.value == "Tesla") {
        var optionArray = ["|Model", "Model S|Model S","Model X|Model X",
        "Model 3|Model 3"
    ];
    }
    if(s1.value == "Toyota") {
        var optionArray = ["|Model","Avalon|Avalon","C-HR|C-HR","Camry|Camry","Corolla|Corolla",
        "Highlander|Highlander",
        "Prius|Prius",
        "RAV4|RAV4",
        "Yaris|Yaris",
        "4Runner|4Runner",
        "86|86"
    ];
    }
    if(s1.value == "Volkswagen") {
        var optionArray = ["|Model","Atlas|Atlas","Beetle|Beetle",
        "Golf|Golf",
        "Jetta|Jetta","Passat|Passat",
        "Tiguan|Tiguan"
    ];
    }
    if(s1.value == "Volvo") {
        var optionArray = ["|Model","S60|S60","S90|S90",
        "XC40|XC40","XC60|XC60","XC90|XC90"
    ];
    }
    if(s1.value == "Nissan") {
        var optionArray = ["|Model","Altima|Altima","Armada|Armada",
        "GT-R|GT-R",
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