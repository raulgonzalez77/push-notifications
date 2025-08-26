const webpush = require('web-push');

// VAPID keys should only be generated only once.
const vapidKeys = {
publicKey: 'BCis9afWX-SRKt021KIJwH7M2I67P0dlDBEvIdaeRCRj6GbPMqwG0V9rR6XPmaPCDmOT6oVObmYLEMba3oW5sMU',
  privateKey: 'dTraF3I4r-hbZ0tE3CYVYFGoz1woSrN-O5XpPJNOI_c'
};

webpush.setVapidDetails(
  'mailto:speedygonzales77@gmail.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/dqFSqmvGXL0:APA91bH6iietDxE81nNbE2xgnhvEZ7bS-jbivplUz4u5U47lGjJvZRAI9yZ-DOVK3xcec43GVnKmQCAqFxvmIlORhYg50ZF_Vb71E8TJc_xCRchbz6_38xz1bQoOZDLC8Yj-YeBIeAJU","expirationTime":null,"keys":{"p256dh":"BCUd64YHVdavCqKqMVqjc3dd68Kud_7s_T71YRilx1p4iFc2UR693kDMakyxl-pteYR2SvfbnSp_Xk8JdlniHOs","auth":"UPjhaZENZ8vbVx1Ewq6CrA"}}