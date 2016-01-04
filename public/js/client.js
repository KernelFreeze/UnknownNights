window.onload = function() {
    Client = Client || {};
    width = $(window).width();
    height = $(window).height()*90/100;
    Client.game = new Phaser.Game(width, height, Phaser.AUTO, $("#canvas").get());
    Client.game.state.add('boot', Client.Boot);
    Client.game.state.add('preload', Client.Preload);
    Client.game.state.add('game', Client.Game);
    Client.game.state.start('boot');
};