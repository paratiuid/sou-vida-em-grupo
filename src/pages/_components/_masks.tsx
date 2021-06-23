import React from "react";

export function phone(e: React.FormEvent<HTMLInputElement>) {
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

export function cnpj(e: React.FormEvent<HTMLInputElement>) {
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

export function cpf(e: React.FormEvent<HTMLInputElement>) {
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

function digit(numbers: string): number {
	let index = 2

	const sum = [...numbers].reverse().reduce((buffer, number) => {
		buffer += Number(number) * index
		index = index === 9 ? 2 : index + 1
		return buffer
	}, 0)

	const mod = sum % 11

	return mod < 2 ? 0 : 11 - mod
}

export function validateCnpj(cnpj: string | number): boolean {
	// Remove period, slash and dash characters from CNPJ
	const cleaned = cnpj.toString().replace(/[\.\/\-]/g, '')

	if (
		// Must be defined
		!cleaned ||
		// Must have 14 characters
		cleaned.length !== 14 ||
		// Must be digits and not be sequential characters (e.g.: 11111111111111, etc)
		/^(\d)\1+$/.test(cleaned)
	) {
		return false
	}


	let registration = cleaned.substr(0, 12)
	registration += digit(registration)
	registration += digit(registration)

	return registration.substr(-2) === cleaned.substr(-2)
}

export function validateEmail(email) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}
