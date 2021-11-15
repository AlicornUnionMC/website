export class Firework {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.ch = document.documentElement.clientHeight;
  }
  init() {
    this.createfires();
  }
  createfires() {
    for (let i = 1; i <= this.rannum(10, 20); i++) {
      this.fires = document.createElement("div");
      this.fires.style.cssText = `width:5px;height:5px;background:#d796f0;position:absolute;left:${this.x}px;top:${this.y}px;`;
      document.body.appendChild(this.fires);
      this.fireboom(this.fires);
    }
  }
  fireboom(obj) {
    let initx = this.x;
    let inity = this.y;
    let speedx = parseInt(
      (Math.random() > 0.5 ? "-" : "") + this.rannum(1, 15)
    );
    let speedy = parseInt(
      (Math.random() > 0.5 ? "-" : "") + this.rannum(1, 15)
    );
    obj.timer = setInterval(() => {
      if (!obj.lock) {
        obj.lock = true;
        initx += speedx;
        inity += speedy++;
        if (inity >= this.ch) {
          document.body.removeChild(obj);
          clearInterval(obj.timer);
          obj = null;
          return;
        }
        obj.style.left = initx + "px";
        obj.style.top = inity + "px";
        obj.lock = false;
      }
    }, 1000 / 60);
  }
  rannum(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
}
