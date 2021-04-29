import React, { Component } from 'react';
import { Link } from 'react-scroll'

export default class navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/" className="navbar-brand" href="#">Share Musique</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/createMusic" className="nav-link" href="#"data-testid="lien">{this.props.label}</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
