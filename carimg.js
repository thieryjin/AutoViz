

function update(val) {
    if (val == ""){
        var dd1 = document.getElementById("d1");
        const context = dd1.getContext('2d');
        context.clearRect(0, 0, dd1.width, dd1.height);
    }
    else {
    /*alert("The input value has changed. The new value is: " + val);
        var dd1 = document.getElementById("d1");
        dd1.style.backgroundColor="lime";*/
    var filepath = "pic/"+val+".jpg";
    var img= new SimpleImage(filepath);
        var dd1 = document.getElementById("d1");
        img.drawTo(dd1);
    /*if(val === "A5") {
        var img= new SimpleImage("pic/A5.jpg")
        var dd1 = document.getElementById("d1");
        img.drawTo(dd1);
    }*/}
}


window.onload=function() {
    document.getElementById("slct5").onchange=function() {
    if (this.value == ""){
        var dd2 = document.getElementById("d2");
        const context = dd2.getContext('2d');
        context.clearRect(0, 0, dd2.width, dd2.height);
    }
    else {
    
        var x = this.value;
        var filepath = "pic/"+x+".jpg";
    var img= new SimpleImage(filepath);
        var dd2 = document.getElementById("d2");
        img.drawTo(dd2);
    }
}
}