$(document).ready(function() {
 //play sound
  function playPad() {
    var audioButton = new Audio();
    audioButton.src = 'http://www.oringz.com/oringz-uploads/sounds-917-communication-channel.mp3';
    audioButton.play();
  }

  $('#pad1').mousedown(function(){
    playPad();
  })

  $('#pad2').mousedown(function(){
    playPad();
  })

  $('#pad3').mousedown(function(){
    playPad();
  })

  $('#pad4').mousedown(function(){
    playPad();
  })

  $('#pad5').mousedown(function(){
    playPad();
  })

  $('#pad6').mousedown(function(){
    playPad();
  })

  $('#pad7').mousedown(function(){
    playPad();
  })

  $('#pad8').mousedown(function(){
    playPad();
  })

  $('#pad9').mousedown(function(){
    playPad();
  })
})
