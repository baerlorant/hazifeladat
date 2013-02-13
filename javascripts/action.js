function keyup(field) {
            if( field.which == "s"){
                alert("A teljel szöveg: " + field.value);
            }
            else{
                alert("A leütött karakter:" + field.which);
            }
        }
