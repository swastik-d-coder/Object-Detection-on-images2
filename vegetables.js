Status="";
veggie_array=[];

function preload() {
    img=loadImage('Carrot.jpg');
}

function setup() {
    canvas=createCanvas(640, 420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects"

}

function draw() {
    image(img, 0, 0,98, 400);
   if(Status != ""){
for(i=0; i<veggie_array.length; i++){
confidence=Math.floor(veggie_array[i].confidence*100);
text(veggie_array[i].label+" "+confidence+"%",veggie_array[i].x, veggie_array[i].y);
rect(veggie_array[i].x, veggie_array[i].y, veggie_array[i].height, veggie_array[i].width);
}
noFill();
stroke("#FF0000");
   }
}

function modelLoaded() {
console.log("Model Loaded!");
Status=true;
objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    veggie_array=results;
    document.getElementById("status").innerHTML = "There are 1 big object from which cocossd model has detected 1 object."
}