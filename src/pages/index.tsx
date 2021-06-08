import React from 'react';
import Head from "next/head";
import Link from "next/Link"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Media from 'react-bootstrap/Media'

import SousegurosLogo from "../assets/logo.sou.seguros.svg"
import IconSecuirty from '../assets/icon.carbon.security.svg'
import IconPeople from '../assets/icon.people.svg'
import IconBank from '../assets/icon.bank.svg'
import IconCheckBox from '../assets/icon.checkbox.svg'

const Home: React.FC = () => {
	return (
		<div>
			<Head>
				<title>Seguro de Vida Coletivo para Funcionários | Sou Seguros</title>
			</Head>

			<header className="sou-header">
				<Container>
					<Row className="align-items-center">
						<Col>
							<SousegurosLogo />
						</Col>
						<Col className="text-right text-end">
							<a href="">Procurando por Seguro Vida Individual?</a>
						</Col>
					</Row>
				</Container>
			</header>

			<section className="sou-cover">
				<Container>
					<Row>
						<Col md={5}>
							<p className="sou-cover--text sou-title--s">Solicite uma cotação</p>
							<h1 className="sou-cover--title sou-title--xl sou-color--blue">Seguro de Vida Coletivo <br/>para Funcionários</h1>
						</Col>
					</Row>

					<Row>
						<Col md={4}>
							<Form>
								<Form.Group>
									<p>Proteja sua empresa e seus <br/> funcionários financeiramente.</p>
								</Form.Group>
								<Form.Group controlId="">
									<Form.Control type="text" placeholder="Seu nome" />
								</Form.Group>
								<Form.Group controlId="">
									<Form.Control type="tel" placeholder="Telefone para contato por Whatsapp" />
								</Form.Group>
								<Form.Group controlId="">
									<Form.Control
										as="select"
									>
										<option value="0">Número de funcionários</option>
										<option value="1">1</option>
										<option value="2">2</option>
										<option value="3">3</option>
									</Form.Control>
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

					<Row className="sou-cover--cards align-items-end">
						<Container>
							<Row>
								<Col md={{span: 10, offset: 1}}>
									<CardDeck className="sou-card sou-card--deck">
										<Card>
											<Card.Body>
												<Card.Text className="sou-card--text">Segurança empresarial</Card.Text>
												<Card.Title className="sou-card--title">O nosso seguro de vida em grupo cobre morte por COVID-19</Card.Title>
											</Card.Body>
										</Card>
										<Card>
											<Card.Body>
												<Card.Text className="sou-card--text">Receba apoio para</Card.Text>
												<Card.Title className="sou-card--title">Escolher as coberturas adequadas para sua empresa</Card.Title>
											</Card.Body>
										</Card>
										<Card>
											<Card.Body>
												<Card.Text className="sou-card--text">Oferecemos</Card.Text>
												<Card.Title className="sou-card--title">Apólice da empresa e de cada funcionário em tempo real</Card.Title>
											</Card.Body>
										</Card>
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
						<Col md={{span: 5, offset: 0}}>
							<h2 className="sou-title--xl sou-features--title">Seguro de Vida Coletivo <br/>para Funcionários</h2>
							<p className="sou-features--text">O seguro de vida coletivo (ou em grupo) proporciona mais tranquilidade para empresas, funcionários e seus familiares, que tem como principal função  minimizar impactos ocasionados por eventos inesperados como acidentes ou falecimento de funcionários.</p>
						</Col>
					</Row>
				</Container>
			</section>

			<section className="sou-features">
				<Container>
					<Row>
						<Col md={{span: 10, offset: 1}}>
							<CardDeck className="sou-card sou-card--deck">
								<Card>
									<Card.Body>
										<div className="sou-card--image">
											<IconSecuirty />
										</div>
										<Card.Title className="sou-card--title">Sua empresa protegida financeiramente</Card.Title>
										<Card.Text className="sou-card--text">
										<Link href="/">
											<a>Evite ações e indenizações </a>
										</Link>
										que podem prejudicar a saúde financeira de sua empresa</Card.Text>
									</Card.Body>
								</Card>
								<Card>
									<Card.Body>
										<div className="sou-card--image">
											<IconPeople />
										</div>
										<Card.Title className="sou-card--title">Funcionários e suas família protegidas</Card.Title>
										<Card.Text className="sou-card--text">É possível incluir coberturas para casos de invalidez e afastamento do trabalho, o que dá mais segurança ao funcionário e suas famílias</Card.Text>
									</Card.Body>
								</Card>
								<Card>
									<Card.Body>
										<div className="sou-card--image">
											<IconBank />
										</div>
										<Card.Title className="sou-card--title">Estar em conformidade com sindicatos</Card.Title>
										<Card.Text className="sou-card--text">Algumas convenções coletivas exigem que os proprietários ofereçam esse benefício a seus funcionários</Card.Text>
									</Card.Body>
								</Card>
							</CardDeck>
						</Col>
					</Row>
				</Container>
			</section>

			<section className="sou-features sou-features--advantages">
				<Container>
					<Row className="align-items-center">
						<Col md={4}>
							<h3 className="sou-features--title sou-color--blue">Empresas com Seguro de Vida Coletivo têm vantagens:</h3>
						</Col>
						<Col md={8}>
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
		</div>
	)
}


export default Home
