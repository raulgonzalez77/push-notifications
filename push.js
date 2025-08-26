var push = require('web-push')

//let vapidkeys = push.generateVAPIDKeys();

//console.log(vapidkeys);

let vapidkeys = {
  publicKey: 'BCis9afWX-SRKt021KIJwH7M2I67P0dlDBEvIdaeRCRj6GbPMqwG0V9rR6XPmaPCDmOT6oVObmYLEMba3oW5sMU',
  privateKey: 'dTraF3I4r-hbZ0tE3CYVYFGoz1woSrN-O5XpPJNOI_c'
}

push.setVapidDetails('mailto:speedygonzales77@gmail.com', vapidkeys.privateKey, vapidkeys.privateKey)

let sub= {};

push.sendNotification(SubmitEvent, 'tet message')