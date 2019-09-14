import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

function Card(props) {
    return (
      <div className="card">
        <img className="card-img-top" src={props.featureImage} alt="cap image" />
        <div className="card-body">
          <h5 className="card-title">{props.title} ({props.location})</h5>
          <p className="card-text">{props.description}</p>
          <a href={props.link} className="btn btn-primary">Learn more</a>
        </div>
      </div>
    );
  }
  

function CardList() {
    return (
      <div className="row">
        <div className="col-sm-4">
          <Card     
            featureImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUCWhlCmxksZS8kDyt54P85-tlhbgkD9pD-W1czoxcWDIH_mHZ"
            title="Vinyard"
            location="NY"
            description="Help us start a small vinyard in upsatate NY"
            link="https://sebhastian.com/interactive-react-form"
          />
        </div>
        <div className="col-sm-4">
          <Card     
            featureImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwCzj42s715lTEr-gMz6LjUPE_6slXI3Ls9GJkKyZB_5OyFgtN"
            title="Farm Hand"
            location="Mexico"
            description="Someone willing to get the eggs in the morning, weed beds, and work with animals"
            link="#"
          />
        </div>
        <div className="col-sm-4">
          <Card     
            featureImage="https://wiki.aalto.fi/download/attachments/95754650/1.png?api=v2"
            title="Community Arduino Hydroponics project"
            location="CA"
            description="community based project teaching kids about hydroponics"
            link="#"
          />
        </div>
        <div className="col-sm-4">
          <Card     
            featureImage="https://wiki.aalto.fi/download/attachments/95754650/1.png?api=v2"
            title="Community Arduino Hydroponics project"
            location="CA"
            description="community based project teaching kids about hydroponics"
            link="#"
          />
        </div>
      </div>
    );
  }
  function CardStack () {
      return (
        <div>
            <div>
                <CardList />
            </div>
            <div>
                <CardList />
            </div>
            <div>
                <CardList />
            </div>
        </div>

      );
  }

ReactDOM.render(<CardStack />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
