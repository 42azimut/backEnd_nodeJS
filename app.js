const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html lang="ko">  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SignUp</title>
  </head>
  <body>
    여기는 루트 입니다.~~
    <p><a href="/login"> login 하시용 </a></p>
  </body>
  </html>
  `);
});

app.get('/login', (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html lang="ko">  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SignUp</title>
  </head>
  <body>
    <input type="text" placeholder="아이디"><br>
    <input type="text" placeholder="비밀번호"><br>
    <button>로그인</button>
  </body>
  </html>
  `);
});

app.listen(3000, () => {
  console.log("'서버가동중!!");
});
