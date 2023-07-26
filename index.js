class App {
    constructor(){
        this._initialize();
        this._render();
    }

    _initialize(){
        this._createLenis();
    }

    _createLenis(){
        this.lenis = new this.lenis({
            lerp: 0.1
        });
    }
    
    _render(){
        this.lenis.raf(time);
        requestAnimationFrame(this._render.bind(this))
    }
}

new App();