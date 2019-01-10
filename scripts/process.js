var bcdata;
var reader = new FileReader();

reader.onloadend = function() {
  console.log("loaded");
  bcdata = new Uint8Array(reader.result);
  let myseed = getSeed(bcdata);
  $("#seed").html(myseed);
}

$(document).ready(function () {
  $("#fileDrop").on('change', function(){
    console.log("dropped file!");
    
    reader.readAsArrayBuffer($("#fileDrop")[0].files[0]);
    
  });
});

function getSeed(replay) {
  this.replay = replay;
  var seed = 0;
  for (let i = 0; i<4; i++) seed += (this.replay[i+2] << (24-8*i));
  console.log(seed);
  return seed;
}