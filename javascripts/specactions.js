describe("changefizz", function(field){
  var i = 0;
  var element = document.createElement("input");
  element.setAttribute("id", "fizz");
  element.setAttribute("type", "text");
  
  beforeEach(function() {
     i =  i + 1;
     document.getElementById("fizz").value = i;
  });

  it("Test for: " + i, function() {
    value = {value : i};
    changefizz(value);
    expect(document.getElementById('fizz').value).toEqual("fizz");
  }); 

});
