$(document).ready(function() {
    let headCounter = 0,
        eyeCounter = 0,
        noseCounter = 0,
        mouthCounter = 0;
    const audio = new Audio('LSE.mp3');
    audio.playbackRate = 2;
    audio.play();

    $('#head').bind('contextmenu', function(e){
        e.preventDefault();
        if (headCounter > 0) {
                $(this).animate( {left: "+=367px"}, 500 );
                headCounter -= 1;
        }
        return false;
    })

    $('#eyes').bind('contextmenu', function(e){
        e.preventDefault();
        if (eyeCounter > 0) {
            $( this ).animate( {left: "+=367px"}, 500 );
            eyeCounter -= 1;
        }
        return false;
    })

    $('#nose').bind('contextmenu', function(e){
        e.preventDefault();
        if (noseCounter > 0) {
            $( this ).animate( {left: "+=367px"}, 500 );
            noseCounter -= 1
        }
        return false;
    })

    $('#mouth').bind('contextmenu', function(e){
        e.preventDefault();
        if (mouthCounter > 0) {
            $( this ).animate( {left: "+=367px"}, 500 );
            mouthCounter -= 1
        }
        return false;
    })

    $("#head").click( function() {
        if (headCounter < 9 ) {
                $( this ).animate( {left: "-=367px"}, 500 );
                headCounter += 1
        }
        else if (headCounter  === 9) {
            $( this ).animate( {left: "0px"}, 500 );
            headCounter = 0;
        }
    });

    $("#eyes").click(function() {
        if (eyeCounter < 9) {
            $(this).animate({ left: "-=367px" }, 500);
            eyeCounter += 1;
        } else {
            $(this).animate({ left: "0px" }, 500);
            eyeCounter = 0;
        }
    });

    $("#nose").click(function() {
        $(this).animate({ left: "-=367px" }, 500);
        if (noseCounter < 9) {
            noseCounter += 1;
        } else {
            $(this).animate({ left: "0px" }, 500);
            noseCounter = 0;
        }
    });

    $("#mouth").click(function() {
        if (mouthCounter < 9) {
            $(this).animate({ left: "-=367px" }, 500);
            mouthCounter += 1;
        } else {
            $(this).animate({ left: "0px" }, 500);
            mouthCounter = 0;
        }
    });

    setInterval(initiateRandomLightning, 3000); // 3 seconds delay 
});

function initiateRandomLightning() {
    let randomLightningInterval = Math.round(Math.random() * 3000) + 3000;
    setTimeout(initiateLightning, randomLightningInterval);
}

function initiateLightning() {
    let randomLightningIndex = Math.floor(Math.random() * 3) + 1;
    $(`#lightning${randomLightningIndex}`).fadeIn(250).fadeOut(250);
    audio.play(); // Play the audio when the lightning appears
}
