const links = document.querySelectorAll('a[href^="#"]');
const infoBlock = document.getElementById("infoBlock");
let index = 0;

setInterval(() => {
  const activeLink = links[index];
  
  if (activeLink.classList.contains('active')) {
    switch(activeLink.innerText)
    {
      case '▶ Paragraph 1':
        infoBlock.innerText = "This is the text of paragraph 1";
        break;
      case '▶ Paragraph 2':
        infoBlock.innerText = "This is the text of paragraph 2";
        break;
      case '▶ Paragraph 3':
        infoBlock.innerText = "This is the text of paragraph 3";
        break;
      case '▶ Paragraph 4':
        infoBlock.innerText = "This is the text of paragraph 4";
        break;
      case '▶ Paragraph 5':
        infoBlock.innerText = "This is the text of paragraph 5";
        break;
    }
  }
  index = (index + 1) % links.length;
}, 10);
