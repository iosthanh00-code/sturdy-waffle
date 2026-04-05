const toggle = document.getElementById('power-toggle');
const container = document.getElementById('main-container');
const statusText = document.getElementById('status-text');

// Đối tượng logic iPhoneOptimizer
const iPhoneOptimizer = {
    touch: 0x69,
    touchMultiplier: 0xF,
    directTouch: 0x33,
    execute() {
        const config = {
            sensitivity: this.touch,
            boost: this.touchMultiplier,
            directTouch: this.directTouch,
            target: "screenMain"
        };
        return config;
    }
};

// Lắng nghe sự kiện bật/tắt
toggle.addEventListener('change', function() {
    if (this.checked) {
        // Cập nhật giao diện sang ONLINE
        container.classList.add('on-state');
        statusText.innerText = "Shoot Bot";
        
        // THỰC THI LOGIC: Chạy ngầm iPhoneOptimizer
        const result = iPhoneOptimizer.execute();
        
        // Ghi lại hoạt động vào Console hệ thống
        console.log("%c [iPhoneOptimizer] ", "color: #00f2ff; font-weight: bold", "System Activated.");
        console.table(result);
    } else {
        // Cập nhật giao diện sang OFFLINE
        container.classList.remove('on-state');
        statusText.innerText = "Shoot Bot";
        
        console.log("[iPhoneOptimizer] System suspended.");
    }
});
