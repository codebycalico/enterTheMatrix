class CharSymbol {
    constructor(x, y, speed, alpha, first) {
        this.x = x;
        this.y = y;
        this.value;
        this.speed = speed;
        this.alpha = alpha;
        this.first = first;
    }

    setToRandomSymbol() {
        // 96 Katakana character codes in Katana
        // takes one randomly and turns it into a string,
        // then sets to this.value
        // randomly will choose 0 or 1 as well
        this.value = String.fromCharCode(
            0x30A0 + round(random(0, 96))
        );
        if(random() < 0.1) {
            this.value = round(random(0, 1));
        }
    }

    // increment the y position according to the speed
    // to get rain
    rain() {
        if(this.y > height) {
            this.y = 0;
        } else {
            this.y += this.speed;
        }
        //this.y = (this.y > height) ? 0 : this.y += this.speed;
    }

    display() {
        if(this.first) {
            fill(220, 255, 220, 255);
        } else {
            fill(0, 255, 70, alpha);
        }
        text(this.value, this.x, this.y);
        this.rain();
        if(random() < 0.06) {
            this.setToRandomSymbol();
        }
    }
}