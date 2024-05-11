abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}

  abstract getSepia(): void;
  getReelTime(): number {
    //some complex calculation
    return 9;
  }
}

// const hc = new TakePhoto("test", "Test");

class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }

  getSepia(): void {
    console.log("Hey Sepia!");
  }

  //override getReelTime method
  getReelTime(): number {
    return 90;
  }
}

const hc = new Instagram("test", "Test", 20);
hc.getReelTime();
