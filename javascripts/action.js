function keyup1(field) {
            var last = field.value.charAt( field.value.length-1 );
            ///var c= String.fromCharCode(field.keyCode);
            //var last = c.match(/\w/);
            if( last == "s"){
                alert("A teljel szöveg: " + field.value);
                document.getElementById('eredmeny1').value = field.value;
            }
            else{
                alert("A leütött karakter:" + last);
                document.getElementById('eredmeny1').value = last;
            }
}

/*
function keyup2(field) {
            var last = field.value.charAt( field.value.length-1 );
            ///var c= String.fromCharCode(field.keyCode);
            //var last = c.match(/\w/);
            if( last == "s"){
                alert("A teljel szöveg: " + field.value);
                document.getElementById('eredmeny2').value = field.value;
            }
            else{
                alert("A leütött karakter:" + last);
                document.getElementById('eredmeny2').value = last;
            }
}*/

function keyup3(field) {
            var last = field.value.charAt( field.value.length-1 );
            ///var c= String.fromCharCode(field.keyCode);
            //var last = c.match(/\w/);
            if( last == "s"){
                alert("A teljel szöveg: " + field.value);
                document.getElementById('eredmeny3').value = field.value;
            }
            else{
                alert("A leütött karakter:" + last);
                document.getElementById('eredmeny3').value = last;
            }
}


var myHandler = (function () {
  var bemenet;
  
  function gombnyomas(msg) {
            var last = bemenet.value.charAt( bemenet.value.length-1 );
            
            if( last == "s"){
                alert("A teljel szöveg: " + field.value);
                document.getElementById('eredmeny2').value = last;
            }
            else{
                alert("A leütött karakter:" + last);
                document.getElementById('eredmeny2').value =  bemenet.value;
            }  
  }

  

  function setUp() {
    bemenet = document.getElementById('text2');
    bemenet.addEventListener("keyup", gombnyomas);
  }
  return setUp;
})();

document.addEventListener('DOMContentLoaded', myHandler);


function $_GET(q,s) {
        s = s ? s : window.location.search;
        var re = new RegExp('&'+q+'(?:=([^&]*))?(?=&|$)','i');
        return (s=s.replace(/^?/,'&').match(re)) ? (typeof s[1] == 'undefined' ? '' : decodeURIComponent(s[1])) : undefined;
}

function changefizz(field) {
            var out = '';
            if( field.value % 3 == 0)
                out = out.'fiz';
            if( field.value % 5 == 0)
                out = out.'buzz';
            if( field.value % 7 == 0)
                out = out.'bizz';
            
            document.getElementById('fizz').value = out;
            
}


    

