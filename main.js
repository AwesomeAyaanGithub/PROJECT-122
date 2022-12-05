x = 0;
y = 0;

screen_width = 0;
screen_height = 0;

draw_apple = "";

apple = "";
speak_data = "";
to_number = 0;

function preload ()
{
    apple = loadImage("kisspng-clip-art-drawing-portable-network-graphics-image-c-other-club-penguin-cutouts-5c3d8227a9e4f8.2435258915475348876959.png")
}

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("status").innerHTML = "System is listening please say a number";
    recognition.start();
}

recognition.onresult = function(event) {

    console.log(event);
    
    content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The Speech has been recognized as: " + content;
    to_number = Number(content);
    if(Number.isInteger(to_number))
    {
        document.getElementById("status").innerHTML = "Started Drawing Apple ";
        draw_apple = "set"
    }
    else{
        document.getElementById("status").innerHTML = "The SPeech Has Not Recogniszed A Number "
    }
}
function setup() {
    screen_width = window.innerWidth;
    screen_height = window.innerHeight;
    canvas = createCanvas(screen_width, screen_height-150);
    canvas.position(0,150);
} 
function draw() {
    if(draw_apple == "set")
    {
        for(var i = 1; i <= to_number; i++)
        {
            x = Math.floor(Math.random() * 700);
            y = Math.floor(Math.random() * 400);
            image(apple, x, y, 50, 50);
        }
        document.getElementById("status").innerHTML = to_number + " Apples drawn";
        speak_data = to_number + "Apples drawn";
        speak();
        draw_apple = ""
    }
}
function speak() {
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    speak_data = "";
}