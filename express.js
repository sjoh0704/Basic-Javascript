/*

< express 시작하기 > 

1. 작업 폴더에서 
```
npm init -y 
```
(-y 옵션을 주면 디폴트옵션으로 설정)
package.json파일이 생성된다. 



2. express 설치하기
```
npm install express
```
여러가지 파일들이 생성된다.

- `package.json` 파일을 다시 열어봤을때 express 관련된 내용이 들어있으면 정상적으로 설치가 된 것입니다.
- `package-lock.json`은 어떤 패키지들이 어떤 버전으로 설치되었는지 기록해놓은 파일입니다. 
    나중에 이 파일이 있으면 다른 동료들과 협업할때 같은 환경으로 개발할 수 있게 도와줍니다.
- `node_modules` 폴더는 실제로 설치된 패키지들이 들어있는 폴더입니다. 



3. express 실행하기

index.js 파일을 생성해서 다음 코드를 복붙

```
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})
```

node index.js로 실행하면 3000포트에 웹서버를 확인 가능. 
 */