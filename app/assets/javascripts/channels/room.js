var player=videojs('my-video',
  {
    "controls": true,   
    controlBar: {
        playToggle: false,
        captionsButton: false,
        chaptersButton: false,            
        subtitlesButton: false,
        //remainingTimeDisplay: false,
        //progressControl: false,
        //fullscreenToggle: false,
        playbackRateMenuButton: false,
        volumeMenuButton:false,
    },
    preload:"auto",
	width:"640",
	height:"264",
  autoplay: false,
  muted:true ,
  autoplay:false,
    //fluid: true
  },
  function () {
    // // Extend default //
    this.play();
    this.pause();
    console.log('视频可以播放了',this);
  }
);

App.player=player;
var clicked=false;
App.room = App.cable.subscriptions.create({channel: "RoomChannel",room_id: $("#room_id").val()}, {
  connected: function() {
    // Called when the subscription is ready for use on the server
    console.log("connect to room"+$("#room_id").val())
  },

  disconnected: function() {
    // Called when the subscription has been terminated by the server
    console.log("leave room"+$("#room_id").val())
  },

  received: function(data) {
    // Called when there's incoming data on the websocket for this channel
    console.log("recieve data");
    console.log(data);
    var player=App.player;
    if(data['body']=='play'){
      player.currentTime(parseFloat(data['time']));
      player.play();
    }else if(data['body']=='pause'){
      player.currentTime(parseFloat(data['time']));
      player.pause();
    }else if(data['body']=='sync'){
      player.currentTime(parseFloat(data['time']));
      //player.pause();
    }
  }
});

var button = videojs.getComponent('Button');
var syncButton = videojs.extend(button, {
    constructor: function() {
      button.apply(this, arguments);
      this.controlText("Sync");
      this.addClass('vjs-icon-spinner');
    },
    handleClick: function() {
      console.log("时间同步");
      App.room.send({body:'sync',time:this.player_.currentTime()});
    }
});
var my_play_toggle=videojs.extend(videojs.getComponent('PlayToggle'),{
    handleClick: function(event) {  
      if (this.player_.paused()) {
        
          App.room.send({body:'play',time:this.player_.currentTime()});
      
               
      } else {
        App.room.send({body:'pause',time:this.player_.currentTime()})
      }
    }
}
);

var my_progress_bar=videojs.extend(videojs.getComponent('PlayProgressBar'),{
  update(seekBarRect, seekBarPoint) {
    const timeTooltip = this.getChild('timeTooltip');
    
    if (!timeTooltip) {
      return;
    }
     
    const time = (this.player_.scrubbing()) ?
    this.player_.getCache().currentTime :
       this.player_.currentTime();
    if (this.player_.paused()) {
      App.room.send({body:'pause',time:this.player_.currentTime()});       
    } else {
      App.room.send({body:'play',time:this.player_.currentTime()})
    } 
    //timeTooltip.updateTime(seekBarRect, seekBarPoint, time);
  }
}

);

videojs.registerComponent('syncButton', syncButton);
player.getChild('controlBar').addChild('syncButton', {},0);

videojs.registerComponent('myplaytoggle', my_play_toggle);
player.getChild('controlBar').addChild('myplaytoggle', {},0);

//videojs.registerComponent('myprogressbar',my_progress_bar);
//player.getChild('controlBar').addChild('myprogressbar',{},3)