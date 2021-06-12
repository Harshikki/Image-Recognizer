Webcam.set({
    width: 350,
    height: 350,
    image_format: 'jpg',
    jpg_quality: 90
});
   
camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
});
}

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/a2DuCG52y/model.json',modelLoaded)

function modelLoaded(){
    console.log("Model Loaded");
}

function check(){
    img = document.getElementById("captured_image");
    classifier.classify(img , gotResult);
}

function gotResult(error , results){
if(error){
    console.error(error);
}
else{
    console.log(results);
    document.getElementById("result_object").innerHTML = results[0].label;
    document.getElementById("result_accuracy").innerHTML = results[0].confidence.toFixed(3)
}
}