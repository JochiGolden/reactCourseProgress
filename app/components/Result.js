var React = require('react');
var PropTypes = React.PropTypes;
var Link = require('react-router').Link;
var styles = require('../styles');
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');
var MainContentWrapper = require('./MainContentWrapper');

function StartOverBtn () {
  return (
    <div className="col-sm-12" style={styles.space}>
      <Link to="/playerOne">
        <button type="button" className="btn btn-lg btn-danger">Start Over</button>
      </Link>
    </div>
  );
}

function Result (props) {
  
  if (props.isLoading === true) {
    return (
      <MainContentWrapper>LOADING!!</MainContentWrapper>
    );
  }
  
  if (props.scores[0] === props.scores[1]) {
    return (
      <MainContentWrapper>
        <h1>Tie!</h1>
        <StartOverBtn />
      </MainContentWrapper>
    );
  }
  
  var winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
  var losingIndex = winningIndex === 0 ? 1 : 0;
  
  return (
    <MainContentWrapper>
      <div>
        <h1>Results</h1>
        <div className="col-sm-8 col-sm-offset-2">
          <UserDetailsWrapper header="Winner">
            <UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]} />
          </UserDetailsWrapper>
          <UserDetailsWrapper header="Loser">
            <UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]} />
          </UserDetailsWrapper>
        </div>
      </div>
      <StartOverBtn />
    </MainContentWrapper>
  );
}

Result.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
};

module.exports = Result;