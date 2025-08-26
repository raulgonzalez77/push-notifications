const webpush = require('web-push');

// VAPID keys should only be generated only once.
const vapidKeys = {
  publicKey:
    'BBZY7Q3KEtZArAAWMLi_qzWHbH4vAoqPpIXnRhmlUaw0PVs1Kt_2fgLhuaVI5i8MWASBKx3d6W6UoH2U3qChw9U',
  privateKey: 'CZtf_JUxmXkCKbzwaKedPPO9BFC99U2rk-GUYDbYAa8'
};

webpush.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/dloNXXys3Bg:APA91bEgg0TyJ6LWZtB-MryobcHA18Fzq3TNM1LQ-RwHyTpCbrGGf0AMi8SmjmfeaHsAhXKE9zSgoNGCR4PNn3UXKlChSjRqGDyGurr1qBiRfvEPrAJz3d08jc75xxWzMs14--KRFvrA","expirationTime":null,"keys":{"p256dh":"BBhBa3D6GSVI4fVLLLRcK4rkYjkzjwZxOP-_OFy9Lrm6h8mMBP3-N_GrJ-2cFOCRJ6BKuTWsxwq5L1L5CcdN3hI","auth":"hYwsO8Jnryz2bjmPomsGGg"}}

webpush.sendNotification(pushSubscription, 'Your Push Payload Text');