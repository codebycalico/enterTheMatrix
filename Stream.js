class Stream {
    constructor(size, capture) {
        this.symbols = [];
        this.totalSymbols = round(random(5, 30));
        this.speed = random(2, 10.5);
        this.symbolSize = size;
        this.capture = capture
    }

    generateSymbols(x, y) {
        var y = round(random(-500, 0));
        var x = round(random(0, width));
        let first = round(random(0,4)) == 1;

        /*
        for(var i = 0; i <= this.totalSymbols; i++) {
            // fade towards the end
            let alpha = round( (i / this.totalSymbols) * 255);
            alpha = map(alpha, 0, 255, 255, 0);
            let symbol = new CharSymbol(x, y, this.speed, alpha, first);
            symbol.setToRandomSymbol();
            this.symbols.push(symbol);
            y -= this.symbolSize;
            first = false;
        }
            */
        
        for(let i = 0; i <= this.totalSymbols; i++) {
            let pixelColor = this.capture.get(x, y);
            
            let r = pixelColor[0];
            let g = pixelColor[1];
            let b = pixelColor[2];

            let alpha = (r + g + b) / 3;

            console.log(alpha);

            let symbol = new CharSymbol(x, y, this.speed, alpha, first);
            symbol.setToRandomSymbol();
            this.symbols.push(symbol);
            y -= this.symbolSize;
            first = false;
        }
    }

    render() {
        for(var i = 0; i < this.totalSymbols; i++) {
            this.symbols[i].display();
        }
    }
}