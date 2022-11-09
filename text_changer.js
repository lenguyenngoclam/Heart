let script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

function fadeInText() {
    $("tex")
}

function fadeOutText() {
    $("#text").fadeOut();
}

setInterval(1000, fadeInText());
setInterval(2000, fadeOutText());