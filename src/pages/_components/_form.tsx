import React, {useState} from "react";
import MaskedFormControl from 'react-bootstrap-maskedinput'
import {
	Form,
	Button
} from 'react-bootstrap';

function FormContact(props) {
	const [state, setState] = useState({
		contactcompany: "",
		contactcnpj: "",
		contactemail: "",
		contactagree: "",
		loading: false,
		success: false,
		error: false
	})
	const [validated, setValidated] = useState(false);

	const changeState = (event) => {
		const value = event.target.value;

        setState({
			...state,
			[event.target.name]: value
		});
    };


	const handleForm = async event => {
		const form = event.currentTarget;
		event.preventDefault();

		if (form.checkValidity() === false) {
			event.stopPropagation();
		}

		setValidated(true)

		if(validated == true) {
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

				if (response.ok)
					setState({...state, success: true});
				else
					setState({...state, error: true});
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
		<Form noValidate validated={validated} onSubmit={handleForm}>
			<Form.Group controlId="company">
				<Form.Control
					type="tel"
					name="contactcompany"
					placeholder="Empresa"
					value={state.contactcompany}
					onChange={changeState}
					required
				/>
				<Form.Control.Feedback type="invalid">Preencha o nome da empresa</Form.Control.Feedback>
			</Form.Group>
			<Form.Group controlId="cnpj">
				<MaskedFormControl
					type="tel"
					name="contactcnpj"
					placeholder="CNPJ"
					value={state.contactcnpj}
					onChange={changeState}
					mask="11.111.111/1111-11"
					required
				/>
				<Form.Control.Feedback type="invalid">Preencha o CNPJ</Form.Control.Feedback>
			</Form.Group>
			<Form.Group controlId="email">
				<Form.Control
					type="tel"
					name="contactemail"
					placeholder="E-mail"
					value={state.contactemail}
					onChange={changeState}
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
			<h3 className="sou-title--xl sou-color--white">Solicitação enviada com sucesso!</h3>
			<p className="sou-color--white">Em breve entraremos em contato.</p>
		</div>
		}
		</>
	)
}

export default FormContact
