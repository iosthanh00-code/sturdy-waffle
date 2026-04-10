const toggle = document.getElementById('power-toggle');
const container = document.getElementById('main-container');
const statusText = document.getElementById('status-text');

const Optimizer = {
    touch: 0x69,
    touchMultiplier: 0x20,
    directTouch: 0x37,
    touchHold: "_0xtoAssent",
    touchHold: 0x0A,
    execute() {
        const ConfigurationMain = {
            touch: this.touch,
            touchMultiplier: this.touchMultiplier,
            directTouch: this.directTouch,
            toAssent: this.touchHold,
            touchHold: this.touchHold,
            target: "screenMain"
        };
        return ConfigurationMain;
    }
};

toggle.addEventListener('change', function() {
    if (this.checked) {

        container.classList.add('on-state');
        statusText.innerText = "Shoot Bot";
        
        const result = Optimizer.execute();
        
        console.log("%c [Optimizer] ", "color: #00f2ff; font-weight: bold", "System Activated.");
        console.table(result);
    } else {
        container.classList.remove('on-state');
        statusText.innerText = "Shoot Bot";
        
        console.log("[Optimizer] System suspended.");
    }
});
