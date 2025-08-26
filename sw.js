self.addEventListener('push', () => {
  self.registration.showNotification('Hello world-3!', options);
});