// Sample worker script

// Send ready message (again - sample implementation)
self.postMessage('READY')

// Sleep for 2 seconds
sleep(2000);

// Send completed message
self.postMessage('COMPLETED');

function sleep(milliseconds) {
  var startTime = new Date().getTime();
  var stopTime = startTime + milliseconds;

  while (stopTime >= new Date().getTime()) {}
}

