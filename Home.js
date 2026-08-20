const htmlNode = document.documentElement; 
const bodyNode = document.body;       

function animateWithRandomPause() {
    htmlNode.classList.remove('is-animating');
    bodyNode.classList.remove('is-animating');

    void htmlNode.offsetWidth; 

    htmlNode.classList.add('is-animating');
    bodyNode.classList.add('is-animating');
    const randomPause = Math.random() * 2000 + 1000;

    setTimeout(animateWithRandomPause, 4000 + randomPause);
}

animateWithRandomPause();