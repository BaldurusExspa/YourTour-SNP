const phoneInput = document.getElementById('phone');

phoneInput?.addEventListener('input', ({target}) => {
    const value = target.value.replaceAll(/\D/g, '');
    const matches = value.match(/\d{0,1}(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
    
    target.value = (
        '+ 7' +
        `${!!matches[1] ? ' (' : ''}` +
        `${matches[1]}` + 
        `${!!matches[2] ? ') ' : ''}` +
        `${matches[2]}` +
        `${!!matches[3] ? '-' : ''}` + 
        `${matches[3]}` +
        `${!!matches[4] ? '-' : ''}` +
        `${matches[4]}`
    )

    if (!value || value.lengh <= 3) {
        target.value = '';
        return;
    }
})