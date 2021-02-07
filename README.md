# backEnd_nodeJS
## Thanks very so much || **우리밋_woorimIT**
___
### package.json 만들기
- `npm init -y`  (default로 -y는 모두 yes)
- bin ==>>> binary
- `npm start`  (package.json 위에서 만든 명령어를 한번에 대신 실행!)
- `npm install` (dependencies에 명시된 모듈를 설치한다! npm i == npm install)
___
### git
- `git tag v0.1.0-notDB`
- `git tag`
- `git log --oneline`
- `git push ori
[git tag 삭제]
- `git tag -d v0.1.0-notDB`  [local tag delete]
- `git push origin :v0.1.0-notDB`  [remote tag delete]
___
### Promises  & await
ex.) `const fs = require("fs").promises;`
- 수행동작이 끝남과 동시에 상태를 알려주기 때문에 **비동기 처리**에 아주 효과적! 
- promises 는 데이터를 읽는데 다소 시간이 걸림!  (비동기 방식의 장점)
- promises 를 반환해준 것만 await 사용 가능하다!  
- await 사용이유는 가독성 때문이다.  
- await 는 사용이 제한적이다. async 함수 내에서만 사용 가능하다! 

```
    fs.readFile("./src/databases/users.json")
      .then()   //해당 로직이(위) 성공했을때 실행
      .catch(); // 실패했을떄 실행
```
___
### Postman | curl : API 서버 테스트 도구
#### curl TEST
- `curl http://localhost:3000/login`
- html 출력

- `curl http://localhost:3000/login -X POST -d '{"id":"jay", "psword":"123"}' -H "Content-Type: application/json"`
- $ success:true

- `curl http://localhost:3000/register -d '{"id":"kkarot", "psword":"1234"}' -H "Content-Type: application/json"`
- $ success:true
___

#### postman TEST
[postman web](https://www.postman.com/)
- 회원가입후 앱설치
- 주소입력(http://locatlhost:300/login)
- raw data인 JSON 데이타 형식으로 {id, pw{ 를 입력하고 send! / 존재하는 아이디와, 미존재 아이디 테스트
___
### 환경변수 관리(보안 향상) | dotenv
- 환경변수안에 변수를 호출하여 온라인 상에서 확인할 수 없다!
- `npm i -s dotenv`
- 파일명(만들기) .env로 동일하게 하자!(관행)
- src/.env
```
## 환경변수 설정하기
.emv
PORT=3000

www.js
const PORT = process.env.PORT || 3000;
```


___
### 우리밋_woorimIT nodejs 백엔드 튜토리얼 

[01. 로그인 & 회원가입 | 오리엔테이션](https://www.youtube.com/watch?v=2jwnbZKc66E&t=262s)

[02. 개발환경 세팅](https://www.youtube.com/watch?v=48lz8rw3PE8)

[03. express로 서버 띄워보기](https://www.youtube.com/watch?v=PkVV1OLaM5Q)

[04. http로 서버 띄워보기](https://www.youtube.com/watch?v=7gF09WFGK4I)

[05. 로그인 화면 만들기 | 리얼 하드코딩으로](https://www.youtube.com/watch?v=AZtyyeCwNoc)

[06. 로그인 뷰(view) 최적화 | MVC의 V(view) 분리하기](https://www.youtube.com/watch?v=dB1n8bKgn1E)

[07. 라우팅 분리](https://www.youtube.com/watch?v=mL84PLyKss0&t=44s)

[08. MVC의 C(controller) 컨트롤러 분리하기](https://www.youtube.com/watch?v=KwCjYdYv0_s)

[09. app.listen() 모듈화](https://www.youtube.com/watch?v=W5bZy0Uzn6I&t=13s)

[10. package.json | package-lock.json | node_modules | npm start](https://www.youtube.com/watch?v=Jy9quSZbVTc)

[11. about git](https://www.youtube.com/watch?v=FN9nOLqyNEc)

[12. 폴더 구조 최적화](https://www.youtube.com/watch?v=BIjDK_xycaI)

[13. nodemon으로 서버 띄우기 | 개발 생산성 높이기](https://www.youtube.com/watch?v=yJch-m_OCYI&t=11s)

[14. DOM으로 HTML 객체 제어하기 | 프런트 기능 구현](https://www.youtube.com/watch?v=yJch-m_OCYI)

[15. fetch | 프런트에서 서버로 데이터 보내기](https://www.youtube.com/watch?v=QRo3-00n_ew)

[16. 로그인 API 만들기 in 서버 | 프런트의 요청데이터 파싱 | body-parser](https://www.youtube.com/watch?v=QLTcXMfcmLE&t=203s)

[17. 로그인 인증 기능 만들기 in 서버 | 유저 데이터 만들기](https://www.youtube.com/watch?v=lP1xx1A1vSU&t=8s)

[18. 서버의 응답데이터 처리 in 프런트](https://www.youtube.com/watch?v=x_h2bye9SIE)

[19. MVC의 모델(M) 만들기 | 객체지향프로그래밍(OOP) | UserStorage 클래스](https://www.youtube.com/watch?v=x_h2bye9SIE)

[20. User 모델 만들기 | 객체지향 프로그래밍 | 인스턴스화](https://www.youtube.com/watch?v=69JiX9rGNmI)

[21. 로그인 화면 꾸미기 | 오픈소스 사용해보기 | 코드펜(codepen)](https://www.youtube.com/watch?v=Th-HDyPCewA&t=300s)

[22. 회원가입 화면 만들기&꾸미기 | 오픈소스 사용해보기](https://www.youtube.com/watch?v=n3XUYss1jPg)

[23. 회원가입 요청 구현 in 프런트 | fetch | ajax](https://www.youtube.com/watch?v=YBRpfDsWm9k&t=307s)

[24. 회원가입 라우팅&기능구현 in 서버 | 깃 버전 관리 | tag](https://www.youtube.com/watch?v=mizgP540Zvc&t=10s)

[25. 데이터 파일로 관리하기 | fs(파일시스템) | json](https://www.youtube.com/watch?v=K0vJFEOTMeA&t=318s)

[26. 파일 DB로 로그인 구현 | promise와 async await 으로 비동기 최적화](https://www.youtube.com/watch?v=dchFLwlpI-c)

[27. 파일 DB로 회원가입 구현 | promise와 async await 으로 비동기 최적화](https://www.youtube.com/watch?v=myi7ZrKkf2o&t=119s)

[28. 서버 API 테스트 도구 | Postman | curl](https://www.youtube.com/watch?v=0veQoK9V07k)

[29. ]()

[... 중간 aws 생략!]

[30. 백엔드 맛보기 | 환경 변수 관리 | 보안 향상 | dotenv](https://www.youtube.com/watch?v=OEZedYK5biA)
