document.querySelectorAll('.list a').forEach(item => {
    /*
    item.addEventListener('click', function() {
        var id = this.getAttribute('href').substring(1);
        var content = document.getElementById(id);
        
        // Hide all text blocks
        document.querySelectorAll('.content-display > div').forEach(block => {
            block.classList.add('hidden');
        });

        // Show only the active text block
        content.classList.remove('hidden');
    });
    */

    item.addEventListener('keydown', function(event) {
        if(event.key === "Enter")
        {
            event.preventDefault();
            var id = this.getAttribute('href').substring(1);
            var content = document.getElementById(id);

            // Hide all text blocks
            document.querySelectorAll('.content-display > div').forEach(block => {
                block.classList.add('hidden');
            });

            // Show only the active text block
            content.classList.remove('hidden');
        }
    });
});
