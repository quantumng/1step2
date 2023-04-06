const overlay = document.createElement('div');
overlay.alt = "Scroll2";
overlay.classList.add('one-step-two__overlay');
overlay.innerHTML = `
    <svg class="one-step-two__up" width="32" height="16" viewBox="0 0 32 16" alt="scroll up">
        <polygon class="triangle" stroke-linejoin="round" fill="currentColor" stroke-width="100" points="16,0 0,16 32,16"></polygon>
    </svg>
    <svg class="one-step-two__down" width="32" height="16" viewBox="0 0 32 16" alt="scroll down">
        <polygon class="triangle" stroke-linejoin="round" fill="currentColor" stroke-width="100" points="0,0 16,16 32,0"></polygon>
    </svg>
`;
document.body.appendChild(overlay);

document.querySelector('.one-step-two__up').addEventListener('click', function() {
    document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

document.querySelector('.one-step-two__down').addEventListener('click', function() {
    document.documentElement.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
});

