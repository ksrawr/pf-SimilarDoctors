import React, { Component } from 'react'
import { Button, Card, Navbar, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class DoctorDetail extends Component {

	constructor(props) {
		super(props)

		this.state = {
			similarDoctors: []
		}
	}

	getSimilarDoctors(x) {
		const tempSpecialty = this.props.location.state.specialty
		const tempName = this.props.location.state.name
		const dataArray = this.convertObject(x)
		let results = []

		dataArray.forEach((doctor, index) => {
			if(doctor.speciality === tempSpecialty && doctor.name !== tempName) {
				results.push(doctor)
			}
		})

		results.sort(function(a,b) {
			return b.rating - a.rating;
		})

		return results
	}

	convertObject(x) {
    if(Array.isArray(x) || x === null || x === undefined ) {
      return x;
    }
    else {
      // Assumbing x is object we convert
      const arr = Object.values(x)

      return arr;
    }
  }

	render() {
		const data = this.getSimilarDoctors(this.props.location.state.doctorData)
		return(
			<React.Fragment>
	      <Navbar bg="primary">
	      	<Link to="/">
	      		<Navbar.Brand>Similar Doctors</Navbar.Brand>
	      	</Link>
	      </Navbar>
      	<Card>
      		<Card.Header>{this.props.location.state.name}</Card.Header>
      		<Container>
      		<Card.Body>
      			<Card.Title>
      				{this.props.location.state.name}
      			</Card.Title>
      			<Card>
      				<Card.Body>
      					Specialty: {this.props.location.state.specialty}
      				</Card.Body>
      			</Card>
      			<Card>
      				<Card.Body>
      					Rating: {this.props.location.state.rating}
      				</Card.Body>
      			</Card>
      			<Card>
      				<Card.Body>
      					Area: {this.props.location.state.area}
      				</Card.Body>
      			</Card>
      			<br/>
      		</Card.Body>
      	</Container>
      	</Card>
      	<Card>
      		<Card.Header>Doctors Like This...</Card.Header>
      		<Card.Body>
      			<Container>
      				<Row>
      					<Col></Col>
      					{data.map((doctor, index) => {
      						return (
      								<Card style={{ width: '18rem' }} key={index}>
											  <Card.Header>{doctor.name}</Card.Header>
											  <Card.Body>
												  <Card.Title>Specialty: {doctor.speciality}</Card.Title>
												  <Card.Subtitle className="mb-2 text-muted">Area: {doctor.areas}</Card.Subtitle>
												  <Card.Text>Rating: {doctor.rating}</Card.Text>
												  <Link to={{
											    	pathname: '/doctors/' + doctor.name,
											    	state: {
											    		name: doctor.name,
											    		specialty: doctor.speciality,
											    		rating: doctor.rating,
											    		area: doctor.areas,
											    		doctorData: this.props.location.state.doctorData					    		
											    	},
											    }}
											    >
												  <Button variant="primary">More Info</Button>
												  </Link>
											 	</Card.Body>
											</Card>
      						)
      					})}
      					<Col></Col>
      				</Row>
      			</Container>
      		</Card.Body>
      	</Card>
      </React.Fragment>
		)
	}
}