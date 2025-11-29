class UselessToggle {
    constructor() {
        this.toggle = document.getElementById('toggle');
        this.stickman = document.getElementById('stickman');
        this.counter = document.getElementById('counter');
        this.turnOffCount = 0;
        this.isActive = false;
        
        this.setupEventListeners();
    }
    
    setupEventListeners() {
        this.toggle.addEventListener('click', () => {
            if (!this.isActive) {
                this.turnOn();
            }
        });
    }
    
    turnOn() {
        this.isActive = true;
        this.toggle.classList.add('on');
        
        // Start stickman sequence after a short delay
        setTimeout(() => {
            this.activateStickman();
        }, 500);
    }
    
    activateStickman() {
        // Start walking animation
        this.stickman.classList.add('walking');
        
        // Move stickman to toggle
        this.stickman.style.left = '170px';
        
        // When stickman reaches toggle, turn it off
        setTimeout(() => {
            this.turnOff();
        }, 2000);
    }
    
    turnOff() {
        // Stop walking
        this.stickman.classList.remove('walking');
        this.stickman.classList.add('reaching');
        
        // Turn toggle off
        setTimeout(() => {
            this.toggle.classList.remove('on');
            
            // Update counter
            this.turnOffCount++;
            this.counter.textContent = this.turnOffCount;
            
            // Make stickman walk back
            setTimeout(() => {
                this.stickman.classList.remove('reaching');
                this.stickman.classList.add('walking');
                this.stickman.style.left = '-100px';
                
                // Reset after walking back
                setTimeout(() => {
                    this.stickman.classList.remove('walking');
                    this.isActive = false;
                }, 2000);
            }, 500);
        }, 500);
    }
}

// Initialize the useless toggle
new UselessToggle();