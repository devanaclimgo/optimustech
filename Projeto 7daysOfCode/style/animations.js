const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('procurando-animation');
    } else {
      entry.target.classList.remove('procurando-animation');
    }
  });
});

const section = document.querySelector('.procurando');
observer.observe(section); 