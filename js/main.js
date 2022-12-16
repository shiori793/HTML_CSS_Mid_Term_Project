// header menu
const toggle = $('.toggle');
const menu = $('.menu');

toggle.click(function() {
    toggle.toggleClass('active');
    menu.toggleClass('active');
});

// card slider
const next = $('.next-btn');
const prev = $('.prev-btn');

next.click(function () {
    let target = $(this).parent('.list-contents').find('.songlist');
    let width = target.width();
    target.animate({
        scrollLeft: target.scrollLeft() + width
    }, 300);
    return false;
});

prev.click(function () {
    let target = $(this).parent('.list-contents').find('.songlist');
    let width = target.width();
    target.animate({
        scrollLeft: target.scrollLeft() - width
    }, 300);
    return false;
});

// audio play
function audio() {
    let audio = document.getElementById('audio');
    audio.load();
    audio.currentTime = 0;
    audio.play();
    setTimeout(() => {
        audio.pause(); 
    }, 10000);
}

// upload picture file
const picture_file_area = document.getElementById('upload-picture');
const picture_file_input = document.getElementById('sell-music-picture');

picture_file_area.addEventListener('dragover', function(e){
    e.preventDefault();
    picture_file_area.classList.add('dragover');
});

picture_file_area.addEventListener('dragleave', function(e){
    e.preventDefault();
    picture_file_area.classList.remove('dragover');
});

picture_file_area.addEventListener('drop', function(e){
    e.preventDefault();
    picture_file_area.classList.remove('dragover');
    let picture_files = e.dataTransfer.files;
    
    if(typeof picture_files[0] !== 'undefined') {
        if (picture_files[0].type.match("image.*") != null) {
            picture_file_input.files = picture_files;
            picture_file_area.style.backgroundImage = "url(" + URL.createObjectURL(picture_files[0]) + ")";
            picture_file_area.classList.add('selected');
        } else {
            alert("Please select an image file.");
        }
    } else {
        alert("Please try again.");
    }
});

picture_file_input.addEventListener('change', function(e){
    let picture_file = e.target.files[0];
    
    if(typeof picture_file !== 'undefined') {
        if (picture_file.type.match("image.*") != null) {
            picture_file_area.style.backgroundImage = "url(" + URL.createObjectURL(picture_file) + ")";
            picture_file_area.classList.add('selected');
        } else {
            alert("Please select an image file.");
            picture_file_input.value = '';
            picture_file_area.style.backgroundImage = 'none';
            picture_file_area.classList.remove('selected');
        }
    } else {
        picture_file_area.style.backgroundImage = 'none';
        picture_file_area.classList.remove('selected');
    }
}, false);

// upload audio file
const audio_file_area = document.getElementById('upload-audio');
const audio_file_input = document.getElementById('sell-music-audio');
const audio_file_add_icon = document.getElementById('sell-music-audio-add-icon');

audio_file_area.addEventListener('dragover', function(e){
    e.preventDefault();
    audio_file_area.classList.add('dragover');
});

audio_file_area.addEventListener('dragleave', function(e){
    e.preventDefault();
    audio_file_area.classList.remove('dragover');
});

audio_file_area.addEventListener('drop', function(e){
    e.preventDefault();
    audio_file_area.classList.remove('dragover');

    let audio_files = e.dataTransfer.files;
    
    if(typeof audio_files[0] !== 'undefined') {
        if (audio_files[0].type.match("audio.*") != null) {
            audio_file_input.files = audio_files;
            audio_file_area.style.backgroundImage = "url(" + "./image/play-icon.png" +")";
            audio_file_area.classList.add('selected');
        } else {
            alert("Please select an audio file.");
        }
    } else {
        alert("Please try again.");
    }
});

audio_file_input.addEventListener('change', function(e){
    let audio_file = e.target.files[0];
    
    if(typeof audio_file !== 'undefined') {
        if (audio_file.type.match("audio.*") != null) {
            audio_file_area.style.backgroundImage = "url(" + "./image/play-icon.png" +")";
            audio_file_area.classList.add('selected');
        } else {
            alert("Please select an audio file.");
            audio_file_input.value = '';
            audio_file_area.style.backgroundImage = 'none';
            audio_file_area.classList.remove('selected');
        }
    } else {
        audio_file_area.style.backgroundImage = 'none';
        audio_file_area.classList.remove('selected');
    }
}, false);