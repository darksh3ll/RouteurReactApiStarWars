import React, {Component} from 'react';
import NavLink from "react-router-dom/es/NavLink";

class Display2 extends Component {

    render() {
        return (
            <div>
                <div className="row">

                    {this.props.peoples
                        .filter(people =>  people.name.includes(this.props.valeur))
                        .map((people, index) => (
                            <div className="card col-sm-3 d-flex justify-content-around" key={index}>
                                <img className="card-img-top shadow-lg p-3 mb-5 bg-white rounded "
                                     width={250}
                                     height={400}
                                     src={people.image}
                                     alt="#"
                                />
                                    <div className="card-body">
                                        <h5 className="card-title">{people.name}</h5>
                                        <NavLink
                                            exact to="/Info">
                                            <a href="#" className="btn btn-dark">Plus info</a>
                                        </NavLink>

                                    </div>
                            </div>
                        ))}
            </div>
            </div>
        );
    }
}

export default Display2;