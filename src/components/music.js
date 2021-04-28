import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

export default class Music extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this);

    this.state = {
      musics: [],
      filterMusics: [],
      filter: false,
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/music/")
      .then((response) => {
        if (response.data.length > 0) {
          this.setState({
            musics: response.data,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteExercise(id) {
    axios.delete("http://localhost:5000/music/" + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      musics: this.state.musics.filter((el) => el._id !== id),
    });
  }

  render() {
    console.log(this.state.musics);

    let displayMusic = this.state.filter ? this.state.filterMusics : this.state.musics ;

    console.log(displayMusic)

    //const music = this.state.musics && this.state.musics.length > 0;

    return (
      <div className="container-music">
        <button
          onClick={() => {
            this.setState({
              filter: false,
            });
          }}
        >
          ALL
        </button>
        <button
          style={{ backgroundColor: "black", color: "white" }}
          onClick={() => {
            this.setState({
              filterMusics: this.state.musics.filter((e) => e.genre === "Rap"),
              filter: true,
            });
          }}
        >
          Rap
        </button>
        <button
          style={{ backgroundColor: "green", color: "white" }}
          onClick={() => {
            this.setState({
              filterMusics: this.state.musics.filter(
                (e) => e.genre === "Reggae"
              ),
              filter: true,
            });
          }}
        >
          Reggae
        </button>

        <button
          style={{ backgroundColor: "red", color: "white" }}
          onClick={() => {
            this.setState({
              filterMusics: this.state.musics.filter((e) => e.genre === "Rock"),
              filter: true,
            });
          }}
        >
          Rock
        </button>

        <button
          style={{ backgroundColor: "yellow", color: "black" }}
          onClick={() => {
            this.setState({
              filterMusics: this.state.musics.filter((e) => e.genre === "Jazz"),
              filter: true,
            });
          }}
        >
          Jazz
        </button>

        <div>
          {
            displayMusic && displayMusic.length > 0 &&
            displayMusic.map((e, i) => (
              <div
                key={i}
                className="card-music"
                style={{
                  borderLeft:
                    (e.genre === "Rap" && "10px solid black") ||
                    (e.genre === "Reggae" && "10px solid green") ||
                    (e.genre === "Rock" && "10px solid red") ||
                    (e.genre === "Jazz" && "10px solid yellow"),
                }}
              >
                <p>
                  {e.artiste} - {e.nom}
                </p>
                <p>{e.genre}</p>
                <p>Proposé par : {e.auteur} </p>

                {
                  <iframe
                    height="500"
                    src={`https://www.youtube.com/embed/${e.url}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                }

                <button onClick={() => this.deleteExercise(e._id)}>
                  <svg
                    height="15pt"
                    viewBox="0 0 329.26933 329"
                    width="15pt"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="red"
                      d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"
                    />
                  </svg>
                </button>
              </div>
            ))}
        </div>
      </div>
    );
  }
}
