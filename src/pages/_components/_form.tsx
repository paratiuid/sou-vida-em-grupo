import { useState } from "react";
import {
	Alert,
	Form,
	Button
} from 'react-bootstrap';

function FormContact(props) {
	// const [contactName, setContactName] = useState('')
  	// const [contactPhone, setContactPhone] = useState('')
	// const [contactLifes, setContactLifes] = useState('')
	const [contactCompany, setContactCompany] = useState('')
	const [contactCnpj, setContactCnpj] = useState('')
	const [contactEmail, setContactEmail] = useState('')
	const [validated, setValidated] = useState(false);
	// const [loading, setLoading] = useState(false)
	// const [success, setSuccess] = useState(false)
	// const [form, setForm] = useState(true)

	console.log(props.contactName);

	const handleForm = async event => {
		const form = event.currentTarget;
		event.preventDefault();

		if (form.checkValidity() === false) {
			event.stopPropagation();
		}

		setValidated(true)

		if(validated == true) {
			let body = {
				name: props.contactName,
				phone: props.contactPhone,
				lifes: props.contactLifes,
				company: contactCompany,
				cnpj: contactCnpj,
				email: contactEmail
			}

			setLoading(true);

			await fetch('/api/registerLead',
				{
					method: 'POST',
					body: JSON.stringify(body),
					headers: new Headers({'content-type': 'application/json'})
				}
			)
			.then(response => {
				console.debug(response)
				setLoading(false)
				setForm(false)
				setSuccess(true)
			})
			.catch(error => {
				console.error(error)
			})
		}
	};

	return (
		<Form noValidate validated={validated} onSubmit={handleForm}>
			<Form.Group controlId="company">
				<Form.Control
					type="tel"
					name="contactCompany"
					placeholder="Empresa"
					value={contactCompany}
					onChange={e => setContactCompany(e.target.value)}
					required
				/>
				<Form.Control.Feedback type="invalid">Preencha o nome da empresa</Form.Control.Feedback>
			</Form.Group>
			<Form.Group controlId="cnpj">
				<Form.Control
					type="tel"
					name="contactCnpj"
					placeholder="CNPJ"
					value={contactCnpj}
					onChange={e => setContactCnpj(e.target.value)}
					required
				/>
				<Form.Control.Feedback type="invalid">Preencha o CNPJ</Form.Control.Feedback>
			</Form.Group>
			<Form.Group controlId="email">
				<Form.Control
					type="tel"
					name="contactEmail"
					placeholder="E-mail"
					value={contactEmail}
					onChange={e => setContactEmail(e.target.value)}
					required
				/>
				<Form.Control.Feedback type="invalid">Preencha o e-mail</Form.Control.Feedback>
			</Form.Group>
			<Form.Group>
				<Form.Check
					type="checkbox"
					label="Li e concordo com a Política de Privacidade"
					feedback="Você deve aceitar a Política de Privacidade."
					required
				/>
			</Form.Group>
			<Form.Group>
				<Button variant="primary" type="submit" block>
					Enviar
				</Button>
			</Form.Group>
		</Form>
	)
}

export default FormContact
