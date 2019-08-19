import React, { Component } from 'react';
import {Text, View, Image} from 'react-native';
import styles from './EventDetailStyle';

class EventDetail extends Component {
    render() {
        const { navigation } = this.props;
        const event_obj = navigation.getParam('event');

        return(
            <View style={styles.container}>
                <Image style={styles.img} source={{uri: event_obj.event_img}}/>
                <Text style={styles.title}>{event_obj.event_name}</Text>
                <Text style={styles.date}>{event_obj.event_date}</Text>
                <Text style={styles.description}>{event_obj.event_description}</Text>
            </View>
        );
    }
}


export default EventDetail;