import React, { Component } from 'react';
import { View, StyleSheet, Flatlist } from 'react-native';
import { connect } from 'react-redux';

const styles = StyleSheet.create({

});

class PeopleItem extends Component {
    render() {
        return (
            <View></View>
        )
    }
}

const mapStateToProps = state => {
    return { people: state.people }
}

export default connect(mapStateToProps)(PeopleList);
