const button = document.querySelector('button');
const body = document.querySelector('body');

button.addEventListener('click', () => {
	if (body.style.backgroundColor === 'purple') {
		document.body.background = 'white';
    } else {
		document.body.background = 'purple';
    }
});
