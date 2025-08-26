var push = require('web-push')

//let vapidkeys = push.generateVAPIDKeys();

//console.log(vapidkeys);

let vapidkeys = {
  publicKey: 'BCis9afWX-SRKt021KIJwH7M2I67P0dlDBEvIdaeRCRj6GbPMqwG0V9rR6XPmaPCDmOT6oVObmYLEMba3oW5sMU',
  privateKey: 'dTraF3I4r-hbZ0tE3CYVYFGoz1woSrN-O5XpPJNOI_c'
}

push.setVapidDetails('mailto:speedygonzales77@gmail.com', vapidkeys.privateKey, vapidkeys.privateKey)

let sub= {
  endpoint: 'https://fcm.googleapis.com/fcm/send/dloNXXys3Bg:APA91bEgg0TyJ6LWZtB-MryobcHA18Fzq3TNM1LQ-RwHyTpCbrGGf0AMi8SmjmfeaHsAhXKE9zSgoNGCR4PNn3UXKlChSjRqGDyGurr1qBiRfvEPrAJz3d08jc75xxWzMs14--KRFvrA',
  expirationTime: null,
  keys: {
    p256dh: 'BBhBa3D6GSVI4fVLLLRcK4rkYjkzjwZxOP-_OFy9Lrm6h8mMBP3-N_GrJ-2cFOCRJ6BKuTWsxwq5L1L5CcdN3hI',
    auth: 'hYwsO8Jnryz2bjmPomsGGg'
  }
}

push.sendNotification(SubmitEvent, 'tet message')