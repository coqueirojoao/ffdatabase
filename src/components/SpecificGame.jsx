import React from "react";
import { Link } from "react-router-dom";
import ReactLoading from 'react-loading';

export default class SpecificGame extends React.Component {
    state = {
        isLoading: true,
        newGame: '',
        characters: [],
    }

    componentDidMount() {
        const { match : { params: { id } } } = this.props;
        const newId = id.split('');
        if( newId[14] === '0' ) {
        newId.splice(('14'), '1')
        }
        const titleName = newId.join('');
        let newGame = '';
        if (titleName === 'Final Fantasy 1') {
            newGame = 'Final Fantasy'
        }
        if (titleName === 'Final Fantasy 2') {
            newGame = 'Final Fantasy II'
        }
        if (titleName === 'Final Fantasy 3') {
            newGame = 'Final Fantasy III'
        }
        if (titleName === 'Final Fantasy 4') {
            newGame = 'Final Fantasy IV'
        }
        if (titleName === 'Final Fantasy 5') {
            newGame = 'Final Fantasy V'
        }
        if (titleName === 'Final Fantasy 6') {
            newGame = 'Final Fantasy VI'
        }
        if (titleName === 'Final Fantasy 7') {
            newGame = 'Final Fantasy VII'
        }
        if (titleName === 'Final Fantasy 8') {
            newGame = 'Final Fantasy VIII'
        }
        if (titleName === 'Final Fantasy 9') {
            newGame = 'Final Fantasy IX'
        }
        if (titleName === 'Final Fantasy 10') {
            newGame = 'Final Fantasy X'
        }
        if (titleName === 'Final Fantasy 10-2') {
            newGame = 'Final Fantasy X-2'
        }
        if (titleName === 'Final Fantasy 12') {
            newGame = 'Final Fantasy XII'
        }
        if (titleName === 'Final Fantasy 13') {
            newGame = 'Final Fantasy XIII'
        }
        if (titleName === 'Final Fantasy 13-2') {
            newGame = 'Final Fantasy XIII-2'
        }
        if (titleName === 'Final Fantasy 15') {
            newGame = 'Final Fantasy XV'
        }
        this.fetchCharacters(newGame);
    }

    fetchCharacters = async (id) => {
        const request = await fetch('https://www.moogleapi.com/api/v1/characters');
        const response = await request.json();
        const characters = response.filter((e) => e.origin === id);
        console.log(characters)
        this.setState({
            newGame: id,
            characters,
            isLoading: false,
        })
    }
    render() {
        const { characters, newGame, isLoading } = this.state
        return(
                <div className="container">
        <h1 className="text-center text-black-50 display-1 mt-2">{`${newGame} Characters`}</h1>
        <div className="d-flex justify-content-center mt-5">
        <Link to='/'><button className="btn btn-outline-secondary">Return to home!</button></Link>
        </div>
        <div className="row gap-1 mt-5 p-2">
        { isLoading ? <ReactLoading type="spin" color="grey" className="mx-auto" /> :
        characters.map(({ description, pictures, name }) => (
          <div key={name} className="col col-12 col-xl-4 shadow p-3 mb-5 bg-body rounded mx-auto">
            <p className="text-center display-2">{name}</p>
            <div className="d-flex justify-content-center">
            <img src={pictures.length > 0 ? pictures[0].url : null} alt={name} className="w-75"/>
            </div>
            <p className="text-center fw-lighter fs-6 mt-4">{ description ? description : 'Description is undefined ):' }</p>
          </div>
        ))}
        </div>
      </div>
        )
    }
}