const toggle = document.getElementById('power-toggle');
const container = document.getElementById('main-container');
const statusText = document.getElementById('status-text');

// Đối tượng logic Optimizer
const Optimizer = {
    touch: 0x69,
    touchMultiplier: 0x20,
    directTouch: 0x37,
    touchHold: "_0xtoAssent",
    execute() {
        const ConfigurationMain = {
            touch: this.touch,
            touchMultiplier: this.touchMultiplier,
            directTouch: this.directTouch,
            toAssent: this.touchHold,
            target: "screenMain"
        };
        return ConfigurationMain;
    }
};

// Lắng nghe sự kiện bật/tắt
toggle.addEventListener('change', function() {
    if (this.checked) {
        // Cập nhật giao diện sang ONLINE
        container.classList.add('on-state');
        statusText.innerText = "Shoot Bot";
        
        // THỰC THI LOGIC: Chạy ngầm Optimizer
        const result = Optimizer.execute();
        
        // Ghi lại hoạt động vào Console hệ thống
        console.log("%c [Optimizer] ", "color: #00f2ff; font-weight: bold", "System Activated.");
        console.table(result);
    } else {
        // Cập nhật giao diện sang OFFLINE
        container.classList.remove('on-state');
        statusText.innerText = "Shoot Bot";
        
        console.log("[Optimizer] System suspended.");
    }
});
