
      const options = {
        body: "Registration is now open - 4",
        icon: "https://www.blinn.edu/_files/images/ico/favicon.ico", // Optional: path to an icon image
        tag: "unique-notification-id-4", // Optional: for grouping/replacing notifications
      };

self.addEventListener('push', () => {
  self.registration.showNotification('Hello world-4!', options);
});