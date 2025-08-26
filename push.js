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
const pushSubscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/cu_jAN_t9no:APA91bFSEOPRFBqIhPkrCpZwGx9h0dZR5e2B6VXhEPc8w0G5DWlWXmfKCEbNW8h2XTasDLjBQBLJx2CNeYw_ID_cQYmNF4E4H_NqyVnCMUUshwwrD51_Kaa6wXw-z2cY49r389DuIcvJ","expirationTime":null,"keys":{"p256dh":"BLImOXVYWQ1oPpuijQ_tEsFBo13M0KJW_dOTMMsa19vDWB75sedohXOgWlp2qFwMoxuxYPLer7F6A94D3kO9-Kg","auth":"ArCClvAEj_LJMTYe_n6U1w"}}