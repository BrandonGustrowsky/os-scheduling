
export class Process {
    constructor(name, length, untilContextSwitch, isExecuting) {
        this.name = name
        this.length = length
        this.untilContextSwitch = untilContextSwitch
        this.isExecuting = isExecuting
        this.timeLeft = length
        this.RGB = {
            red: this.generateRGB(),
            green: this.generateRGB(),
            blue: this.generateRGB()
        }
    }

    generateRGB() {
        return Math.floor(Math.random() * 128) + 128;
    }
}