Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id = "captured_image" src = "'+data_uri+'"/>';
    });
}
console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/gyt_2dLJJ/model.json'),modelLoaded;

function modelLoaded() {
    console.log('Model Loaded!');
}

function check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    }   else {
        console.log(results);
        document.getElementById("result_emotion_name").innnerHTML = results[0].label;
        document.getElementById("result_emotion_name2").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        speak();
        if(results[0].label == "happy")
        {
            document.getElementById("update_emoji").innerHTML = "&#128513";
        }
        if(results[0].label == "normal")
        {
            document.getElementById("update_emoji").innerHTML = "&#128528";
        }
        if(results[0].label == "sad")
        {
            document.getElementById("update_emoji").innerHTML = "&#128557";
        }
        if(results[0].label == "anger")
        {
            document.getElementById("update_emoji").innerHTML = "&#128545";
        }
        if(results[0].label == "fear")
        {
            document.getElementById("update_emoji").innerHTML = "&#128561";
        }


        if(results[1].label == "happy")
        {
            document.getElementById("update_emoji").innerHTML = "&#128513";
        }
        if(results[1].label == "normal")
        {
            document.getElementById("update_emoji").innerHTML = "&#128528";
        }
        if(results[1].label == "sad")
        {
            document.getElementById("update_emoji").innerHTML = "&#128557";
        }
        if(results[1].label == "anger")
        {
            document.getElementById("update_emoji").innerHTML = "&#128545";
        }
        if(results[1].label == "fear")
        {
            document.getElementById("update_emoji").innerHTML = "&#128561";
        }
    }
}