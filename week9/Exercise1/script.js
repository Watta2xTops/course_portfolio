const button = document.getElementById('button');
const text = document.getElementById('paragraph')
button.addEventListener('click', function() {
    text.textContent = 'You clicked the button!'
});