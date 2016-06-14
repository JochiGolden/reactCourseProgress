var React = require('react');
var PropTypes = React.PropTypes;

function puke (obj) {
  return <pre>{JSON.stringify(obj, 2, ' ')}</pre>
}

function Result (props) {
  return (
    <div> Results: {props.scores[0]} to {props.scores[1]}</div>
  );
}

Result.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
};

module.exports = Result;