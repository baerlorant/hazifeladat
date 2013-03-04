(function() {
  var Port;

  Port = (function() {

    function Port() {}

    Port.key = "";

    Port.getLocation = function(query, callback) {
      var url;
      url = "http://www.port.hu";
      return $.ajax({
        dataType: "jsonp",
        context: window,
        jsonp: "cb",
        data: {
          query: query,
          format: "json"
        },
        type: 'get',
        url: url,
        data: null,
        success: callback,
        crossDomain: true
      });
    };

    Port.getFoci = function(location, callback) {
      var url;
      //url = "http://www.port.hu" + this.key + "/forecast/lang:HU/q/" + location + ".json";
      url = "http://port.hu/sport2/pls/tv/tv.channel?i_ch=44&i_date=2013-03-04&i_where=1";
      return $.ajax({
        dataType: "jsonp",
        url: url,
        data: null,
        success: callback,
        crossDomain: true
      });
    };

    return Port;

  })();

  window.Port = Port;

}).call(this);
