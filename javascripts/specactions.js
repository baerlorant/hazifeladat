describe("changefizz", function(field){
  this.field.value = 0;
  
  beforeEach(function() {
    i = i + 1;
  });

  it("Test for: " + this.field.value, function() {
    expect(document.getElementById('fizz').value).toEqual("fizz");
  }); 

});
