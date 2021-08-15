//socketio 사용하기 

// 패키지 설치: npm i socket.io -S  

const socketIo =require('socket.io');

const io = socketIo(3000, {
    // 다른 도메인에서 연결할 때 cors에러 발생 
    cors:{
        origin: '*', // 모든 호스트를 허용한다. 
        method: ["GET", "POST"]  // get과 post만 허용한다. 
    }
}); // 3000번 포트로 socketio 서버 열기

// 연결되었을 때 콜백함수를 실행
io.on('connection', (socket) => {
    // 연결이 될때마다 소켓이 하나씩 할당된다. 

    console.log('클라이언트와 연결이 되었습니다.');    //클라이언트는 서버로 계속 연결을 요청한다. 

    //연결된 소켓을 통해 메시지 보내기 
    socket.send('연결이 잘 되었어요 클라이언트님!');
    // send는 항상 message event handler로 가ㄴ다.

    socket.emit('customEventName', "새로운 이벤트입니다!")


})