import { render } from '@testing-library/react';
import React from 'react';
import reactDom from 'react-dom';
import ReactDOM from 'react-dom';
import './index.css';

// ///////////////////////////////////////////////////////////////////

// function formatDate(date) {
//   return date.toLocaleDateString();
// }

// function Avatar(props) {
//   return (
//     <img className="Avatar"
//       src={props.user.avatarUrl}
//       alt={props.user.name}
//     />
//   );
// }

// function InfoUser(props) {
//   return (
//     <div className="InfoUser">
//       <Avatar user={props.user} />
//       <div className="InfoUser-name">
//         {props.user.name}
//       </div>
//     </div>
//   );
// }

// function Comment(props) {
//   return (
//     <div className="Comment">
//       <InfoUser user={props.author} />
//       <div className="Comment-text">
//         {props.text}
//       </div>
//       <div className="Comment-date">
//         {formatDate(props.date)}
//       </div>
//     </div>
//   );
// }

// const comment = {
//   date: new Date(),
//   text: 'I hope you enjoy learning React!',
//   author: {
//     name: 'Hello Kitty',
//     avatarUrl: 'https://placekitten.com/g/64/64',
//   },
// };

// ReactDOM.render(
//   <Comment
//     date={comment.date}
//     text={comment.text}
//     author={comment.author}
//   />,
//   document.getElementById('root')
// );

// ///////////////////////////////////////////////////////////////////

// function Clock(props) {
//   return (
//     <div>
//       <h1>Ciao, mondo!</h1>
//       <h2>Sono le {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   )
// }

// function tick() {
//   ReactDOM.render(
//     <Clock />,
//     document.getElementById('root')
//   );
// }

// setInterval(tick, 1000);

// ///////////////////////////////////////////////////////////////////


// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { date: new Date() };
//   }

//   componentDidMount() {
//     this.timerId = setInterval(
//       () => this.tick(),
//       1000
//     );
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerId);
//   }

//   tick() {
//     this.setState({
//       date: new Date()
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Ciao, mondo!</h1>
//         <h2>Sono le {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }

// function App() {
//   return (
//     <div>
//       <Clock />
//       <Clock />
//       <Clock />
//       <Clock />
//       <Clock />
//       <Clock />
//       <Clock />
//       <Clock />
//     </div>
//   )
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// ///////////////////////////////////////////////////////////////////

// class Interruttore extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {acceso: true};

//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState(prevState => ({
//       acceso: !prevState.acceso
//     }));
//   }

//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.acceso ? 'Acceso' : 'Spento'}
//       </button>
//     );
//   }
// }

// reactDom.render(
//   <Interruttore />,
//   document.getElementById('root')
// );

// ///////////////////////////////////////////////////////////////////

// function BenvenutoUtente (props) {
//   return <h1>Bentornato!</h1>;
// }

// function BenvenutoOspite (props) {
//   return <h1>Autenticati</h1>
// }

// function Benvenuto (props) {
//   const utenteAutenticato = props.utenteAutenticato;

//   if (utenteAutenticato) {
//     return <BenvenutoUtente />;
//   }
//   return <BenvenutoOspite />;
// }

// function BottoneLogin(props) {
//   return <button onClick={props.onClick}>Login</button>
// }

// function BottoneLogout(props) {
//   return <button onClick={props.onClick}>Logout</button>
// }
// class ControlloLogin extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleLoginClick = this.handleLoginClick.bind(this);
//     this.handleLogoutClick = this.handleLogoutClick.bind(this);
//     this.state = {utenteAutenticato: false};
//   }

//   handleLoginClick() {
//     this.setState({utenteAutenticato: true});
//   }

//   handleLogoutClick() {
//     this.setState({utenteAutenticato: false});
//   }

//   render() {
//     const utenteAutenticato = this.state.utenteAutenticato;
//     let bottone;

//     if (utenteAutenticato) {
//       bottone = (
//         <BottoneLogout onClick={this.handleLogoutClick} />
//       );
//     } else {
//       bottone = (
//         <BottoneLogin onClick={this.handleLoginClick} />
//       );
//     }

//     return (
//       <div>
//         <Benvenuto utenteAutenticato={utenteAutenticato} />
//         {bottone}
//       </div>
//     );
//   }
// }

// reactDom.render(
//   <ControlloLogin />,
//   document.getElementById('root')
// );

// ///////////////////////////////////////////////////////////////////

// function CasellaDiPosta(props) {
//   const messaggiNonLetti = props.messaggiNonLetti;
//   return (
//     <div>
//       <h1>Ciao!</h1>
//       {messaggiNonLetti.length > 0 && (
//         <h2>
//           Hai {messaggiNonLetti.length} messaggi non letti.
//         </h2>
//       )}
//     </div>
//   );
// }

// const messaggi = ['React', 'Re: React', 'Re: Re: React'];

// reactDom.render(
//   <CasellaDiPosta messaggiNonLetti={messaggi} />,
//   document.getElementById('root')
// );

// ///////////////////////////////////////////////////////////////////

// function MessaggioAvviso(props) {
//   if (!props.attenzione) {
//     return null;
//   }

//   return <div className="warning">Attenzione!</div>
// }

// class Pagina extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { mostraAvviso: true };
//     this.handleToggleClick = this.handleToggleClick.bind(this);
//   }


//   handleToggleClick() {
//     this.setState(state => ({
//       mostraAvviso: !state.mostraAvviso,
//     }));
//   }

//   render() {
//     return (
//       <div>
//         <MessaggioAvviso
//           attenzione={this.state.mostraAvviso}
//         />
//         <button onClick={this.handleToggleClick}>
//           {this.state.mostraAvviso ? 'Nascondi' : 'Mostra'}
//         </button>
//       </div>
//     );
//   }
// }
// reactDom.render(
//   <Pagina />,
//   document.getElementById('root')
// );

// ///////////////////////////////////////////////////////////////////

// function Numero (props) {
//   return <li>{props.valore}</li>;
// }

// function ListaNumeri(props) {
//   const numeri = props.numeri;
//   const lista = numeri.map((numero) =>
//     <Numero key={numero.toString()} valore={numero} />
//   );
//   return (
//     <ul>{lista}</ul>
//   );
// }

// const numeri = [1, 2, 3, 4, 5, 6];

// reactDom.render(
//   <ListaNumeri numeri={numeri} />,
//   document.getElementById('root')
// );

// ///////////////////////////////////////////////////////////////////

// function Blog (props) {
//   const sidebar = (
//     <ul>
//       {props.articoli.map((articolo) =>
//       <li key={articolo.id}>
//         {articolo.titolo}
//       </li>
//       )}
//     </ul>
//   );
//   const contenuto = props.articoli.map((articolo) =>
//         <div key={articolo.id}>
//           <h3>{articolo.titolo}</h3>
//           <p>{articolo.testo}</p>
//         </div>
//   );
//   return (
//     <div>
//       {sidebar}
//       <hr/>
//       {contenuto}
//     </div>
//   );
// }

// const articoli = [
//   {id: 1, titolo: 'Ciao Mondo', testo: 'Benvenuto in imparando React!'},
//   {id: 2, titolo: 'Installazione', testo: 'Puoi installare React usando npm.'}
// ];

// ReactDOM.render(
//   <Blog articoli={articoli} />,
//   document.getElementById('root')
// );

// ///////////////////////////////////////////////////////////////////

// class FormNome extends React.Component {
//   constructor (props) {
//     super(props);
//     this.state = {value: ''};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     alert ('E\' stato inserito un nome: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Nome:
//           <input type='text' value={this.state.value} onChange={this.handleChange} />
//         </label>
//         <input type='submit' value='Submit' />
//       </form>
//     )
//   }
// }

// ReactDOM.render(
//   <FormNome />,
//   document.getElementById('root')
// );

// ///////////////////////////////////////////////////////////////////

// class FormTema extends React.Component {
//   constructor (props) {
//     super(props);
//     this.state = {
//       value: 'Per favore scrivi un tema riguardo il tuo elemento Dom preferito.'
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('Un tema è stato inviato: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return(
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Tema:
//           <textarea value={this.state.value} onChange={this.handleChange} />
//         </label>
//         <input type='submit' value='Submit'/>
//       </form>
//     )
//   }
// }

// reactDom.render(
//   <FormTema />,
//   document.getElementById('root')
// );

// ///////////////////////////////////////////////////////////////////

// class FormGusti extends React.Component {
//   constructor (props) {
//     super(props);
//     this.state = {value: 'cocco'};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('Il tuo gusto preferito è: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//       <label>
//         Seleziona il tuo gusto preferito:
//         <select value={this.state.value} onChange={this.handleChange}>
//           <option value='pompelmo'>Pompelmo</option>
//           <option value='limone'>Limone</option>
//           <option value='pistacchio'>Pistacchio</option>
//           <option value='cocco'>Cocco</option>
//         </select>
//       </label>
//       <input type='submit' value='Submit' />
//     </form>
//     );
//   }
// }

// reactDom.render(
//   <FormGusti />,
//   document.getElementById('root')
// );

// ///////////////////////////////////////////////////////////////////

// class Prenotazione extends React.Component {
//   constructor (props) {
//     super(props);
//     this.state = {
//       presente: true,
//       numeroOspiti: 2,
//     };

//     this.handleInputChange = this.handleInputChange.bind(this);
//   }

//   handleInputChange(event) {
//     const target = event.target;
//     const value = target.type === 'checkbox' ? target.checked : target.value;
//     const name = target.name;

//     this.setState({
//       [name]: value,
//     })
//   }
//   render() {
//     return (
//       <form>
//         <label>
//           Sarà presente:
//           <input 
//             name='presente'
//             type='checkbox'
//             checked={this.state.presente}
//             onChange={this.handleInputChange}
//           />
//         </label>
//         <br/>
//         <label>
//           Numero di ospiti:
//           <input
//             name='numeroOspiti'
//             type='number'
//             value={this.state.numeroOspiti}
//             onChange={this.handleInputChange}
//           />
//         </label>
//       </form>
//     );
//   }
// }

// reactDom.render(
//   <Prenotazione />,
//   document.getElementById('root')
// );

// ///////////////////////////////////////////////////////////////////

function VerdettoEbollizione(props) {
  if (props.celsius >= 100) {
    return <p>L'acqua bollirebbe.</p>;
  }
  return <p>L'acqua non bollirebbe.</p>;
}

const scale = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

class InputTemperatura extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperatura: ''};
  }

  handleChange(e) {
    this.props.onChangeTemperatura(e.target.value)
  }

  render() {
    const temperatura = this.props.temperatura;
    const scala = this.props.scala;
    return (
      <fieldset>
        <legend>Inserisci la temperatura in gradi Celsius</legend>
        <input 
          value={temperatura}
          onChange={this.handleChange}
        />
      </fieldset>
    );
  }
}
class Calcolatore extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeCelsius = this.handleChangeCelsius.bind(this);
    this.handleChangeFahrenheit = this.handleChangeFahrenheit.bind(this);
    this.state = {temperatura: '', scala: 'c'};
  }

  handleChangeCelsius(temperatura) {
    this.setState({scala: 'c', temperatura});
  }

  handleChangeFahrenheit(temperatura) {
    this.setState({scala: 'f', temperatura});
  }

  render() {
    const scala = this.state.scala;
    const temperatura = this.state.temperatura;
    const celsius = scala === 'f' ? conversione(temperatura, toCelsius) : temperatura;
    const fahrenheit = scala === 'c' ? conversione(temperatura, toFahrenheit) : temperatura;
    return (
      <div>
        <InputTemperatura 
        scala='c'
        temperatura={celsius}
        onChangeTemperatura={this.handleChangeCelsius} />
        <InputTemperatura 
        scala='f'
        temperatura={fahrenheit}
        onChangeTemperatura={this.handleChangeFahrenheit} />
        <VerdettoEbollizione 
          celsius = {parseFloat(celsius)}
        />
      </div>
    );
  }
}

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function conversione(temperatura, converti) {
  const input = parseFloat(temperatura);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = converti(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

ReactDOM.render(
  <Calcolatore />,
  document.getElementById('root')
);