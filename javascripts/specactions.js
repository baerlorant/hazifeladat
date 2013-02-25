describe("changefizz", function(field){
  this.field = 0;
  
  beforeEach(function() {
    i = i + 1;
  });

  it("Test for: " + i, function() {
    expect(player.currentlyPlayingSong).toEqual(document.getElementById('fizz').value);
  }); 

});
