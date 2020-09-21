// src/models/User.js
var m = require("mithril")

var User = {
    list: [],
  loadList: function() {
     // make XHR call
     return m.request({
            method: "GET",
            url: "https://rem-rest-api.herokuapp.com/api/users",
            withCredentials: true, //we're using cookies (which is a requirement for the REM API)
        })
        .then(function(result) {
            User.list = result.data
        })
    }
}

module.exports = User
