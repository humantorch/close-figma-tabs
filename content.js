(function () {
  setTimeout(function () {
    chrome.runtime.sendMessage({}, function () { });
  }, 1000);
})();
