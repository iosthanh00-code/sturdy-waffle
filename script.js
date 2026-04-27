// --- CẤU HÌNH ---
const ROBOT_SERVICE_UUID = '54a97865d6c2ed58d99e63ad38499173734fa287'; 

// Quản lý Chế độ Nhà phát triển
function toggleDev() {
    const container = document.getElementById('app-container');
    const btn = document.getElementById('dev-btn');
    
    container.classList.toggle('dev-active');
    const isActive = container.classList.contains('dev-active');
    
    btn.innerText = isActive ? "[ Dev Mode: On ]" : "[ Dev Mode: Off ]";
    btn.classList.toggle('active', isActive);
    addLog("Dev Mode " + (isActive ? "Enabled" : "Disabled"));
}

// Ghi nhật ký vào console ảo
function addLog(msg) {
    const log = document.getElementById('console-log');
    const time = new Date().toLocaleTimeString().split(' ')[0];
    log.innerHTML = `[${time}] ${msg}<br>` + log.innerHTML;
}

// Kết nối Bluetooth
async function connectRobot() {
    if (!navigator.bluetooth) {
        addLog("Error: Browser không hỗ trợ Web BLE. Dùng app Bluefy!");
        return;
    }

    try {
        addLog("Đang tìm UUID: " + ROBOT_SERVICE_UUID);
        const device = await navigator.bluetooth.requestDevice({
            filters: [{ services: [ROBOT_SERVICE_UUID] }]
        });

        addLog("Đang liên kết: " + device.name);
        const server = await device.gatt.connect();
        
        const statusDot = document.getElementById('status-dot');
        const statusText = document.getElementById('status-text');
        
        statusDot.classList.add('online');
        statusText.innerText = "Linked: " + device.name;
        statusText.style.color = "var(--success-green)";
        addLog("Kết nối thành công!");
    } catch (err) {
        addLog("Lỗi: " + err.message);
    }
}

// Xử lý rung theo Preset
function runHaptic(type, btn) {
    const presets = { light: 100, medium: 450, high: 1200 };
    
    // Cập nhật UI nút
    document.querySelectorAll('.btn-level').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    // Kích hoạt rung trên điện thoại
    if (navigator.vibrate) {
        navigator.vibrate(presets[type]);
    }
    addLog("Trigger: " + type.toUpperCase());
}

// Cập nhật rung theo Slider
function updateHaptic(mode, val) {
    const factor = (val / 100).toFixed(2);
    
    if (mode === 'hold') {
        document.getElementById('hold-txt').innerText = factor;
        if (navigator.vibrate) navigator.vibrate(factor * 5);
    } else {
        document.getElementById('seq-txt').innerText = factor;
        if (navigator.vibrate) navigator.vibrate([factor * 5, 40, factor * 5]);
    }
}
