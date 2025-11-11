const webpush = require('web-push');

// Your existing VAPID keys
const vapidKeys = {
  publicKey: 'BCis9afWX-SRKt021KIJwH7M2I67P0dlDBEvIdaeRCRj6GbPMqwG0V9rR6XPmaPCDmOT6oVObmYLEMba3oW5sMU',
  privateKey: 'dTraF3I4r-hbZ0tE3CYVYFGoz1woSrN-O5XpPJNOI_c'
};

webpush.setVapidDetails(
  'mailto:speedygonzales77@gmail.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is your PushSubscription object from the browser
const pushSubscription = {
  endpoint: "https://fcm.googleapis.com/fcm/send/cYDLkqGR37o:APA91bFTuxi8VDJqE0eeJzx1rsX9vU5ec9RDKLWuj-_BQ3z7qxjFOPM4UamBgbqwM9umEwsdO_v2I3qegvQahGRl3QitfxBKNxDzx2TXGKSrkGspamusLOSYB6DURZJ0897XziZVNeHL",
  expirationTime: null,
  keys: {
    p256dh: "BE4Q7DvpY1relkcwc6JrfHsayxIskzJWfWh8N1sBt8wnlHtZJ3OICjhIrX3D0kGDcpbFGSjAXt_NlaolLHA2Dfo",
    auth: "uN8d5UDYcVIINzbvEH6qwA"
  }
};

// The payload you want to send
const payload = JSON.stringify({
  title: 'Message from Blinn College',
  body: 'Registration is now open',
  tag: 'notification-' + Date.now(),  // unique every time
  icon: 'https://www.blinn.edu/_files/images/ico/favicon.ico',
  requireInteraction: true,
});



// Send the push notification
webpush.sendNotification(pushSubscription, payload)
  .then(response => {
    console.log('Push sent successfully!', response.statusCode);
  })
  .catch(err => {
    console.error('Error sending push:', err);
  });
