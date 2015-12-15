var React = require('react');
var $ = require('jquery');

var AddChat = React.createClass({

  getDefaultProps: function () {
    return {
      url: "https://api.parse.com/1/classes/chat"
    };
  },

  propTypes: {
    url: React.PropTypes.string.isRequired
  },

  addChat: function () {
    $.ajax({
      url: this.props.url,
      type: 'POST',
      data: JSON.stringify({ text: this.refs.newChatInput.getDOMNode().value }),
      beforeSend: function (request) {
        request.setRequestHeader("X-Parse-Application-Id", 'lxWtVLMvV2qGFpyKiexjqJlddP7DHfnmaVeROm3Q');
        request.setRequestHeader("X-Parse-REST-API-Key", 'eIUhXSoxR5KGNXTXBAkKttRSqGsZfF8o6qxwq6mY');
        request.setRequestHeader("Content-Type", 'application/json');
      },
      error: function () {
        console.log('error on post');
      },
      sucess: function () {
        this.refs.newChatInput.getDOMNode().value = '';
        console.log('Successful Post');
      }.bind(this)
    });
  },

  handleSubmit: function (e) {
    if (e.keyCode === 13) {
      this.addChat();
    }
  },

  render: function () {
    return (
      <div className="form-group" >
      <input 
          type="text"
          ref='newChatInput' placeholder="Compose Message"
          className="form-control"
          onKeyDown={this.handleSubmit} />
      </div>
    )
  }
});

module.exports = AddChat;