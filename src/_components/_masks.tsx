export function maskphone(e: React.FormEvent<HTMLInputElement>) {
	e.currentTarget.maxLength = 15;
	let value = e.currentTarget.value;

	value = value.replace(/\D/g, "");
	value = value.replace(/(\d{2})(\d)/, '($1) $2');
	value = value.replace(/(\d{4})(\d)/, '$1-$2');
	value = value.replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3');
	value = value.replace(/(-\d{4})\d+?$/, '$1');

	e.currentTarget.value = value;
	return e;
}

export function maskcnpj(e: React.FormEvent<HTMLInputElement>) {
	let value = e.currentTarget.value;

	value = value.replace(/\D/g, "");
	value = value.replace(/(\d{2})(\d)/, '$1.$2');
	value = value.replace(/(\d{3})(\d)/, '$1.$2');
	value = value.replace(/(\d{3})(\d)/, '$1/$2');
	value = value.replace(/(\d{4})(\d)/, '$1-$2');
	value = value.replace(/(-\d{2})\d+?$/, '$1');

	e.currentTarget.value = value;
	return e;
}

export function maskcpf(e: React.FormEvent<HTMLInputElement>) {
	e.currentTarget.maxLength = 14;
	let value = e.currentTarget.value;

	if (!value.match(/^(\d{3}).(\d{3}).(\d{3})-(\d{2})$/)) {
		value = value.replace(/\D/g, "");
		value = value.replace(/(\d{3})(\d)/, "$1.$2");
		value = value.replace(/(\d{3})(\d)/, "$1.$2");
		value = value.replace(/(\d{3})(\d{2})$/, "$1-$2");
		e.currentTarget.value = value;
	}

	return e;
}

export function validateCnpj(cnpj) {
	cnpj = cnpj.replace(/[^\d]+/g,'');

	if (cnpj == '') return false;
	if (cnpj.length != 14) return false;

	// Elimina CNPJs invalidos conhecidos
	if (cnpj == "00000000000000" ||
		cnpj == "11111111111111" ||
		cnpj == "22222222222222" ||
		cnpj == "33333333333333" ||
		cnpj == "44444444444444" ||
		cnpj == "55555555555555" ||
		cnpj == "66666666666666" ||
		cnpj == "77777777777777" ||
		cnpj == "88888888888888" ||
		cnpj == "99999999999999")
	return false;

	let tamanho = cnpj.length - 2
	let numeros = cnpj.substring(0,tamanho);
	let digitos = cnpj.substring(tamanho);
	let soma = 0;
	let pos = tamanho - 7;

	for (let i = tamanho; i >= 1; i--) {
		soma += numeros.charAt(tamanho - i) * pos--;
		if (pos < 2) pos = 9;
	}

	let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;

	if (resultado != digitos.charAt(0)) return false;

	tamanho = tamanho + 1;
	numeros = cnpj.substring(0,tamanho);
	soma = 0;
	pos = tamanho - 7;
	for (let i = tamanho; i >= 1; i--) {
		soma += numeros.charAt(tamanho - i) * pos--;
		if (pos < 2) pos = 9;
	}
	resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;

	if (resultado != digitos.charAt(1)) return false;

	return true;
}

export function validateEmail(email) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}
