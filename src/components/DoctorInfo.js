import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './DoctorInfo.css'

export default class DoctorInfo extends Component {

	render() {
		const d = this.props.convertObject(this.props.doctors)
		return (
			<React.Fragment>
			<div>
				{d.map((data, index) => {
					return(
						<Card className="text-center" key={index}>
						  <Card.Header as="h4">Dr. {data.name}</Card.Header>
						  <Card.Body>
						    <Card.Title>Specialty: {data.speciality}</Card.Title>
						    <Card.Subtitle className="mb-2 text-muted">{data.areas}</Card.Subtitle>
						    <Card.Text>
						    	Rating: {data.rating}
						    </Card.Text>
						    <Link to={{
						    	pathname: '/doctors/' + data.name,
						    	state: {
						    		name: data.name,
						    		specialty: data.speciality,
						    		rating: data.rating,
						    		area: data.areas,
						    		doctorData: this.props.doctorsList					    		
						    	},
						    }}
						    >
						    <Button variant="primary">More Info</Button>
						    </Link>
						  </Card.Body>
						</Card>
					)
				})}
			</div>
			</React.Fragment>
			)
	}
}