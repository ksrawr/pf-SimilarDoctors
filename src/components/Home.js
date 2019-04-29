import React, { Component } from 'react';
import '../App.css';
import { base } from "../config/config.js"
import CustomNavbar from "./CustomNavbar"
import DoctorInfo from "./DoctorInfo"

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      areas: [],
      specialities: []
    };

  }

  componentWillMount() {
    this.doctorsRef = base.syncState('doctors', {
      context: this,
      state: 'data'
    });

    this.specialitiesRef = base.syncState('specialities', {
      context: this,
      state: 'specialities'
    })

    this.areasRef = base.syncState('areas', {
      context: this,
      state: 'areas'
    })
  }

  componentWillUnmount() {
    base.removeBinding(this.doctorsRef);
  }

  handleRating = e => {
    const copyData = this.convertObject(this.state.data)
    let dataHead = []
    let dataTail = []

    copyData.forEach((doctor, index) => {
      if(doctor.rating === e) {
        dataHead.push(doctor)
      }
      else {
        dataTail.push(doctor)
      }
    })

    dataHead.sort(function(a,b) {
      return b.rating - a.rating
    })

    const resultHeadAndTail = dataHead.concat(dataTail)

    this.setState({
      data: resultHeadAndTail
    })
  }

  handleSpecialty = e => {
    const copyData = this.convertObject(this.state.data)
    let dataHead = []
    let dataTail = []

    copyData.forEach((doctor, index) => {
      if(doctor.speciality === e.speciality) {
        dataHead.push(doctor)
      }
      else {
        dataTail.push(doctor)
      }
    })

    dataHead.sort(function(a,b) {
      return b.rating - a.rating
    })

    const resultHeadAndTail = dataHead.concat(dataTail)

    this.setState({
      data: resultHeadAndTail
    })
  }

  handleArea = e => {
    const copyData = this.convertObject(this.state.data)
    let dataHead = []
    let dataTail = []

    copyData.forEach((doctor, index) => {
      if(doctor.areas === e.area) {
        dataHead.push(doctor)
      }
      else {
        dataTail.push(doctor)
      }
    })

    dataHead.sort(function(a,b) {
      return b.rating - a.rating
    })

    const resultHeadAndTail = dataHead.concat(dataTail)

    this.setState({
      data: resultHeadAndTail
    })
  }

  convertObject(x) {
    if(Array.isArray(x)) {
      return x;
    }
    else {
      // Assumbing x is object we convert
      const arr = Object.values(x)

      return arr;
    }
  }

  render() {
    return (
      <div>
        <CustomNavbar
          areas={this.state.areas}
          specialities={this.state.specialities}
          searchRating={this.handleRating}
          searchSpecialty={this.handleSpecialty}
          searchArea={this.handleArea}
        />
        <br/>
        <DoctorInfo
          doctors={this.state.data}
          convertObject={this.convertObject}
          areas={this.state.areas}
          specialities={this.state.specialities}
          doctorsList={this.state.data}
        />
      </div>
    );
  }
}

export default Home;