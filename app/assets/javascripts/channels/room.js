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
    console.log("recieve data :  ");
    var player=document.getElementById('my-video_html5_api');
    if(data['body']=='play'){
      player.play();
    }else if(data=='pause'){
      player.pause();
    }
  }
});
