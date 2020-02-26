var App = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Hola Mundo!</h1>
            </div>
        );
    }
});

React.render(
    <App />,
    document.getElementById("root")
);