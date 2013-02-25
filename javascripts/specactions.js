describe("changefizz", function(){
  var i = 0;
  var element = document.createElement("input");

  element.setAttribute("id", "fizz");
  element.setAttribute("type", "text");
  
  alert(document.getElementById("fizz"));
  
  /*beforeEach(function() {
     i =  i + 1;
     document.getElementById("fizz").value = i;
  });*/

  for(var j=0;j<100;j++){
      it("Test for: " + i, function() {
        value = {value : i};
        changefizz(value);
        expect("fizz".value).toEqual(document.getElementById("fizz"));
      }); 
  }

});
