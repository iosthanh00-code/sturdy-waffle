const toggle = document.getElementById('power-toggle');
const container = document.getElementById('main-container');
const statusText = document.getElementById('status-text');

// Đối tượng logic iPhoneOptimizer
const iPhoneOptimizer = {
    touch: 0x64,
    multiplier: 0x8,
    execute() {
        const config = {
            sensitivity: this.touch,
            boost: this.multiplier,
            target: "screen_Main"
        };
        return config;
    }
};

// Lắng nghe sự kiện bật/tắt
toggle.addEventListener('change', function() {
    if (this.checked) {
        // Cập nhật giao diện sang ONLINE
        container.classList.add('on-state');
        statusText.innerText = "ONLINE";
        
        // THỰC THI LOGIC: Chạy ngầm iPhoneOptimizer
        const result = iPhoneOptimizer.execute();
        
        // Ghi lại hoạt động vào Console hệ thống
        console.log("%c [iPhoneOptimizer] ", "color: #00f2ff; font-weight: bold", "Optimization executed successfully.");
        console.table(result);
    } else {
        // Cập nhật giao diện sang OFFLINE
        container.classList.remove('on-state');
        statusText.innerText = "OFFLINE";
        
        console.log("[iPhoneOptimizer] System suspended.");
    }
});
