import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';


const VisitsView = () => {
    return (
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Content to be scrolled */}
        <View style={styles.contentContainer}>
          <Text style={styles.text}>Scrollable Content 1</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.text}>Scrollable Content 2</Text>
        </View>
        {/* Add more content here */}
      </ScrollView>
    );
  };



  const styles = StyleSheet.create({
    scrollViewContent: {
      flexGrow: 1,
      justifyContent: 'center',
      padding: 16,
    },
    contentContainer: {
      backgroundColor: '#f0f0f0',
      padding: 16,
      marginBottom: 16,
    },
    text: {
      fontSize: 18,
    },
  });

  export default VisitsView;