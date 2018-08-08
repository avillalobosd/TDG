var clanData = require("../data/clanData");
var request = require("request");
var members;
var numero=0;


//API DE MIEMBROS DEL CLAN
var clanMembers = {};
var options = { method: 'GET',
  url: 'https://api.royaleapi.com/clan/9LYG2Y9',
  headers: { auth: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTM5MiwiaWRlbiI6IjIxMzM3NTEwNjI4MDMyNTEyMSIsIm1kIjp7fSwidHMiOjE1MzM0OTU5NzA3NTJ9.cjOPYJBQqjYeJZDd3iwaeohay_fHxukjMINR_RM4DTQ' }
};

//SACA LOS MIEMBROS DEL CLAN CON SU INFORMACION
request(options, function (error, response, body) {
  if (error) throw new Error(error);
  members=JSON.parse(body).members;
  for (var i = 0; i < members.length; ++i)
  clanMembers[i] = members[i];
});

module.exports = function(app) {
  // Get all examples

  app.get("/", function(req, res) {
  
      res.render("index", {
        msg: "Welcome!",
        examples: clanMembers
      });

  });

};


