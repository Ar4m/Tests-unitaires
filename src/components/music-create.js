import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class MusicCreate extends Component {
  constructor(props) {
    super(props);

    this.onChangeNom = this.onChangeNom.bind(this);
    this.onChangeArtiste = this.onChangeArtiste.bind(this);
    this.onChangeGenre = this.onChangeGenre.bind(this);
    this.onChangeUrl = this.onChangeUrl.bind(this);
    this.onChangeAuteur = this.onChangeAuteur.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      nom: "",
      artiste: "",
      genre: "",
      auteur: "",
      url: "",
      date: new Date(),
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/music/")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangeNom(e) {
    this.setState({
      nom: e.target.value,
    });
  }

  onChangeArtiste(e) {
    this.setState({
      artiste: e.target.value,
    });
  }

  onChangeGenre(e) {
    this.setState({
      genre: e.target.value,
    });
  }

  onChangeUrl(e) {
    this.setState({
      url: e.target.value,
    });
  }

  onChangeAuteur(e) {
    this.setState({
      auteur: e.target.value,
    });
  }

  onChangeDate(date) {
    this.setState({
      date: date,
    });
  }


  onSubmit(e) {
    const finalUrl = this.state.url.split("https://www.youtube.com/watch?v=");

    e.preventDefault();

    const music = {
      nom: this.state.nom,
      artiste: this.state.artiste,
      genre: this.state.genre,
      auteur: this.state.auteur,
      url: finalUrl[1],
      date: this.state.date,
    };

    axios
      .post("http://localhost:5000/music/add", music)
      .then((res) => console.log(res.data));
      window.location = "/";

  }

  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Nom: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.nom}
              onChange={this.onChangeNom}
            />
          </div>
          <div className="form-group">
            <label>Artiste: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.artiste}
              onChange={this.onChangeArtiste}
            />
          </div>
          <div className="form-group">
            <label>Genre: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.genre}
              onChange={this.onChangeGenre}
            />
          </div>
          <div className="form-group">
            <label>Url: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.url}
              onChange={this.onChangeUrl}
            />
          </div>

          <div className="form-group">
            <label>Qui propose cette musique ? </label>
            <input
              type="text"
              className="form-control"
              value={this.state.auteur}
              onChange={this.onChangeAuteur}
            />
          </div>
          <div className="form-group">
            <label>Date: </label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Ajouter la musique"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
