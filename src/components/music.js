import React, { Component } from "react";
import axios from "axios";

export default class Music extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this);

    this.state = {
      musics: [],
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

    const music = this.state.musics && this.state.musics.length > 0;

    return (
      <div className="container-music">
        <button>ALL</button>
        <button>Rap</button>
        <button>Rock</button>

        <div >
          {this.state.musics.length > 0 &&
            this.state.musics.map((e, i) => (
              <div className="card-music">
                <p>
                  {e.artiste} - {e.nom}
                </p>
                <p>Rap</p>
                <p>Proposé par : {e.auteur} </p>

                {(
                  <p>
                    <a href={e.url}>{e.url}</a>
                  </p>
                )}

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
