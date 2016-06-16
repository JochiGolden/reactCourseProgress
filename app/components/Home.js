var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var MainContentWrapper = require('./MainContentWrapper');

function Home() {
  return (
    <MainContentWrapper>
      <h1>Github Battle</h1>
      <p className="lead">Game copy line</p>
      <Link to="/playerOne">
        <button type="button" className="btn btn-lg btn-success">Get Started</button>
      </Link>
    </MainContentWrapper>
  )
}

module.exports = Home;