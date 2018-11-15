import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        {/* <Calendar
          // Collection of dates that have to be marked. Default = {}
          markedDates={{
            '2018-11-13': {selected: true, marked: true, selectedColor: 'blue'},
            '2018-11-14': {marked: true},
            '2018-11-15': {marked: true, dotColor: 'red', activeOpacity: 0},
            '2018-11-16': {disabled: true, disableTouchEvent: true}
          }}
        /> */}

        {/* <Calendar
          markedDates={{
            '2018-11-13': {dots: [vacation, massage, workout], selected: true, selectedColor: 'red'},
            '2018-11-14': {dots: [massage, workout], disabled: true},
          }}
          markingType={'multi-dot'}
        /> */}

        {/* <Calendar
          markedDates={{  
            '2018-11-13': {  
              periods: [  
                { startingDay: false, endingDay: true, color: '#5f9ea0' },
                { startingDay: false, endingDay: true, color: '#ffa500' },
                { startingDay: true, endingDay: false, color: '#f0e68c' },
              ]
            },
            '2018-11-15': {  
              periods: [  
                { startingDay: true, endingDay: false, color: '#ffa500' },
                { color: 'transparent' },
                { startingDay: false, endingDay: false, color: '#f0e68c' },
              ]
            },
          }}
          // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
          markingType='multi-period'
        /> */}


        {/* <Calendar
          // Collection of dates that have to be colored in a special way. Default = {}
          markedDates={
            {'2018-11-20': {textColor: 'green'},
            '2018-11-22': {startingDay: true, color: 'green'},
            '2018-11-23': {selected: true, endingDay: true, color: 'green', textColor: 'gray'},
            '2018-11-04': {disabled: true, startingDay: true, color: 'green', endingDay: true}
            }}
          // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
          markingType={'period'}
        /> */}

        {/* <CalendarList
          // Callback which gets executed when visible months change in scroll view. Default = undefined
          onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
          // Max amount of months allowed to scroll to the past. Default = 50
          pastScrollRange={50}
          // Max amount of months allowed to scroll to the future. Default = 50
          futureScrollRange={50}
          // Enable or disable scrolling of calendar list
          scrollEnabled={true}
          // Enable or disable vertical scroll indicator. Default = false
          showScrollIndicator={true}
          // ...calendarParams
          // Collection of dates that have to be colored in a special way. Default = {}
          markedDates={
            {'2018-11-20': {textColor: 'green'},
            '2018-11-22': {startingDay: true, color: 'green'},
            '2018-11-23': {selected: true, endingDay: true, color: 'green', textColor: 'gray'},
            '2018-11-04': {disabled: true, startingDay: true, color: 'green', endingDay: true}
            }}
          // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
          markingType={'period'}
        /> */}

        {/* <CalendarList
          // Enable horizontal scrolling, default = false
          horizontal={true}
          // Enable paging on horizontal, default = false
          pagingEnabled={true}
          // Set custom calendarWidth.
          calendarWidth={320}

          // ...calendarListParams
          // Callback which gets executed when visible months change in scroll view. Default = undefined
          onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
          // Max amount of months allowed to scroll to the past. Default = 50
          pastScrollRange={50}
          // Max amount of months allowed to scroll to the future. Default = 50
          futureScrollRange={50}
          // Enable or disable scrolling of calendar list
          scrollEnabled={true}
          // Enable or disable vertical scroll indicator. Default = false
          showScrollIndicator={true}

          // ...calendarParams
          markedDates={
            {'2018-11-20': {textColor: 'green'},
            '2018-11-22': {startingDay: true, color: 'green'},
            '2018-11-23': {selected: true, endingDay: true, color: 'green', textColor: 'gray'},
            '2018-11-04': {disabled: true, startingDay: true, color: 'green', endingDay: true}
            }}
          // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
          markingType={'period'}
        /> */}


        <Agenda
          // the list of items that have to be displayed in agenda. If you want to render item as empty date
          // the value of date key kas to be an empty array []. If there exists no value for date key it is
          // considered that the date in question is not yet loaded
          items={
            {'2018-11-22': [{text: 'item 1 - any js object'}],
            '2018-11-23': [{text: 'item 2 - any js object'}],
            '2018-11-24': [],
            '2018-11-25': [{text: 'item 3 - any js object'},{text: 'any js object'}],
            }}
          // callback that gets called when items for a certain month should be loaded (month became visible)
          loadItemsForMonth={(month) => {console.log('trigger items loading')}}
          // callback that fires when the calendar is opened or closed
          onCalendarToggled={(calendarOpened) => {console.log(calendarOpened)}}
          // callback that gets called on day press
          onDayPress={(day)=>{console.log('day pressed')}}
          // callback that gets called when day changes while scrolling agenda list
          onDayChange={(day)=>{console.log('day changed')}}
          // initially selected day
          selected={'2018-11-16'}
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate={'2018-11-10'}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          maxDate={'2018-11-30'}
          // Max amount of months allowed to scroll to the past. Default = 50
          pastScrollRange={50}
          // Max amount of months allowed to scroll to the future. Default = 50
          futureScrollRange={50}
          // specify how each item should be rendered in agenda
          renderItem={(item, firstItemInDay) => {return (<View />);}}
          // specify how each date should be rendered. day can be undefined if the item is not first in that day.
          renderDay={(day, item) => {return (<View />);}}
          // specify how empty date content with no items should be rendered
          renderEmptyDate={() => {return (<View />);}}
          // specify how agenda knob should look like
          renderKnob={() => {return (<View />);}}
          // specify what should be rendered instead of ActivityIndicator
          renderEmptyData = {() => {return (<View />);}}
          // specify your item comparison function for increased performance
          rowHasChanged={(r1, r2) => {return r1.text !== r2.text}}
          // Hide knob button. Default = false
          hideKnob={true}
          // By default, agenda dates are marked if they have at least one item, but you can override this if needed
          markedDates={{
            '2018-11-16': {selected: true, marked: true},
            '2018-11-17': {marked: true},
            '2018-11-18': {disabled: true}
          }}
          // If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make sure to also set the refreshing prop correctly.
          onRefresh={() => console.log('refreshing...')}
          // Set this true while waiting for new data from a refresh
          refreshing={false}
          // Add a custom RefreshControl component, used to provide pull-to-refresh functionality for the ScrollView.
          refreshControl={null}
          // agenda theme
          theme={{
            // ...calendarTheme,
            agendaDayTextColor: 'yellow',
            agendaDayNumColor: 'green',
            agendaTodayColor: 'red',
            agendaKnobColor: 'blue'
          }}
          // agenda container style
          style={{
            width:'100%',
            height:'100%'
          }}
        />

      </View>
    );
  }
}

const vacation = {key:'vacation', color: 'red', selectedDotColor: 'blue'};
const massage = {key:'massage', color: 'blue', selectedDotColor: 'blue'};
const workout = {key:'workout', color: 'green'};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
