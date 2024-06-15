document.addEventListener("keypress", function(event) {
    if (event.key === "Enter" || event.keyCode === 13) {
      var activeLink = document.querySelector('.list a.active');
      if (activeLink) {
        var id = activeLink.getAttribute('href').substring(1);
        var content = document.getElementById(id);
        
        // Hide all text blocks
        document.querySelectorAll('.content-display > div').forEach(block => {
          block.classList.add('hidden');
        });
  
        // Show only the active text block
        content.classList.remove('hidden');
      }
    }
});
