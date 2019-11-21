import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import { getTheme } from 'react-native-material-kit';
import * as actions from '../actions';

const theme = getTheme();

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 353,
        flexWrap: 'wrap',
        paddingTop: 20,
        paddingLeft: 20,
    }
});

class PeopleDetail extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Image 
                        source={require('../images/background.jpg')}
                        style={[theme.cardImageStyle, styles.image]}
                    />
                    <EvilIcon name={'user'} size={100} style={styles.icon} />
                    <SimpleIcon name={'close'} size={30} style={styles.closeIcon}
                     onPress={() => this.props.noneSelected()}/>
                    <Text style={[theme.cardTitleStyle, styles.title1]}>{this.props.person.firstName} {this.props.person.LastName}</Text>
                    <Text style={[theme.cardTitleStyle, styles.title2]}>from {this.props.person.company}</Text>
                    <View style={styles.textArea}>
                        <MaterialIcon name={'phone'} size={40} style={styles.textIcons}/>
                        <Text style={theme.cardContentStyle}>{this.props.person.phone}</Text>
                    </View>
                    <View style={styles.textArea}>
                        <MaterialIcon name={'email'} size={40} style={styles.textIcons}/>
                        <Text style={theme.cardContentStyle}>{this.props.person.email}</Text>
                    </View>
                    <View style={styles.textArea}>
                        <MaterialIcon name={'assignment'} size={40} style={styles.textIcons}/>
                        <Text style={theme.cardContentStyle}>{this.props.person.project}</Text>
                    </View>
                    <View style={styles.textArea}>
                        <MaterialIcon name={'mode-edit'} size={40} style={styles.textIcons}/>
                        <Text style={theme.cardContentStyle}>{this.props.person.notes}</Text>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Image 
                                source={require('../images/call@2x.png.png')}
                                style={styles.actionImage} 
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image 
                                source={require('../images/email@2x.png.png')}
                                style={styles.actionImage} 
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image 
                                source={require('../images/sms@2x.png.png')}
                                style={styles.actionImage} 
                            />
                        </TouchableOpacity>
                        <View style={styles.actionArea}>
                            <text>Call</text>
                            <text>Email</text>
                            <text>SMS</text>
                        </View>
                    </View>
                    </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return { 
        people: state.people,
        personSelected: state.personSelected,
    }
}

export default connect(mapStateToProps)(PeopleDetail);
