var numsquares = 6;
var colors = generaterandomcolors(numsquares);
var pickedcolor = pickcolor();
var colordisplay = document.querySelector("#colordisplay");
colordisplay.textContent = pickedcolor;
var square = document.querySelectorAll(".square");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");
var mode = document.querySelectorAll(".mode");

for(var i=0; i<mode.length; i++)
{
    mode[i].addEventListener("click", function(){
        mode[0].classList.remove("selected");
        mode[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent ==="Easy" ? numsquares = 3 : numsquares = 6;
        resetbutton();
    
    })
}

function resetbutton(){
    colors = generaterandomcolors(numsquares);    
    pickedcolor = pickcolor();
    colordisplay.textContent = pickedcolor;
    message.textContent = "";
    reset.textContent ="New Colors";
    h1.style.backgroundColor = "steelblue";
    for(var i=0; i<square.length; i++)
    {
        if(colors[i]){
                    square[i].style.display = "block";    
                    square[i].style.backgroundColor = colors[i];
                    }
                    else 
                    square[i].style.display = "none";
    }
}

for(var i=0; i<square.length; i++)
{
    square[i].style.backgroundColor = colors[i];

    square[i].addEventListener("click", function(){
        var clickedcolor = this.style.backgroundColor ;
    
    if(pickedcolor === clickedcolor){
        message.textContent = "Nice Work";
        changecolor(clickedcolor);
        h1.style.backgroundColor = clickedcolor
        reset.textContent = "Play Again??";
    }
    else {
        this.style.backgroundColor = "#232323";
        message.textContent = "Try Again";
        }   
    });

}

function changecolor(color)
{
    for(var i=0; i<square.length; i++)
    {
        square[i].style.backgroundColor = color;
    }
}

function pickcolor()
{
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generaterandomcolors(num)
{
    var arr = [];
    for(var i=0; i<num; i++)
    {
        arr.push(randomcolor());
    }
    return arr;
}

function randomcolor()
{
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb("+ r +", "+ g +", " + b +")";
}

reset.addEventListener("click" , function(){
   resetbutton(); 
});