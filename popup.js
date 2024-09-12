document.getElementById("save").addEventListener("click", function() {
    const party1 = document.getElementById("party1").value.trim();
    const party2 = document.getElementById("party2").value.trim();
  
    if (party1 && party2) {
      chrome.storage.local.get("collections", function(result) {
        let collections = result.collections || [];
  
        collections.push({ party1, party2 });
  
        chrome.storage.local.set({ collections: collections }, function() {
          console.log("Saved pair:", party1, party2);
          alert("Saved!");
        });
      });
    } else {
      alert("Please fill out both fields.");
    }
  });
  