export default class CounterService {
    constructor() {
        this.counter = 0;
    }

    up() {
        this.counter++;
    }

    down() {
        this.counter--;
    }


    get() {
        return this.counter;
    }

    toggle() {
        if(this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        } else {
            this.interval = setInterval(() => this.up(), 100);
        }
    }
}
