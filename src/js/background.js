chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('html/window.html', {
    'bounds': {
      'width': 500,
      'height': 400
    }
  });
});
