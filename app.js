const express = require('express');
const app = express();

//app 세팅
app.set('views', './views');
// ejs 엔젠으로 뷰를 해석
//app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');



app.get('/', (req, res) => {
  res.render('home/index');
});

app.get('/login', (req, res) => {
  res.render(`home/login`);
});

app.listen(3000, () => {
  console.log("'서버가동중!!");
});
