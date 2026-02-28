function createRoom() {
    const name = document.getElementById('username').value;
    if (name === "") {
        alert("กรุณาใส่ชื่อก่อนครับ");
        return;
    }
    // ในระบบจริงตรงนี้ต้องสุ่มรหัสห้องจาก Server
    document.getElementById('display-room-code').innerText = "AB23";
    switchScreen('lobby-screen');
}

function joinRoom() {
    const code = document.getElementById('room-code-input').value;
    if (code === "") {
        alert("กรุณาใส่รหัสห้อง");
        return;
    }
    switchScreen('lobby-screen');
}

function switchScreen(screenId) {
    document.getElementById('home-screen').classList.add('hidden');
    document.getElementById('lobby-screen').classList.add('hidden');
    
    document.getElementById(screenId).classList.remove('hidden');
}

function startGame() {
    alert("กำลังเริ่มเกม...");
}
