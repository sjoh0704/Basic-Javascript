// socketio와 express 사용하기 

// 패키지 설치: npm i socket.io express -S  

// socket 서버와 express서버를 합치기 위해 http 모듈을 상속받는다. 

const Http = require('http'); // nodejs에서 기본적으로 제공하는 웹 서버 모델 
const express = require('express');  // http 모듈을 상속받는다. 
const socketIo =require('socket.io');

const app =express();
const http = Http.createServer(app); // 다른 http서버를 받아서 확장시킬 수 있다.(단 상속한다 전제하에 )

const io = socketIo(http, {
    cors:{
        origin: '*',
        method: ["GET", "POST"] 
    }
}); 

// express 동작시키기. 
app.get('/test', (req, res) => {
    res.send('익스프레스 잘 동작합니다.');
})

//소켓 연결
io.on('connection', (socket) => {

    console.log('클라이언트와 연결이 되었습니다.');    
    socket.send('연결이 잘 되었어요 클라이언트님!');
    socket.emit('customEventName', "서버로부터 새로운 이벤트입니다!")
});

// 서버 열기 
http.listen(3000, ()=>{
    console.log('listening: 3000');
});
