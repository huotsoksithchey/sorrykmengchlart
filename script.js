document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const initialScreen = document.querySelector('.initial-screen');
    const surpriseContainer = document.querySelector('.surprise-container');
    const floatingHearts = document.querySelector('.floating-hearts');
    const fallingPetals = document.querySelector('.falling-petals');
    const romanticSound = document.getElementById('romanticSound');
    
    // Click handler for the surprise
    body.addEventListener('click', function() {
        // Hide initial message
        initialScreen.style.display = 'none';
        
        // Show surprise
        surpriseContainer.classList.remove('hidden');
        
        // Play sound
        romanticSound.play();
        
        // Create floating hearts
        createHearts();
        
        // Create falling petals
        createFallingPetals();
    });
    
    function createHearts() {
        // Create initial burst of hearts
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.classList.add('heart');
                heart.innerHTML = '❤️';
                
                // Random properties
                const size = Math.random() * 30 + 20;
                const left = Math.random() * 100;
                const delay = Math.random() * 2;
                const duration = Math.random() * 3 + 2;
                const color = `hsl(${Math.random() * 60 + 330}, 100%, 70%)`;
                
                heart.style.fontSize = `${size}px`;
                heart.style.left = `${left}vw`;
                heart.style.bottom = `-50px`;
                heart.style.animationDelay = `${delay}s`;
                heart.style.animationDuration = `${duration}s`;
                heart.style.color = color;
                heart.style.opacity = Math.random() * 0.5 + 0.5;
                
                floatingHearts.appendChild(heart);
                
                // Remove heart after animation
                setTimeout(() => {
                    heart.remove();
                }, duration * 1000);
            }, i * 200);
        }
        
        // Continuous hearts
        setInterval(() => {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.innerHTML = '❤️';
            
            const size = Math.random() * 20 + 10;
            const left = Math.random() * 100;
            const duration = Math.random() * 5 + 5;
            const color = `hsl(${Math.random() * 60 + 330}, 100%, 80%)`;
            
            heart.style.fontSize = `${size}px`;
            heart.style.left = `${left}vw`;
            heart.style.bottom = `-50px`;
            heart.style.animationDuration = `${duration}s`;
            heart.style.color = color;
            heart.style.opacity = Math.random() * 0.3 + 0.2;
            
            floatingHearts.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, duration * 1000);
        }, 300);
    }
    
    function createFallingPetals() {
        // Create initial petals
        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                createPetal();
            }, i * 100);
        }
        
        // Continuous petals
        setInterval(createPetal, 200);
    }
    
    function createPetal() {
        const petal = document.createElement('div');
        petal.classList.add('falling-petal');
        
        // Random properties
        const size = Math.random() * 20 + 10;
        const left = Math.random() * 100;
        const duration = Math.random() * 5 + 5;
        const delay = Math.random() * 2;
        
        petal.style.width = `${size}px`;
        petal.style.height = `${size}px`;
        petal.style.left = `${left}vw`;
        petal.style.top = `-50px`;
        petal.style.animationDuration = `${duration}s`;
        petal.style.animationDelay = `${delay}s`;
        petal.style.opacity = Math.random() * 0.6 + 0.4;
        
        fallingPetals.appendChild(petal);
        
        setTimeout(() => {
            petal.remove();
        }, (duration + delay) * 1000);
    }
});