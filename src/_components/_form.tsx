import React, { useCallback, useState} from "react";
import {
	Form,
	Button
} from 'react-bootstrap';

import { maskcnpj, maskphone, validateCnpj, validateEmail } from "./_masks";

import IconSuccess from '../assets/icon.success.svg'

function FormContact(props) {
	const [state, setState] = useState({
		contactcompany: "",
		contactcnpj: "",
		contactemail: "",
		contactagree: "",
		loading: false,
		success: false,
		error: false,
		isInvalid: false,
		cnpjValid: true,
		emailValid: true
	})
	const [validated, setValidatedModal] = useState(false);

	const changeState = (event) => {
		const value = event.target.value;

        setState({
			...state,
			[event.target.name]: value
		});
    };

	const handleKeyUp = (event) => {
		let t = event.currentTarget;
		let input = t.name;

		if (input === "contactcnpj") {
			maskcnpj(event);

			if(t.value.length >= 18) {
				setState({...state, [t.name]: t.value, cnpjValid: validateCnpj(t.value)})
			}
		}

		// if (input === "contactphone") {
		// 	maskphone(event);
		// }

		// if (input === "contactemail") {
		// 	setState({...state, [t.name]: t.value, cnpjValid: validateCnpj(t.value)})
		// }
    };

	// const handleKeyUp = useCallback((e: React.FormEvent<HTMLInputElement>) => {
	// 	let input = e.currentTarget.name;

	// 	if (input === "contactcnpj") {
	// 		maskcnpj(e);

	// 		if(e.currentTarget.value.length >= 18) {
	// 			console.log("onkeyup",state);
	// 			setState({...state, [e.currentTarget.name]: e.currentTarget.value, cnpjValid: validateCnpj(e.currentTarget.value)})
	// 		}
	// 	}

	// 	if (input === "contactphone") {
	// 		maskphone(e);
	// 	}

	// 	if (input === "contactemail") {
	// 		console.log("email válido:", validateEmail(e.currentTarget.value));
	// 	}
	// },[]);



	const handleSubmit = async event => {
		event.preventDefault();
		const form = event.currentTarget;

		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}

		setValidatedModal(true);

		if(validated == true && state.cnpjValid == true && state.emailValid == true) {
			let body = {
				name: props.contactname,
				phone: props.contactphone,
				lifes: props.contactlifes,
				company: state.contactcompany,
				cnpj: state.contactcnpj,
				email: state.contactemail
			}

			setState({...state, loading: true});

			await fetch('/api/registerLead',
				{
					method: 'POST',
					body: JSON.stringify(body),
					headers: new Headers({'content-type': 'application/json'})
				}
			)
			.then(response => {
				console.debug(response)
				setState({...state, loading: false});

				if (response.ok) {
					window.location.hash = "sucesso";
					setState({...state, success: true});
				} else {
					window.location.hash = "erro";
					setState({...state, error: true});
				}
			})
			.catch(error => {
				console.error(error)
			})
		}
	};


	return (
		<>
		{state.error &&
		<div className="sou-form-error">
			<h3 className="sou-title--xl sou-color--white">Desculpe, tivemos um problema.</h3>
			<p className="sou-color--white">Por favor, tente novamente.</p>
		</div>
		}

		{!state.success &&
		<Form noValidate validated={validated} onSubmit={handleSubmit}>
			<Form.Group controlId="company">
				<Form.Control
					type="text"
					name="contactcompany"
					placeholder="Empresa"
					value={state.contactcompany}
					onChange={changeState}
					required
				/>
				<Form.Control.Feedback type="invalid">Preencha o nome da empresa</Form.Control.Feedback>
			</Form.Group>
			<Form.Group controlId="cnpj">
				<Form.Control
					type="tel"
					name="contactcnpj"
					placeholder="CNPJ"
					value={state.contactcnpj}
					onChange={changeState}
					onKeyUp={handleKeyUp}
					isInvalid={!state.cnpjValid}
					required
				/>
				<Form.Control.Feedback type="invalid">Preencha o CNPJ</Form.Control.Feedback>
			</Form.Group>
			<Form.Group controlId="email">
				<Form.Control
					type="email"
					name="contactemail"
					placeholder="E-mail"
					value={state.contactemail}
					onChange={changeState}
					onKeyUp={handleKeyUp}
					isInvalid={!state.emailValid}
					required
				/>
				<Form.Control.Feedback type="invalid">Preencha o e-mail</Form.Control.Feedback>
			</Form.Group>
			<Form.Group>
				<Form.Check
					name="contactagree"
					type="checkbox"
					value={state.contactagree}
					onChange={changeState}
					label="Li e concordo com a Política de Privacidade"
					feedback="Você deve aceitar a Política de Privacidade."
					required
				/>
			</Form.Group>
			<Form.Group>
				<Button className="" variant="primary" type="submit" block disabled={state.loading}>
					{state.loading &&
						<span className="sou-loading"></span>
					}
					Enviar
				</Button>
			</Form.Group>
		</Form>
		}

		{state.success &&
		<div className="sou-form-success">
			<div className="sou-modal-icon">
				<IconSuccess />
			</div>
			<h3 className="sou-title--xl sou-color--white">Solicitação enviada com sucesso!</h3>
			<p className="sou-color--white">Em breve entraremos em contato.</p>
		</div>
		}
		</>
	)
}

export default FormContact
