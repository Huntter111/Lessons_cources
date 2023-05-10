
<?php
   $name = $_POST['name'];
	// $email = $_POST['form[email]'];
	$phone = $_POST['phone_number'];
	// $message = $_POST['message'];
	$token = '5979999343:AAHbxXvf3E12lAp_n8s93jd3bspBKc1uNcA';
	$chat_id = '-851583258';
	$arr = array(
		'Ім\'я: ' => $name,
		// 'Пошта: ' => $email,
		'Телефон:' => $phone,
		// 'Повідомлення: ' => $message
	);
	foreach($arr as $key => $value) {
		$txt .= "<b>".$key."</b> ".$value."%0A";
	};
	$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
	if($sendToTelegram){
		header('Location: ../../thank-you.html');
	} else {
	echo "Error";
	}
?>
