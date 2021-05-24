var numSquares=6;
var colors= generateRandomColor(numSquares);
var pickedColor = pickColor();
var colordisplay = document.getElementById("colorcode");
colordisplay.textContent= pickedColor;
var messageDisplay= document.getElementById("message")
var squares=document.querySelectorAll(".square");
var h1= document.querySelector("h1");
var reset=document.getElementById("NewGame");
var easyBtn=document.querySelector("#easy");
var hardBtn=document.querySelector("#hard");


easyBtn.addEventListener("click",function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares=3;
    colors=generateRandomColor(numSquares);
    pickedColor=pickColor();
    colordisplay.textContent=pickedColor;
    for( var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.background=colors[i];
        }
    else{
        squares[i].style.display="none";
    }
    }

})

hardBtn.addEventListener("click",function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares=6;
    colors=generateRandomColor(numSquares);
    pickedColor=pickColor();
    colordisplay.textContent=pickedColor;
    for( var i=0;i<squares.length;i++){
        
        squares[i].style.background=colors[i];
      
        squares[i].style.display="block";
    
    }

})

reset.addEventListener("click",function(){
    colors=generateRandomColor(numSquares);
    pickedColor=pickColor();
    colordisplay.textContent=pickedColor;
    for (var i=0; i<squares.length; i++){
        squares[i].style.background=colors[i];
    }
    h1.style.backgroundColor= "steelblue";
    messageDisplay.textContent="";
    reset.textContent="NEW GAME";
    
    
});



for (var i=0; i<squares.length; i++){
    squares[i].style.background=colors[i];
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.background;
        if (clickedColor===pickedColor){
            messageDisplay.textContent="Correct";
            changeColors(clickedColor);
            h1.style.backgroundColor=clickedColor;
            reset.textContent="Play Again?";
        }
        else{
            messageDisplay.textContent= "Try Again";
            this.style.background= "#232323";
        }
        

    });
}

function changeColors(color){
    for (var i=0; i<squares.length; i++){
        squares[i].style.background=color;
    }
}

function pickColor(){
    var randomColor= Math.floor(Math.random()* colors.length);
    return colors[randomColor];
}

function generateRandomColor(num){
    var arr=[]
    for (var i=0; i<num; i++){
        arr.push(colorRGB())
    }
    return arr;

}

function colorRGB(){
    
        var r= Math.floor(Math.random()*256);
        var g= Math.floor(Math.random()*256);
        var b= Math.floor(Math.random()*256);
        return"rgb(" + r + ", " + g + ", " + b + ")";
    
}