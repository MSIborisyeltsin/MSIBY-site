const links = document.querySelectorAll('a[href^="#"]');
let index = 0;
let messageCount = 0;

setInterval(() => {
  const activeLink = links[index];
  
  if (activeLink.classList.contains('active')) {
    console.log(`Active link: ${activeLink.innerText}`);
    messageCount++;
    
    if (messageCount > 10) {
      console.clear();
      messageCount = 0;
    }
  }
  
  index = (index + 1) % links.length;
}, 10);
