const checkTimeButton = document.getElementById('checkTimeButton');
const timeDataElement = document.getElementById('timeData');


checkTimeButton.addEventListener('click', () => {
	fetch('https://timeapi.io/api/time/current/zone?timeZone=Asia%2FJakarta')
	.then(response => {
		if (!response.ok) {
			throw new Error('Jaringan bermasalah');
		}
		return response.json();
	})
	.then(data => {
		console.log('Data diterima: ',data);
		timeDataElement.textContent = `Waktu saat ini: ${data.time}`;
	})
	.catch(error => {
		timeDataElement.textContent = `Gagal mendapatkan waktu. Error:${error}`;
	});
});