import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Park = props => (
    <tr>
        <td>{props.park.parkname}</td>
        <td>{props.park.parkinglots}</td>
        <td>{props.park.parkinglotsavailable}</td>
        <td>
            <Link to={"/edit/" + props.park._id}>editar</Link> | <a href="#" onClick={() => { props.deletePark(props.park._id)}}>apagar</a>
        </td>
    </tr>
)

export default class ParksList extends Component {
    constructor(props){
        super(props);

        this.deletePark = this.deletePark.bind(this);

        this.state = {parks: []};
    }

    componentDidMount(){
        axios.get('http://backend-carparking.apps.us-east-2.starter.openshift-online.com/parks/')
            .then(response => {
                this.setState({parks: response.data})
            })    
            .catch((error) => {
                console.log(error);
            })
    }

    deletePark(id) {
        axios.delete('http://backend-carparking.apps.us-east-2.starter.openshift-online.com/parks/'+id)
            .then(res => console.log(res.data));

        this.setState({
            parks: this.state.parks.filter(el => el._id !== id)
        });
    }

    parksList(){
        return this.state.parks.map(currentpark => {
            return <Park park={currentpark} deletePark={this.deletePark} key={currentpark._id}/>;
        })
    }

    render(){
        return(
            <div>
                <h3>Estacionamentos registrados</h3>
                <table className="table">
                    <thead className="tread-light">
                        <tr>
                            <th>Estacionamento</th>
                            <th>Total de vagas</th>
                            <th>Vagas disponíveis</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.parksList()}
                    </tbody>
                </table>
            </div>
        );
    }
}