var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public')); //aqui você define onde está o index.html da sua aplicação.
app.get('*', function(req, res) {
  res.sendFile(__dirname + '/public/index.html')
});
app.listen(process.env.PORT || 3000, function () {
    console.log('Servidor escutando na porta: ' + this.address().port);
});