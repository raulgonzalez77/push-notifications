self.addEventListener('push', function(event) {
    console.log('Received a push message', event);

    const data = event.data ? event.data.json() : {};
    const title = data.title || 'Message from Blinn College';
    const body = data.body || 'Registration is now open';
    const icon = data.icon || 'https://www.blinn.edu/_files/images/ico/favicon.ico';
    const tag = data.tag; // now always unique
    const extraData = data.extra || {};

    event.waitUntil(
        self.registration.showNotification(title, {
            body: body,
            icon: icon,
            tag: tag,
            data: extraData
        })
    );
});
