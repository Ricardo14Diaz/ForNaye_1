//div = document.getElementById("containerImgInterface").style.backgroundColor = "blue" //or write  rgb(4, 4, 100)

var nowColor = "black";
function changeModeColor() {
    var div = document.getElementById("containerImgInterface");  
    var text = document.getElementById('text');
    var botoncito = document.getElementById('botoncito');
    if (nowColor === "black"){
        div.style.backgroundColor = "red";
        nowColor = "red"
        text.style.color = "#0ff"
        botoncito.style.backgroundColor = "crimson";
        
    }else{
        div.style.backgroundColor = "black";
        nowColor = "black";
        text.style.color = 'crimson'
        botoncito.style.backgroundColor = "rgb(12, 129, 129)";
        
    }
}