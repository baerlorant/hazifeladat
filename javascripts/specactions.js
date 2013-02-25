describe("changefizz", function(field){
  var i = 0;
  
  beforeEach(function() {
     i =  i + 1;
     document.getElementById("fizz").value = "";
  });

  it("Test for: " + i, function() {
    value = {value : i};
    changefizz(value);
    expect(document.getElementById('fizz').value).toEqual("fizz");
  }); 

});
