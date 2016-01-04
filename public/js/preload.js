var Client = Client || {};
//loading the game assets
Client.Preload = function(){};
 
Client.Preload.prototype = {
  preload: function() {
    //show loading screen
    this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'preloadbar');
    this.preloadBar.anchor.setTo(0.5);
 
    this.load.setPreloadSprite(this.preloadBar);
 
    //load game assets
    this.load.image('logo', 'assets/image/logo.png');
  },
  create: function() {
    var logo = this.add.sprite(this.world.centerX, this.world.centerY, 'logo');
    logo.anchor.setTo(0.5, 0.5);
    this.state.start('game');
  }
};