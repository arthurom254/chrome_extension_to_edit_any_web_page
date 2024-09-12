chrome.storage.local.get("collections", function(result) {
    const collections = result.collections || [];
  
    if (collections.length > 0) {
      let bodyText = document.body.innerHTML;
  
      collections.forEach(({ party1, party2 }) => {
        const regex = new RegExp(party1, "g");
        bodyText = bodyText.replace(regex, party2);
      });
  
      document.body.innerHTML = bodyText;
    }
  });
  