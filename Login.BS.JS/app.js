// Set default value to test
var CORRECT_USER = 'admin';
var CORRECT_PASS = 'admin';

// get value of username and password input
var inputUsername = document.getElementById('username');
var inputPassword = document.getElementById('password');

var formLogin = document.getElementById('form-login');
// check formLogin either can attach event, if have we need add onFormSubmit function for input
if(formLogin.attachEvent) {
	formLogin.attachEvent('submit', onFormSubmit);
} else {	// if it have not attachEvent
	formLogin.addEventListener('submit', onFormSubmit);
}

// declare onFormSubmit and argument is e
function onFormSubmit(e) {
	if(e.preventDefault)
		e.preventDefault();

	var username = inputUsername.value;
	var password = inputPassword.value;

	if(username == CORRECT_USER && password == CORRECT_PASS) {
		// alert('Dang nhap thanh cong');
		window.location = 'https://google.com.vn';
	} else {
		//alert('That bai trong qua trinh dang nhap');
		var divErrors = document.getElementById('errors');
		divErrors.innerHTML = 	'<div class="alert alert-danger">' +
									'<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' +
									'<strong>Có lỗi xảy ra!</strong> Tên Đăng Nhập Hoặc Mật Khẩu Không Đúng!' +
								'</div>';
	}

	return false;
}