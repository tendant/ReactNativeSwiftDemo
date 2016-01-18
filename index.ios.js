var React = require('react-native');
var {
    AppRegistry,
    Text,
    View
} = React;

var App = module.exports = React.createClass({
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', borderWidth: 2}}>
                <Text style={{alignSelf: 'center', alignItems: 'stretch', backgroundColor: 'green'}}>Hello World!</Text>
            </View>
        )
    }
});
                                             
AppRegistry.registerComponent('ReactNativeSwiftDemo', () => App);
