var notificationCount = 0;

$(document).on('click', '#text_notification', function(){
  var notification = {
    type: "basic",
    title: "notification " + notificationCount,
    message: "Hello !",
    iconUrl: "/image/icon_128.png"
  }
  chrome.notifications.create("", notification, function(notificationId){
    console.log('notification created: ' + notificationId);
  });

  notificationCount += 1;
});