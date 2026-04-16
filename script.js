const toggle = document.getElementById('power-toggle');
const container = document.getElementById('main-container');
const statusText = document.getElementById('status-text');

const Optimizer = {
    touch: "_0xtoAssent",
    touch: 0x23,
    touchMultiplier: "_0xtoAssent",
    touchMultiplier: 0x4D,
    ditectTouch: "_0xtoAssent",
    directTouch: 0x46,
    touchHold: "_0xtoAssent",
    touchHold: 0x37,
    execute() {
        const ConfigurationMain = {
            toAssent: this.touch,
            touch: this.touch,
            toAssent: this.touchMultiplier,
            touchMultiplier: this.touchMultiplier,
            toAssent: this.directTouch,
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
        
        const result = 'Com.dts.freefireth'.app();
        
        console.log("%c [Optimizer] ", "color: #00f2ff; font-weight: bold", "System Activated.");
        console.table(result);
    } else {
        container.classList.remove('on-state');
        statusText.innerText = "Shoot Bot";
        
        console.log("[Optimizer] System suspended.");
    }
});
