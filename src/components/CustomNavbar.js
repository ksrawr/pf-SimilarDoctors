import React, { Component } from 'react'
import { 
  Navbar, 
  ButtonToolbar, 
  DropdownButton,
  Dropdown
} from 'react-bootstrap'

export default class CustomNavbar extends Component {
	render() {
		const s = Object.values(this.props.specialities)
		const a = Object.values(this.props.areas)
		return(
			<div>
			<Navbar bg="primary">
          <Navbar.Brand>Similar Doctors</Navbar.Brand>
          <ButtonToolbar>
            <DropdownButton variant="primary" id="dropdown-basic-button" title="Rating">
              <Dropdown.Item onClick={() => {this.props.searchRating(5)}}>5</Dropdown.Item>
              <Dropdown.Item onClick={() => {this.props.searchRating(4)}}>4</Dropdown.Item>
              <Dropdown.Item onClick={() => {this.props.searchRating(3)}}>3</Dropdown.Item>
              <Dropdown.Item onClick={() => {this.props.searchRating(2)}}>2</Dropdown.Item>
              <Dropdown.Item onClick={() => {this.props.searchRating(1)}}>1</Dropdown.Item>
            </DropdownButton>
            <DropdownButton id="dropdown-basic-button" title="Specialties">
              {s.map((speciality, index) => {
              	return (
              		<Dropdown.Item key={index} onClick={() => {this.props.searchSpecialty({speciality})}}>{speciality}</Dropdown.Item>
              	)
              })}
            </DropdownButton>
            <DropdownButton id="dropdown-basic-button" title="Areas">
            	{a.map((area, index) => {
            		return (
            			<Dropdown.Item key={index} onClick={() => {this.props.searchArea({area})}}>{area}</Dropdown.Item>
            		)
            	})}
            </DropdownButton>
          </ButtonToolbar>
        </Navbar>
			</div>
			);
	}
}