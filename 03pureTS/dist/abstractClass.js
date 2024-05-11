"use strict";
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        //some complex calculation
        return 9;
    }
}
// const hc = new TakePhoto("test", "Test");
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Hey Sepia!");
    }
    //override getReelTime method
    getReelTime() {
        return 90;
    }
}
const hc = new Instagram("test", "Test", 20);
hc.getReelTime();
