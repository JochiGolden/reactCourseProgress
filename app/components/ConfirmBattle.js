var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');

function spittle (obj) {
  return <pre>{JSON.stringify(obj, null, ' ')}</pre>
}


function ConfirmBattle (props) {
  return props.isLoading === true
      ? <p> LOADING!! </p>
      : <div class="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
          <h1>Confirm Players</h1>
          <div class="col-sm-8 col-sm-offset-2">
            <div class="col-sm-6">
              <p class="lead">Player 1</p>
                {spittle(props.playerInfo[0])}
            </div>
            <div class="col-sm-6">
              <p class="lead">Player 2</p>
                {spittle(props.playerInfo[1])}
            </div>
          </div>
          <div class="col-sm-8 col-sm-offset-2">
            <div class="col-sm-12" style={styles.space}>
              Initiate Battle Button
            </div>
            <div class="col-sm-12" style={styles.space}>
              Link to /playerOne
            </div>
          </div>
        </div>
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onInitiateBattle: PropTypes.func.isRequired,
  playerInfo: PropTypes.array.isRequired
}    

module.exports = ConfirmBattle;