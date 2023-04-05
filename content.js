const overlay = document.createElement('div');
overlay.alt = "One Step Two";
overlay.classList.add('one-step-two__overlay');
overlay.innerHTML = `
    <div class="one-step-two__up">
        <svg width="32" height="16" viewBox="0 0 32 16">
            <polygon class="triangle" stroke-linejoin="round" fill="currentColor" stroke-width="100" points="16,0 0,16 32,16"></polygon>
        </svg>
    </div>
    <div class="one-step-two__down">
        <svg width="32" height="16" viewBox="0 0 32 16">
            <polygon class="triangle" stroke-linejoin="round" fill="currentColor" stroke-width="100" points="0,0 16,16 32,0"></polygon>
        </svg>
    </div>
`;
document.body.appendChild(overlay);

document.querySelector('.one-step-two__down').addEventListener('click', function(e) {
    document.documentElement.scrollTo({
        top: document.documentElement.offsetHeight,
        behavior: "smooth"
    });
});
document.querySelector('.one-step-two__up').addEventListener('click', function(e) {
    document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
