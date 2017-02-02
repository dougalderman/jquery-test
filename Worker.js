self.addEventListener('message', function(e) {
  // receive messages from page
  var message = e.data;

  // send message to page
  // The simple logic just echoes the string
  // back to the caller.
  self.postMessage(e.data + ' - Processed!');
});

// There is no architecture for events like onReady
// However, you can implement one on your own relatively easily

self.postMessage('READY');
