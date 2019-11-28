import React, { Component } from 'react';
import axios from 'axios';


export default class CreateParks extends Component {
    constructor(props){
        super(props);

        this.onChangeParkname = this.onChangeParkname.bind(this);
        this.onChangeParkinglots = this.onChangeParkinglots.bind(this);
        this.onChangeParkinglotsavailable = this.onChangeParkinglotsavailable.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            parkname: '',
            parkinglots:0,
            parkinglotsavailable: 0
        }
    }


    onChangeParkname(e){
        this.setState({
            parkname: e.target.value
        });
    }
    onChangeParkinglots(e){
        this.setState({
            parkinglots: e.target.value
        });
    }
    onChangeParkinglotsavailable(e){
        this.setState({
            parkinglotsavailable: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const park = {
            parkname: this.state.parkname,
            parkinglots: this.state.parkinglots,
            parkinglotsavailable: this.state.parkinglotsavailable
        }

        console.log(park);
        
        axios.post('http://backend-carparking.apps.us-east-2.starter.openshift-online.com/parks/add',park)
            .then(res => {
                console.log(res.data);
                window.location = '/';
            });
    }

    render(){
        return(
            <div>
                <h3>Criar novo estacionamento</h3> 
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Estacionamento: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.parkname}
                            onChange={this.onChangeParkname}
                            />
                    </div>
                    <div className="form-group">
                        <label>Total de Vagas: </label>
                        <input type="text"
                            required
                            className="form-control"
                            pattern="[0-9]*"
                            maxLength="4"
                            value={this.state.parkinglots}
                            onChange={this.onChangeParkinglots}
                            />
                    </div>
                    <div className="form-group">
                        <label>Vagas disponíveis: </label>
                        <input type="text"
                            required
                            className="form-control"
                            pattern="[0-9]*"
                            maxLength="4"
                            value={this.state.parkinglotsavailable}
                            onChange={this.onChangeParkinglotsavailable}
                            />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Salvar" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    }
}