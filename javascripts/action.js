function keyup(field) {
            var last = field.value.charAt( field.value.length-1 );
            if( last == "s"){
                alert("A teljel szöveg: " + field.value);
            }
            else{
                alert("A leütött karakter:" + last);
            }
        }
