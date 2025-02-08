// Function to create confetti elements
function createConfetti() {
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        document.body.appendChild(confetti);
        
        // Remove the confetti after 5 seconds
        setTimeout(() => confetti.remove(), 5000);
    }
}

// Function to play the audio and trigger visual effects
function playMusic() {
    // Get the audio element by its id
    const audio = document.getElementById('birthdaySong');
    
    // Attempt to play the audio (returns a Promise in modern browsers)
    audio.play().then(() => {
        console.log("Audio playback started successfully.");
    }).catch((error) => {
        console.error("Error playing audio:", error);
    });
    
    // Trigger the confetti effect
    createConfetti();
    
    // Create floating hearts every 300ms
    setInterval(() => {
        const heart = document.createElement('div');
        heart.innerHTML = '💖';
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.fontSize = (Math.random() * 30 + 20) + 'px';
        // Apply the floatUp animation (ensure it matches the keyframes defined in CSS)
        heart.style.animation = `floatUp ${Math.random() * 3 + 2}s linear`;
        document.body.appendChild(heart);
        
        // Remove the heart after 5 seconds
        setTimeout(() => heart.remove(), 5000);
    }, 300);
}

// When the document is loaded, trigger an initial confetti burst
document.addEventListener('DOMContentLoaded', createConfetti);
