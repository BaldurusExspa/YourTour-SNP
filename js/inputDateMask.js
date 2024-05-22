const dateForInput = document.getElementById('datefor');
const dateUntilInput = document.getElementById('dateuntil');

dateForInput?.addEventListener('input', ({target}) => {
    const value = target.value.replaceAll(/\D/g, '');
    const matches = value.match(/(\d{0,2})(\d{0,2})(\d{0,4})/);
    
    target.value = (
        `${matches[1]}` + 
        `${!!matches[2] ? '.' : ''}` +
        `${matches[2]}` +
        `${!!matches[3] ? '.' : ''}` + 
        `${matches[3]}`
    )

    if (matches[1] >= 32) {
        target.value = null;
    } else if (matches[2] >= 13) {
        target.value = null;
    } else if (matches[3] >= 2025) {
        target.value = null;
    }

    if (!value || value.lengh <= 3) {
        target.value = '';
        return;
    }
})

dateUntilInput?.addEventListener('input', ({target}) => {
    const value = target.value.replaceAll(/\D/g, '');
    const matches = value.match(/(\d{0,2})(\d{0,2})(\d{0,4})/);
    
    target.value = (
        `${matches[1]}` + 
        `${!!matches[2] ? '.' : ''}` +
        `${matches[2]}` +
        `${!!matches[3] ? '.' : ''}` + 
        `${matches[3]}`
    )

    if (matches[1] >= 32) {
        target.value = null;
    } else if (matches[2] >= 13) {
        target.value = null;
    } else if (matches[3] >= 2025) {
        target.value = null;
    }

    if (!value || value.lengh <= 3) {
        target.value = '';
        return;
    }
})