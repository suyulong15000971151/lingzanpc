var HelloWorld = React.createClass({
    render: function() {
        return (<h2> HelloWorld </h2>);
    }
});

ReactDOM.render( < HelloWorld / > ,
    document.getElementById('app')
);
