 var randomno1=Math.floor(Math.random() * 6) + 1;

 var randomdiceimage="dice"+ randomno1 +".png"; // dice 1 to dice 6
 
 var randomimagesource= "images/"+ randomdiceimage ;  // images1.png to image6.png tk 

 var image1=document.querySelectorAll("img")[0];

 image1.setAttribute("src",randomimagesource);

 

var randomno2=Math.floor(Math.random() * 6) + 1;

var randomimagesource2= "images/dice"+ randomno2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomimagesource2);

if(randomno1 > randomno2){
    document.querySelector("h1").innerHTML="Player A wins";
}
else if(randomno1 <randomno2){
    document.querySelector("h1").innerHTML="Player B wins";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}