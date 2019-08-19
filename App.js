import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import EventCard from './components/EventCard';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import EventDetail from './containers/EventDetail';

class App extends Component {

  state = {
    events: []
  }

  componentDidMount() {
    fetch('http://demo2365253.mockable.io/events')
    .then(res => res.json())
    .then((data) => {
      this.setState({events: data})
    });
  }

  render() {
    return (
      <ScrollView style={styles.container}>

        {
          this.state.events.map(event_obj => {
            return (
              <EventCard key = {event_obj.event_id} event = {event_obj} onPress={
                () => this.props.navigation.navigate('Detail', {
                  event: event_obj                  
                })
              }></EventCard>
              
            );
          })
        }
       
      </ScrollView>
    );
  }
}


const AppNavigator = createStackNavigator({

  Home: {
    screen: App,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#2f2f36'
      },
      title: 'Events around you',
      headerTitleStyle: {
        color: '#fff',
        fontWeight: 'normal'
      }
    }
  },

  Detail: {
    screen: EventDetail,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#2f2f36'
      },
      title: 'Event Details',
      headerTitleStyle: {
        color: '#fff',
        fontWeight: 'normal'
      },
      headerTintColor: '#fff'
    }
  }

});



export default createAppContainer(AppNavigator);


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#373940',
    paddingTop: 20
  }

});
