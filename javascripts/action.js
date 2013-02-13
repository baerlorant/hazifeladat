var global = "";
function keyup(field) {
            global = global + field.value;
            if( field.value == "s){
                alert("A teljel szöveg: " + global);
            }
            else{
                alert("A leütött karakter:" + field.value);
            }
        }
