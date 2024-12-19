let counterNum = 0;

const counterVal = document.getElementById('counterVal');
const increaseVal = document.getElementById('increaseVal');
const decreaseVal = document.getElementById('decreaseVal');

// tambah value
increaseVal.addEventListener('click', () => {
	counterNum++;
	counterVal.innerHTML = counterNum;
});

// kurangi value
decreaseVal.addEventListener('click', () => {
	counterNum--;
	counterVal.innerHTML = counterNum;
});

