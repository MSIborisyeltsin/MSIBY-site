document.addEventListener("keydown", function(event) {
    const links = document.querySelectorAll(".list a");
    let activeIndex = Array.from(links).findIndex(link => link.classList.contains("active"));
  
    if (event.key === "ArrowDown")
    {
      event.preventDefault();
      if (activeIndex !== -1 && activeIndex < links.length - 1)
      {
        links[activeIndex].classList.remove("active");
        links[activeIndex + 1].classList.add("active");
      }
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      if (activeIndex !== -1 && activeIndex > 0)
      {
        links[activeIndex].classList.remove("active");
        links[activeIndex - 1].classList.add("active");
      }
    }
    if (event.key === "Enter") {
      event.preventDefault();
      if (activeIndex !== -1) {
          window.location = links[activeIndex].getAttribute("href");
      }
  }
});
