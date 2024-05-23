const tabsButtons = document.querySelectorAll('.tab-btn');

tabsButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const prevActiveButton = document.querySelector('.tab-btn.button-choosed');
    
    if (prevActiveButton) {
      prevActiveButton.classList.remove('button-choosed');
    }
    btn.classList.add('button-choosed');
  });
})