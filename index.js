var http = require("http");
const PORT = process.env.PORT || 5000;

http
  .createServer(function(req, res) {
    res.write("URL : " + req.url);
    res.end();
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
