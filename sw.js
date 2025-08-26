self.addEventListener('push', () => {
  self.registration.showNotification('Hello world-4!', options);
});