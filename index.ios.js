var React = require('react-native');
var {
    AppRegistry,
    Text
} = React;

var App = module.exports = React.createClass({
    render() {
        <Text>Hello World!</Text>
    }
});
                                             
AppRegistry.registerComponent('ReactNativeSwiftDemo', () => App);
