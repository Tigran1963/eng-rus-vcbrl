const engWord = document.querySelector('.eng-word');
const rusWord = document.querySelector('.rus-word');
const button = document.querySelector('.button');

if (button) {
	button.addEventListener('click', function (e) {
		console.log('hello world');
		fetch('words.json')
			.then(response => {
				if (!response.ok) {
					throw new Error('Ошибка загрузки файла!');
				}
				return response.json()
			})
			.then(data => {
				const randomNum = Math.floor(Math.random() * data.length);
				randomWord = data[randomNum];
				engWord.innerHTML = randomWord.en
				rusWord.innerHTML = randomWord.ru
				// data.forEach(item => {
				// 	engWord.innerHTML = item.en
				// 	rusWord.innerHTML = item.ru
				// 	//console.log(`Слово: ${item.en}, Перевод: ${item.ru}`);
				// });
			})
			.catch(error => {
				console.error('Ошибка:', error);
			});
	})
}