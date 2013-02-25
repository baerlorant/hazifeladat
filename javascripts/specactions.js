describe("changefizz", function(field){
  field.value = 0;
  
  beforeEach(function() {
     field.value =  field.value + 1;
  });

  it("Test for: " + field.value, function() {
    expect(document.getElementById('fizz').value).toEqual("fizz");
  }); 

});
