import { useState } from "react";
import {
	Alert,
	Form,
	Button
} from 'react-bootstrap';

function FormContact() {
	const [contactName, setContactName] = useState('')
  	const [contactPhone, setContactPhone] = useState('')
	const [contactLifes, setContactLifes] = useState('')
	const [contactCompany, setContactCompany] = useState('')
	const [contactCnpj, setContactCnpj] = useState('')
	const [contactEmail, setContactEmail] = useState('')
	const [validated, setValidated] = useState(false);

	const handleForm = async event => {
		const form = event.currentTarget;
		event.preventDefault();

		if (form.checkValidity() === false) {
			event.stopPropagation();
		}

		setValidated(true);

		if(!validated) {
			let body = {
				name: contactName,
				phone: contactPhone,
				lifes: contactLifes,
				company: contactCompany,
				cnpj: contactCnpj,
				email: contactEmail
			}

			await fetch('/api/registerLead',
				{
					method: 'POST',
					body: JSON.stringify(body)
				}
			)
			.then(response => {
				console.debug(response)
			})
			.catch(error => {
				console.error(error)
			})
		}
	};

	return (
		<Form noValidate validated={validated} onSubmit={handleForm}>
			<Form.Group>
				<p>Proteja sua empresa e seus <br/> funcionários financeiramente.</p>
			</Form.Group>
			<Form.Group controlId="name">
				<Form.Control
					type="text"
					placeholder="Seu nome"
					value={contactName}
					onChange={e => setContactName(e.target.value)}
					required
				/>
				<Form.Control.Feedback type="invalid">Preencha o seu nome</Form.Control.Feedback>
			</Form.Group>
			<Form.Group controlId="phone">
				<Form.Control
					type="tel"
					placeholder="Telefone para contato por Whatsapp"
					value={contactPhone}
					onChange={e => setContactPhone(e.target.value)}
					required
				/>
				<Form.Control.Feedback type="invalid">Preencha o seu whatsapp</Form.Control.Feedback>
			</Form.Group>
			<Form.Group controlId="lifes">
				<Form.Control
					as="select"
					value={contactLifes}
					onChange={e => setContactLifes(e.target.value)}
					required
				>
					<option value="">Número de funcionários</option>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="3">4</option>
					<option value="3">5</option>
					<option value="3">6</option>
				</Form.Control>
				<Form.Control.Feedback type="invalid">Selecione o número de funcionários</Form.Control.Feedback>
			</Form.Group>
			<Form.Group controlId="company">
				<Form.Control
					type="tel"
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
					Iniciar cotação
				</Button>
			</Form.Group>
			<Form.Group className="text-center">
				<Form.Text className="text-muted">
					Receba em minutos ao menos 3 cotações
				</Form.Text>
			</Form.Group>
		</Form>
	)
}

export default FormContact
