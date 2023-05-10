<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'phpmailer/src/Exception.php';
	require 'phpmailer/src/PHPMailer.php';
	require 'phpmailer/src/SMTP.php';

	$mail = new PHPMailer(true);
	$mail->CharSet = 'UTF-8';
	$mail->setLanguage('ru', 'phpmailer/language/');
	$mail->IsHTML(true);

	$name = $_POST['name'];
	$phone = $_POST['phone_number'];
	// $email = $_POST['form[email]'];
	$email = $_POST['email'];
	$text_message = $_POST['message'];
	/*
	$mail->isSMTP();                                            //Send using SMTP
	$mail->Host       = 'smtp.example.com';                     //Set the SMTP server to send through
	$mail->SMTPAuth   = true;                                   //Enable SMTP authentication
	$mail->Username   = 'user@example.com';                     //SMTP username
	$mail->Password   = 'secret';                               //SMTP password
	$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
	$mail->Port       = 465;                 
	*/

	//Від кого лист
	$mail->setFrom('intensivesc@gmail.com', 'Бакинський дворик'); // Вказати потрібний E-mail
	//Кому відправити
	$mail->addAddress('tbackup771@gmail.com'); // Вказати потрібний E-mail
	//Тема листа
	$mail->Subject = 'Вітання! Нова заявка';

	//Тіло листа
	$body = '<h1>Зустрічайте супер листа!</h1> <br> <span>Ім\'я: </span>' .$name. '<br> Телефон:' .$phone. '<br> Пошта:' .$email. '<br> Повідомлення: ' .$text_message;
	// <br> Ім\'я: ' .$name. '<br> Телефон: ' .$phone. '<br>' Пошта: ' .$email. '<br> Моє повідомлення: ' .$text_message';
	

	// if(trim(!empty($_POST['email']))){
	// 	$body.=$_POST['email'];
	// }	
	
	/*
	//Прикріпити файл
	if (!empty($_FILES['image']['tmp_name'])) {
		//шлях завантаження файлу
		$filePath = __DIR__ . "/files/sendmail/attachments/" . $_FILES['image']['name']; 
		//грузимо файл
		if (copy($_FILES['image']['tmp_name'], $filePath)){
			$fileAttach = $filePath;
			$body.='<p><strong>Фото у додатку</strong>';
			$mail->addAttachment($fileAttach);
		}
	}
	*/

	$mail->Body = $body;

	//Відправляємо
	if (!$mail->send()) {
		$message = 'Помилка';
	} else {
		$message = 'Дані надіслані!';
	}

	$response = ['message' => $message];

	header('Content-type: application/json');
	echo json_encode($response);
?>