const swapThemeBtn = document.querySelector('.swapper');
const sunMoonContainer = document.querySelector('.sun-moon-container');
swapThemeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const currentRotation = parseInt(getComputedStyle(sunMoonContainer).getPropertyValue('--rotation'));
    sunMoonContainer.style.setProperty('--rotation', currentRotation + 180);
})