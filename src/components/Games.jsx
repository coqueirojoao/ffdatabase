import React from "react";
import { Link } from "react-router-dom";
import ReactLoading from 'react-loading';

export default class Games extends React.Component {

  state = {
    isLoading: true,
    games: [],
  }

  componentDidMount() {
    this.fetchGames()
  }

  fetchGames = async () => {
    const request = await fetch('https://www.moogleapi.com/api/v1/games');
    const response = await request.json();
    const games = response.filter((_e, i) => i <= 14);
    console.log(games);
    this.setState({
    isLoading: false,
      games,
    })
  }
  render() {
    const { games, isLoading } = this.state;
    return(
      <div className="container">
        <div className="d-flex flex-column align-items-center">
        <h1 className="text-center text-black-50 display-1 mt-2">Welcome to your FF database!</h1>
        <img src="https://www.pinclipart.com/picdir/big/449-4494479_moogle-png-final-fantasy-mog-png-clipart.png" alt="moogle" className="headerimg" />
        </div>
        <div className="row gap-1 mt-5 p-2">
        { isLoading ? <ReactLoading type="spin" color="grey" className="mx-auto" /> : 
        games.map(({ description, picture, title, gameId }) => (
          <div key={title} className="col col-12 col-xl-4 shadow p-3 mb-5 bg-body rounded mx-auto">
            <div className="d-flex justify-content-center">
            <img src={picture} alt={title} className="w-75"/>
            </div>
            <p className="text-center fw-lighter fs-6 mt-4">{ description }</p>
            <div className="d-flex justify-content-center">
            <Link to={`/game/${ title }`}><button className="btn btn-outline-success">See more...</button></Link>
            </div>
          </div>
        ))}
        </div>
      </div>
    )
  }
}