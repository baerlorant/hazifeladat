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
}

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
