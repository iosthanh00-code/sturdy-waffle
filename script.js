// Khai báo các phần tử DOM
const toggle = document.getElementById('power-toggle');
const container = document.getElementById('main-container');
const statusText = document.getElementById('status-text');
const protocolId = document.getElementById('protocol-id');

// Đối tượng Optimizer xử lý logic hệ thống
const iPhoneOptimizer = {
    touch: 0x64,
    multiplier: 0x8,
    execute() {
        const config = {
            sensitivity: this.touch,
            boost: this.multiplier,
            target: "screen_bottom"
        };
        return config;
    }
};

// Lắng nghe sự kiện thay đổi nút gạt
toggle.addEventListener('change', function() {
    if (this.checked) {
        // Kích hoạt trạng thái ONLINE
        container.classList.add('on-state');
        statusText.innerText = "ONLINE";
        
        // Thực thi Source: Chạy optimizer
        const result = iPhoneOptimizer.execute();
        protocolId.innerText = "Active: " + result.sensitivity + "s";
        
        console.log("Core System: Online", result);
    } else {
        // Trở về trạng thái OFFLINE
        container.classList.remove('on-state');
        statusText.innerText = "OFFLINE";
        protocolId.innerText = "NULL";
        
        console.log("Core System: Shutdown");
    }
});
