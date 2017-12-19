const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];


function init() {

      var keys = [];
      var index = 0;   
      document.body.addEventListener('keydown', function(e){

          keys.push(e.index);

          if (keys.toString().indexOf(code) >= 0) {

               alert("Hurray!");

              keys = [];
          }
      }, true);
  
}


