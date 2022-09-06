const button = document.querySelector('.btn');

button.addEventListener('click', e => {
    const x = e.clientX;
    const y = e.clientY;

    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;

    const xPosition = x - buttonLeft;
    const yPosition = y - buttonTop;

    const ripple = document.createElement('span');
    ripple.classList.add('ripple');

    ripple.style.left = `${xPosition}px`;
    ripple.style.top =`${yPosition}px`;

    button.appendChild(ripple);

    setTimeout( () => ripple.remove(), 500);

});