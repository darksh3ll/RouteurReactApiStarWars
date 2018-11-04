import React from "react"


const DisplayScore = ({peoples}) => {
    return (
        <div className="Cards-Peoples">
            <div className="row">
                {
                    peoples.map((x, index) => {
                        return (
                            <div key={index} className="PEOPLE col-md-4" >
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <div className="media">
                                            <img className="mr-3" src={x.image} width="64" alt={x.name}/>
                                            <div className="media-body">
                                                <h5 className="mt-0">{x.name}</h5>
                                                <button className="btn btn-dark">Plus info</button>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};


export default DisplayScore