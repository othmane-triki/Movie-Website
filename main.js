const arrows = document.querySelectorAll('.arrow');
const movieLists = document.querySelectorAll('.movie-list');
const toggle = document.querySelector('.toggle');
const toggleBall = document.querySelector('.toggle-ball');
const body = document.body;

// Track the current position for each movie list
let currentPositions = new Array(movieLists.length).fill(0);

// Movie list scrolling functionality
arrows.forEach((arrow, i) => {
    arrow.addEventListener('click', () => {
        const movieListWidth = movieLists[i].scrollWidth;
        const containerWidth = movieLists[i].parentElement.offsetWidth;
        const maxScroll = -(movieListWidth - containerWidth);
        
        // Move left by 270px
        currentPositions[i] -= 270;
        
        // If we've scrolled past the last movie, reset to the beginning
        if (currentPositions[i] < maxScroll) {
            currentPositions[i] = 0; // Reset to start
        }
        
        movieLists[i].style.transform = `translateX(${currentPositions[i]}px)`;
    });
});

// Dark mode toggle functionality
let isDarkMode = true; // Start with dark mode (as per your current design)

toggle.addEventListener('click', () => {
    if (isDarkMode) {
        // Switch to light mode
        body.style.backgroundColor = '#f5f5f5';
        document.querySelector('.navbar').style.backgroundColor = '#ffffff';
        document.querySelector('.navbar').style.color = '#000000';
        document.querySelector('.sidebar').style.backgroundColor = '#ffffff';
        document.querySelector('.container').style.backgroundColor = '#f5f5f5';
        document.querySelector('.container').style.color = '#000000';
        
        // Update navbar text color
        document.querySelectorAll('.menu-list li').forEach(item => {
            item.style.color = '#000000';
        });
        document.querySelector('.profile-text').style.color = '#000000';
        
        // Update sidebar icons
        document.querySelectorAll('.left-menu-icon').forEach(icon => {
            icon.style.color = '#000000';
        });
        
        // Move toggle ball to left (sun position)
        toggleBall.style.transform = 'translateX(-20px)';
        toggleBall.style.backgroundColor = '#000000';
        
        isDarkMode = false;
    } else {
        // Switch to dark mode
        body.style.backgroundColor = '';
        document.querySelector('.navbar').style.backgroundColor = 'black';
        document.querySelector('.navbar').style.color = 'white';
        document.querySelector('.sidebar').style.backgroundColor = 'black';
        document.querySelector('.container').style.backgroundColor = '#151515';
        document.querySelector('.container').style.color = 'white';
        
        // Reset navbar text color
        document.querySelectorAll('.menu-list li').forEach(item => {
            item.style.color = 'white';
        });
        document.querySelector('.profile-text').style.color = 'white';
        
        // Reset sidebar icons
        document.querySelectorAll('.left-menu-icon').forEach(icon => {
            icon.style.color = 'white';
        });
        
        // Move toggle ball to right (moon position)
        toggleBall.style.transform = 'translateX(0)';
        toggleBall.style.backgroundColor = 'black';
        
        isDarkMode = true;
    }
});

arrows.forEach((arrow, i) => {
    arrow.addEventListener('click', () => {
        const movieListWidth = movieLists[i].scrollWidth;
        const containerWidth = movieLists[i].parentElement.offsetWidth;
        const maxScroll = -(movieListWidth - containerWidth);
        
        currentPositions[i] = Math.max(currentPositions[i] - 270, maxScroll);
        movieLists[i].style.transform = `translateX(${currentPositions[i]}px)`;
    });
});