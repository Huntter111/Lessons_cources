$(
	(function () {
		$('.g-form').submit(function (event) {
			event.preventDefault();

			// Ссылка, которую получили на этапе публикации приложения
			let appLink =
				'https://script.google.com/macros/s/AKfycbxPUqOriiCUyZ2u5ZM0nD8dCOUAkGtCBCficR25gIGMfD33oAcTqJx3gxxpE3mHKo4uUg/exec';

			// Сообщение при успешной отправке данных
			let successRespond =
				'Повідомлення успішно відправлено. Переглянути результат <a class="form__link"  target="_blank" href="https://docs.google.com/spreadsheets/d/1j8nFB7F72gt4imxH5oyw_NodfQ2KfYvJUR1vmxUXR2Q/edit#gid=0">тут</a>';

			// Сообщение при ошибке в отправке данных
			let errorRespond =
				'Не удалось отправить сообщение. Cвяжитесь с администратором сайта по адресу <a href="mailto:tbackup771@gmail.com">tbackup771@gmail.com</a>';

			// Id текущей формы
			let form = $('#' + $(this).attr('id'))[0];

			// h2 с ответом формы
			let formRespond = $(this).find('.g-form__title--respond');

			// h2 с заголовком формы
			let formTitle = $(this).find('.g-form__title--main');

			// Блок прелоадера
			let preloader = $(this).find('.g-form__preloader');

			// Кнопка отправки формы
			let submitButton = $(this).find('.g-form__button');

			// FormData
			let fd = new FormData(form);

			$.ajax({
				url: appLink,
				type: 'POST',
				data: fd,
				processData: false,
				contentType: false,
				beforeSend: function () {
					if (fd.get('honeypot').length) {
						return false;
					} else {
						fd.delete('honeypot');
					}

					// Показываем прелоадер
					preloader.css('opacity', '1');

					// Делаем неактивной кнопку отправки
					submitButton.prop('disabled', true);

					// валидация других полей.
				},
			})
				.done(function (res, textStatus, jqXHR) {
					if (jqXHR.readyState === 4 && jqXHR.status === 200) {
						// Прячем заголовок формы
						formTitle.css({
							display: 'none',
						});

						// Прячем прелоадер
						preloader.css('opacity', '0');

						// Выводим ответ формы.
						formRespond.html(successRespond).css('color', '#37b599'),
							('font-size', '30px');

						// Возвращаем активность кнопке отправки
						submitButton.prop('disabled', false);

						// Очищаем поля формы
						form.reset();
					} else {
						formTitle.css({
							display: 'none',
						});
						formRespond.html(errorRespond).css('color', '#c64b4b');
						preloader.css('opacity', '0');
						setTimeout(() => {
							formRespond.css({
								display: 'none',
							});
							formTitle.css({
								display: 'block',
							});

							submitButton.prop('disabled', false);
						}, 5000);

						console.log('Гугл не ответил статусом 200');
					}
				})
				.fail(function (res, textStatus, jqXHR) {
					formTitle.css({
						display: 'none',
					});
					preloader.css('opacity', '0');
					formRespond
						.html(
							"Повідомлення НЕ відправлено. Будь-ласка напишіть нам на <a class='form__link' href='mailto:nabir@robotajaguarlandrover.com.ua'>Email</a>",
						)
						.css('color', '#c64b4b');
					setTimeout(() => {
						formRespond.css({
							display: 'none',
						});
						formTitle.css({
							display: 'block',
						});
						submitButton.prop('disabled', false);
					}, 5000);

					console.log(
						'Не удалось выполнить запрос по указанному в скрипте пути',
					);
				});
		});
	})(jQuery),
);

document.addEventListener('DOMContentLoaded', () => {
	var phones = document.querySelectorAll('input[name=Телефон]');
	for (var i = phones.length - 1; i >= 0; i--) {
		processInput(phones[i]);
	}
});

function processInput(phone) {
	var iti = window.intlTelInput(phone, {
		allowDropdown: true,
		initialCountry: 'UA',
		nationalMode: true,
		autoPlaceholder: 'aggressive',
		formatOnDisplay: true,
		separateDialCode: true,
		utilsScript:
			'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.15/js/utils.min.js',
	});
	phone.addEventListener('input', () => {
		phone.setCustomValidity('');
		if (!iti.isValidNumber()) phone.setCustomValidity('Невірний номер');
	});
}
