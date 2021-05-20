class Tir extends ObjetPhysique{
   constructor(scene, x, y){
      super(scene, x, y, "tir");
      scene.add.existing(this);
      scene.physics.add.existing(this);

      this.body.allowGravity=false;
      this.setDisplaySize(40,40);
      this.setBodySize(this.body.width,this.body.height);

      this.setVelocityX(300 * scene.player.sens);
      this.setBounce(1);
      this.setDepth(1000);
      scene.monstersContainer.iterate(monster=>{
         scene.physics.add.overlap(this, monster, function(){monster.Tmortlol()}, null, scene);
      })
   }
}
