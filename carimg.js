

function update(val) {
    if(val === "A4") {
        alert("The input value has changed. The new value is: " + val);
        var dd1 = document.getElementById("d1");
        dd1.style.backgroundColor="lime";
    }
    if(val === "A5") {
        var img= new SimpleImage("pic/A5.jpg")
        var dd1 = document.getElementById("d1");
        img.drawTo(dd1);
    }
}