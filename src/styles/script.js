let currentColor = 'red';
let colors = ['red', 'yellow', 'green'];

function setLight(color) {
    document.querySelectorAll('.light').forEach(light => {
        light.classList.remove('glow');
    });
    document.querySelector(`.${color}`).classList.add('glow');
    currentColor = color;
}

function toggleColor() {
    const currentIndex = colors.indexOf(currentColor);
    const nextIndex = (currentIndex + 1) % colors.length;
    setLight(colors[nextIndex]);
}

function addPurpleLight() {
    if (!colors.includes('purple')) {
        colors.push('purple');
        const lightsContainer = document.querySelector('#lights');
        const newLight = document.createElement('div');
        newLight.className = 'purple light';
        newLight.onclick = () => setLight('purple');
        lightsContainer.appendChild(newLight);
    }
}