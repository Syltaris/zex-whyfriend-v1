import {SimpleChat} from 'meteor/cesarve:simple-chat/config'

SimpleChat.configure({
    texts: {
        loadMore: 'Load More',
        placeholder: 'Type message ...',
        button: 'send',
        join: 'Join to',
        left: 'Left the',
        room: 'room at',
    },
    limit: 5,
    beep: true,
    showViewed: false,
    showReceived: false,
    showJoined: false,
    // publishChats: function(roomId, limit){ //server
    //    //here the context is the same for a Publications, that mean you have access to this.userId who are asking for subscribe.
    //    // for example
    //    return isLoggedAndHasAccessToSeeMessage(this.userId)
    // },
    // allow: function(message, roomId, username, avatar, name){
    //    //here the context is the same for a Methods, thats mean you hace access to this.userId also
    //    // for example
    //    return isLoggedAndHasAccessSendMessages(this.userId)
    //     return true
    // },
    // onNewMessage:function(msg){  //both
    // },
    // onReceiveMessage:function(id, message, room){ //server
    //
    // },
    // onJoin:function(roomId, username, name,date){  //server
    // },
    // onLeft:function(roomId, username, name,date) { //server
    // }
});
