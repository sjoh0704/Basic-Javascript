const socketIo =require('socket.io');

const io = socketIo(3000, {
    // 다른 도메인에서 연결할 때 cors에러 발생 
    cors:{
        origin: '*', // 모든 호스트를 허용한다. 
        method: ["GET", "POST"]  // get과 post만 허용한다. 
    }
}); // 3000번 포트로 socketio 서버 열기

