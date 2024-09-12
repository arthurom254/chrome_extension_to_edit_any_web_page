chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.local.set({ collections: [] }, function () {
    console.log("Initialized collections.");
  });
});
