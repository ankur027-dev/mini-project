function scrollLeft() {
    const abes = document.querySelector('.photo-scroll');
    const currentScroll = scrollContainer.scrollLeft;
    abes.scrollTo({
      left: currentScroll - 300,  // Scroll by 300px to the left
      behavior: 'smooth'
    });
  }
  
  function scrollRight() {
    const abes = document.querySelector('.photo-scroll');
    const currentScroll = scrollContainer.scrollLeft;
    abes.scrollTo({
      left: currentScroll + 300,  // Scroll by 300px to the right
      behavior: 'smooth'
    });
  }