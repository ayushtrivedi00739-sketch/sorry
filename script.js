const response = document.getElementById('response');
const forgiveBtn = document.getElementById('forgiveBtn');
const hugBtn = document.getElementById('hugBtn');

function showResponse(message) {
    response.textContent = message;
    response.classList.add('visible');
}

forgiveBtn.addEventListener('click', () => {
    showResponse('Yayyy! Thank You My Love ❤️🥹');
    forgiveBtn.textContent = 'Thank You Love 💖';
    createHearts(25);
});

hugBtn.addEventListener('click', () => {
    showResponse('Sending you a big virtual hug 🤗❤️');
    createHearts(12);
});

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';

    const emojis = ['❤️', '💖', '💕', '💗', '✨', '🌸'];
    heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.fontSize = `${18 + Math.random() * 22}px`;
    heart.style.animationDuration = `${5 + Math.random() * 4}s`;

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 9500);
}

function createHearts(count) {
    for (let index = 0; index < count; index += 1) {
        setTimeout(createHeart, index * 100);
    }
}

setInterval(createHeart, 700);
