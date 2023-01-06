import Phaser from "phaser";

class MainScene extends Phaser.Scene{
  /**
   * preload
   */
  public preload() {
    
  }

  /**
   * create
   */
  public create() {
    
  }

  public update(_time: number, _delta: number): void {
      
  }
}

const game : Phaser.Game = new Phaser.Game({
  width: 400,
  height: 800,
  type: Phaser.WEBGL,
  scene: [MainScene],
})