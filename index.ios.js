/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  TouchableHighlight,
} = React;
var Device = require("./Device");

var uideviceTest = React.createClass({
  getInitialState: function() {
    return {
      updateOrientation: "test",
      updateBatteryState: "test",
      updateBatteryLevel: "test",
      updateProximityState: "test",
      watchOrientation: "test",
      watchBatteryState: "test",
      watchBatteryLevel: "test",
      watchProximityState: "test",
    }
  },

  componentDidMount: function() {
    var proximityStateCallback = function(proximityState) {
      this.setState({updateProximityState: proximityState});
    };

    Device.getProximityState(proximityStateCallback.bind(this));

    var orientationWatchCallback = function(orientation) {
      this.setState({watchOrientation: orientation});
    };

    Device.watchOrientationChange(orientationWatchCallback.bind(this));

    var batteryStateWatchCallback = function(batteryState) {
      this.setState({ watchBatteryState: batteryState });
    };

    Device.watchBatteryStateChange(batteryStateWatchCallback.bind(this));

    var batteryLevelWatchCallback = function(batteryLevel) {
      this.setState({ watchBatteryLevel: batteryLevel });
    };

    Device.watchBatteryLevelChange(batteryLevelWatchCallback.bind(this));

    var proximityWatchCallback = function(proximityState) {
      this.setState({watchProximity: proximityState});
    };

    Device.watchProximityChange(proximityWatchCallback.bind(this));
  },

  handleClick: function() {
    var orientationCallback = function(orientation) {
      this.setState({updateOrientation: orientation});
    };

    Device.getOrientation(orientationCallback.bind(this));

    var batteryStateCallback = function(batteryState) {
      this.setState({updateBatteryState: batteryState});
    };

    Device.getBatteryState(batteryStateCallback.bind(this));

    var batteryLevelCallback = function(batteryLevel) {
      this.setState({updateBatteryLevel: batteryLevel});
    };

    Device.getBatteryLevel(batteryLevelCallback.bind(this));
  },

  render: function() {
    return (
      <ScrollView>
        <Text></Text>
        <Text></Text>
        <Text>Width: {Device.width}</Text>
        <Text>Height: {Device.height}</Text>
        <Text>Model: {Device.model}</Text>
        <Text>DeviceName: {Device.deviceName}</Text>
        <Text>SystemName: {Device.systemName}</Text>
        <Text>SystemVersion: {Device.systemVersion}</Text>
        <Text>MultitaskingSupported: {Device.multitaskingSupported.toString()}</Text>
        <Text>LocalizedModel: {Device.localizedModel}</Text>
        <Text>UserInterfaceIdiom: {Device.userInterfaceIdiom}</Text>
        <Text>IdentifierForVendor: {Device.identifierForVendor}</Text>
        <Text>InitialOrientation: {Device.initialOrientation}</Text>
        <Text>InitialBatteryLevel: {Device.initialBatteryLevel}</Text>
        <Text>InitialBatteryState: {Device.initialBatteryState}</Text>
        <Text>InitialProximityState: {Device.initialProximityState.toString()}</Text>
        <Text>GeneratesDeviceOrientationNotifications: {Device.generatesDeviceOrientationNotifications.toString()}</Text>
        <Text>BatteryMonitoringEnabled: {Device.batteryMonitoringEnabled.toString()}</Text>
        <Text>ProximityMonitoringEnabled: {Device.proximityMonitoringEnabled.toString()}</Text>
        <Text>isIpad: {Device.isIpad().toString()}</Text>
        <Text>isIphone: {Device.isIphone().toString()}</Text>
        <TouchableHighlight onPress={this.handleClick}>
          <Text>Update</Text>
        </TouchableHighlight>
        <Text>getOrientation: {this.state.updateOrientation}</Text>
        <Text>getBatteryState: {this.state.updateBatteryState}</Text>
        <Text>getBatteryLevel: {this.state.updateBatteryLevel}</Text>
        <Text>getProximityState: {this.state.updateProximityState.toString()}</Text>
        <Text>Auto updating values</Text>
        <Text>watchOrientationChange: {this.state.watchOrientation}</Text>
        <Text>watchBatteryChange: state:{this.state.watchBatteryState}, level: {this.state.watchBatteryLevel}</Text>
        <Text>watchProximityChange: {this.state.watchProximityState.toString()}</Text>
      </ScrollView>
    );
  }
});

AppRegistry.registerComponent('uideviceTest', () => uideviceTest);
