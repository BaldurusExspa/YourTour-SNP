const tabsButtons = document.querySelectorAll('.tab-btn');

tabsButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const prevActiveButton = document.querySelector('.tab-btn.button-choosed');
    const ActivePText = document.querySelector('.p.button-choosed')
    
    if (prevActiveButton) {
      prevActiveButton.classList.remove('button-choosed');
      ActivePText.classList.remove('button-choosed');
    }
    btn.classList.add('button-choosed')
    ActivePText.classList.add('button-choosed');
  });
})

// const tabsButtons = document.querySelectorAll('.tab-btn');

// tabsButtons.forEach(btn => {
//   btn.addEventListener('click', () => {
//     const prevActiveButton = document.querySelector('.tab-btn.button-choosed');
    
//     if (prevActiveButton) {
//       prevActiveButton.classList.remove('button-choosed');
//     }
//     btn.classList.add('button-choosed');
//   });
// })