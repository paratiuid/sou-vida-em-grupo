import React, {useCallback, useState} from "react";
import Link from "next/link"

import {
	Container,
	Row,
	Col,
	Card,
	CardDeck,
	Media,
	ListGroup,
	Modal,
	Form,
	Button
} from 'react-bootstrap'

import FormContact from "../_components/_form"
import { maskphone } from "../_components/_masks";

import SousegurosLogo from "../assets/logo.sou.seguros.svg"
import IconSecurity from '../assets/icon.carbon.security.svg'
import IconPeople from '../assets/icon.people.svg'
import IconBank from '../assets/icon.bank.svg'
import IconCheckBox from '../assets/icon.checkbox.svg'
import IconGrid from '../assets/icon.grid.svg'
import IconFile from '../assets/icon.file.svg'
import IconUserPlus from '../assets/icon.user.plus.svg'
import IconLike from '../assets/icon.like.svg'
import IconInvestiments from '../assets/icon.investiments.svg'
import IconClose from '../assets/icon.close.svg'

import LogoBradesco from "../assets/logo.bradesco.jpg"
import LogoPorto from "../assets/logo.porto.seguro.jpg"
import LogoUnimed from "../assets/logo.unimed.jpg"
import LogoCaixa from "../assets/logo.caixa.jpg"
import LogoBB from "../assets/logo.bb.jpg"
import LogoSantander from "../assets/logo.santander.jpg"

function ModalLead(props) {
	return (
		<Modal className="sou-modal" size="lg" {...props} aria-labelledby="contained-modal-title-vcenter">
			<a className="sou-modal-close" onClick={props.onHide}><IconClose /></a>
			<Modal.Body className="show-grid">
				<Container>
					<div className="sou-form">
						<Row>
							<Col md={5}>
								<h3 className="sou-title--xl sou-color--white">Insira seus dados e um de nossos consultores lhe apresentará as melhores opções de seguro para sua empresa.</h3>
								<p className="sou-color--white">(O Seguro de Vida em Grupo exige um número mínimo de 03 vidas cobertas, com idade entre 14 a 65 anos)</p>
							</Col>
							<Col md={{ span: 6, offset: 1 }}>
								<FormContact {...props}/>
							</Col>
						</Row>
					</div>
				</Container>
			</Modal.Body>
	  	</Modal>
	);
}

const Home = () => {
	const [modalShow, setModalShow] = useState(false)
	const [validated, setValidated] = useState(false)
	const [state, setState] = useState({
		contactname: "",
		contactphone: "",
		contactlifes: ""
	})

	const cardCover = [
		{ title: "O nosso seguro de vida em grupo cobre morte por COVID-19", text: "Segurança empresarial"},
		{ title: "Escolher as coberturas adequadas para sua empresa", text: "Receba apoio para"},
		{ title: "Apólice da empresa e de cada funcionário em tempo real", text: "Oferecemos"}
	],
	cardInfo = [
		{ image: <IconSecurity />, title: "Sua empresa protegida financeiramente", text: "Evite ações e indenizações que podem prejudicar a saúde financeira de sua empresa"},
		{ image: <IconPeople />, title: "Funcionários e suas família protegidas", text: "É possível incluir coberturas para casos de invalidez e afastamento do trabalho, o que dá mais segurança ao funcionário e suas famílias"},
		{ image: <IconBank />, title: "Estar em conformidade com sindicatos", text: "Algumas convenções coletivas exigem que os proprietários ofereçam esse benefício a seus funcionários"}
	],
	cardBeforeEngage = [
		{ image: <IconGrid />, title: "Você informa os dados de sua empresa e segmento de atuação.", text: ""},
		{ image: <IconFile />, title: "Enviamos propostas de 3 seguradoras, apontando as características de cada uma.", text: ""},
	],
	cardAfterEngage = [
		{ image: <IconUserPlus />, title: "Fazemos a inclusão inicial de funcionários e emitimos a apólice.", text: ""},
		{ image: <IconPeople />, title: "Oferecemos acesso ao sistema exclusivo de movimentação mensal de funcionários.", text: ""},
	],
	cardCompany = [
		{ image: <IconLike />, title: "", text: "Somos especialistas em Seguro de Vida Empresarial"},
		{ image: <IconInvestiments />, title: "", text: "Atendemos todo o Brasil"},
	]

	const renderCard = (card, index) => {
		return (
			<Card key={index}>
				<Card.Body>
					<div className="sou-card--image">{card.image}</div>
					<Card.Title className="sou-card--title">{card.title}</Card.Title>
					{card.text ?
						<Card.Text className="sou-card--text">{card.text}</Card.Text>
						:
						null
					}
				</Card.Body>
			</Card>
		)
	}

	const renderCardOnlyText = (card, index) => {
		return (
			<Card key={index}>
				<Card.Body>
					{card.text ?
						<Card.Text className="sou-card--text">{card.text}</Card.Text>
						:
						null
					}

					{card.title ?
						<Card.Title className="sou-card--title">{card.title}</Card.Title>
						:
						null
					}
				</Card.Body>
			</Card>
		)
	}

	const changeState = (event) => {
		const value = event.target.value;

        setState({
			...state,
			[event.target.name]: value
		});
    };

	const handleKeyUp = useCallback((e: React.FormEvent<HTMLInputElement>) => {
		let t = e.currentTarget,
			input = t.name;

		if (input === "contactphone") {
			maskphone(e);
		}
	},[]);

	const handleForm = async event => {
		const form = event.currentTarget;
		const formValidity = form.checkValidity();

		event.preventDefault();
		if (formValidity === false) {
			event.stopPropagation();
		}
		setValidated(true);

		if(formValidity) {
			setModalShow(true);
		}
	};

	return (
		<div>
			<header className="sou-header">
				<Container>
					<Row className="align-items-center">
						<Col>
							<SousegurosLogo />
						</Col>
						<Col className="text-right text-end d-none d-sm-block">
							<Link href="/">
								<a>Procurando por Seguro Vida Individual?</a>
							</Link>
						</Col>
					</Row>
				</Container>
			</header>

			<section className="sou-cover">
				<Container>
					<Row>
						<Col md={8} xl={5}>
							<p className="sou-cover--subtitle sou-title--s">Solicite uma cotação</p>
							<h1 className="sou-cover--title sou-title--xl sou-color--blue">Seguro de Vida Coletivo <br className="d-none d-sm-block"/>para Funcionários</h1>
						</Col>
					</Row>

					<Row>
						<Col md={5} xl={4}>
							<Form noValidate validated={validated} onSubmit={handleForm}>
								<Form.Group>
									<p>Proteja sua empresa e seus <br/> funcionários financeiramente.</p>
								</Form.Group>
								<Form.Group controlId="name">
									<Form.Control
										type="text"
										name="contactname"
										placeholder="Seu nome"
										value={state.contactname}
										onChange={changeState}
										required
									/>
									<Form.Control.Feedback type="invalid">Preencha o seu nome</Form.Control.Feedback>
								</Form.Group>
								<Form.Group controlId="phone">
									<Form.Control
										type="tel"
										name="contactphone"
										placeholder="Telefone para contato por Whatsapp"
										value={state.contactphone}
										onKeyUp={handleKeyUp}
										onChange={changeState}
										required
									/>
									<Form.Control.Feedback type="invalid">Preencha o seu whatsapp</Form.Control.Feedback>
								</Form.Group>
								<Form.Group controlId="lifes">
									<Form.Control
										as="select"
										name="contactlifes"
										value={state.contactlifes}
										onChange={changeState}
										required
									>
										<option value="">Número de funcionários</option>
										<option value="03 a 10 vidas">03 a 10 vidas</option>
										<option value="11 a 50 vidas">11 a 50 vidas</option>
										<option value="51 a 100 vidas">51 a 100 vidas</option>
										<option value="101 a 500 vidas">101 a 500 vidas</option>
										<option value="501 a 1.000 vidas">501 a 1.000 vidas</option>
										<option value="Mais de 1.001 vidas">Mais de 1.001 vidas</option>
									</Form.Control>
									<Form.Control.Feedback type="invalid">Selecione o número de funcionários</Form.Control.Feedback>
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
						</Col>
					</Row>

					<Row className="sou-cover--cards align-items-md-end">
						<Container>
							<Row>
								<Col xl={{span: 10, offset: 1}}>
									<CardDeck className="sou-card sou-card--deck">
										{cardCover.map(renderCardOnlyText)}
									</CardDeck>
								</Col>
							</Row>
						</Container>
					</Row>
				</Container>
			</section>

			<section className="sou-features sou-features--about sou-color--white">
				<Container>
					<Row>
						<Col md={{span: 7, offset: 0}} lg={{span: 5, offset: 0}}>
							<h2 className="sou-title--xl sou-features--title">O que é o Seguro de Vida em Grupo?</h2>
							<p className="sou-features--text">O seguro de vida coletivo (ou em grupo) proporciona mais tranquilidade para empresas, funcionários e seus familiares, que tem como principal função  minimizar impactos ocasionados por eventos inesperados como acidentes ou falecimento de funcionários.</p>
						</Col>
					</Row>
				</Container>
			</section>

			<section className="sou-features">
				<Container>
					<Row>
						<Col xl={{span: 10, offset: 1}}>
							<CardDeck className="sou-card sou-card--deck">
								{cardInfo.map(renderCard)}
							</CardDeck>
						</Col>
					</Row>
				</Container>
			</section>

			<section className="sou-features sou-features--advantages">
				<Container>
					<Row className="align-items-center">
						<Col lg={4}>
							<h3 className="sou-features--title sou-color--blue">Empresas com Seguro de Vida Coletivo têm vantagens:</h3>
						</Col>
						<Col lg={8}>
							<Media className="sou-media">
								<IconCheckBox />
								<Media.Body>
									<h4 className="sou-media--title sou-color--blue">Custo benefício</h4>
									<p>Seguros de vida em grupo costumam ser mais baratos que os individuais. É possível contratar as principais coberturas por um baixo custo.</p>
								</Media.Body>
							</Media>
							<Media className="sou-media">
								<IconCheckBox />
								<Media.Body>
									<h4 className="sou-media--title sou-color--blue">Dedução no imposto de renda</h4>
									<p>Se a sua empresa segue o regime de tributação do lucro real, você pode fazer a dedução dos pagamentos do seguro no imposto de renda.</p>
								</Media.Body>
							</Media>
						</Col>
					</Row>
				</Container>
			</section>

			<section className="sou-features sou-features--how">
				<Container>
					<Row>
						<Col lg={6}>
							<h3 className="sou-features--title sou-color--blue">Como funciona o atendimento a clientes de Seguro Vida Empresarial na Sou Seguros</h3>
							<p className="sou-features--text">Somos especialistas no segmento de <br className="d-none d-md-block" />Seguro de Vida para Empresas.</p>
						</Col>
					</Row>
					<Row className="sou-features--how-items">
						<Col md={4}>
							<h3 className="sou-features--subtitle sou-features--subtitle-icon sou-features--subtitle-icon-blue">Antes de <br />contratar o seguro</h3>
						</Col>
						<Col md={8}>
							<CardDeck className="sou-card sou-card--deck">
								{cardBeforeEngage.map(renderCard)}
							</CardDeck>

							<div className="sou-features--how-items-info">
								<p>Para apoiar na escolha da melhor opção de seguradora para seu negócio, trabalhamos com uma abordagem especializada que se baseia em 3 pontos principais: as melhores taxas; a real necessidade do seguro para sua empresa; e, a seguradora com menos burocracia e solidez.</p>
							</div>
						</Col>
					</Row>

					<Row className="sou-features--how-items">
						<Col md={4}>
							<h3 className="sou-features--subtitle sou-features--subtitle-icon sou-features--subtitle-icon-dark-blue">Depois de <br />contratar o seguro</h3>
						</Col>
						<Col md={8}>
							<CardDeck className="sou-card sou-card--deck">
								{cardAfterEngage.map(renderCard)}
							</CardDeck>

							<div className="sou-features--how-items-info">
								<p>Neste sistema, oferecido exclusivamente para clientes Sou Seguros, sua empresa poderá:</p>
								<ListGroup variant="flush">
									<ListGroup.Item>Incluir e excluir funcionários da apólice</ListGroup.Item>
									<ListGroup.Item>Visualizar a apólice e as coberturas contratadas para sua empresa a qualquer momento</ListGroup.Item>
									<ListGroup.Item>Baixar o Certificado Individual de cada funcionário</ListGroup.Item>
									<ListGroup.Item>Baixar o Certificado Individual de cada funcionário</ListGroup.Item>
								</ListGroup>
							</div>
						</Col>
					</Row>
				</Container>
			</section>

			<section className="sou-features sou-features--company sou-bg--darkblue">
				<Container>
					<Row className="align-items-center">
						<Col md={4}>
							<h3 className="sou-features--title sou-color--white">20</h3>
							<p className="sou-features--subtitle sou-color--white">anos de mercado</p>
						</Col>
						<Col md={8}>
							<CardDeck className="sou-card sou-card--dark sou-card--deck">
								{cardCompany.map(renderCard)}
							</CardDeck>
						</Col>
					</Row>
				</Container>
			</section>

			<footer  className="sou-footer">
				<Container>
					<Row className="sou-footer--partners">
						<Col md={4}>
							<h3 className="sou-features--subtitle sou-title--m">Trabalhamos com <br />todas as seguradoras</h3>
						</Col>
						<Col md={8}>
							<div className="d-flex justify-content-around mb-2">
								<img className="m-4" width={40} height={53} src={LogoPorto} />
								<img className="m-4" width={72} height={75} src={LogoBradesco} />
								<img className="m-4" width={41} height={41} src={LogoUnimed} />
							</div>
							<div className="d-flex justify-content-around mb-2">
								<img className="m-4" width={99} height={35} src={LogoCaixa} />
								<img className="m-4" width={113} height={25} src={LogoBB} />
								<img className="m-4" width={116} height={41} src={LogoSantander} />
							</div>
						</Col>
					</Row>
					<Row className="sou-footer--colophon">
						<Col md={6}>
							<div className="sou-footer--logo">
								<SousegurosLogo />
							</div>
							<div className="sou-footer--info">
								Sou Administradora e Corretora de Seguros LTDA
								<br />
								CNPJ: 25.281.864/0001-50
								<br />
								SUSEP: 10.2034785.5
							</div>
						</Col>
						<Col md={6} className="text-md-right text-md-end">
							<Link href="/">
								<a className="btn btn-primary btn-sm-block">Iniciar cotação</a>
							</Link>
						</Col>
					</Row>
				</Container>
			</footer>

			<ModalLead {...state} show={modalShow} onHide={() => setModalShow(false)} />
		</div>
	)
}


export default Home
