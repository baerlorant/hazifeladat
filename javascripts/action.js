function keyup1(field) {
            var last = field.value.charAt( field.value.length-1 );
            ///var c= String.fromCharCode(field.keyCode);
            //var last = c.match(/\w/);
            if( last == "s"){
                alert("A teljel szöveg: " + field.value);
                document.getElementById('eredmeny').value = field.value;
            }
            else{
                alert("A leütött karakter:" + last);
                document.getElementById('eredmeny').value = last;
            }
}

function keyup2(field) {
            var last = field.value.charAt( field.value.length-1 );
            ///var c= String.fromCharCode(field.keyCode);
            //var last = c.match(/\w/);
            if( last == "s"){
                alert("A teljel szöveg: " + field.value);
                document.getElementById('eredmeny').value = field.value;
            }
            else{
                alert("A leütött karakter:" + last);
                document.getElementById('eredmeny').value = last;
            }
}

function keyup3(field) {
            var last = field.value.charAt( field.value.length-1 );
            ///var c= String.fromCharCode(field.keyCode);
            //var last = c.match(/\w/);
            if( last == "s"){
                alert("A teljel szöveg: " + field.value);
                document.getElementById('eredmeny').value = field.value;
            }
            else{
                alert("A leütött karakter:" + last);
                document.getElementById('eredmeny').value = last;
            }
}
