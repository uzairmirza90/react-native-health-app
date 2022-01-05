import { StyleSheet, View, StatusBar, ScrollView} from 'react-native';
import { ApplicationProvider, Text, Radio, RadioGroup, Divider} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import React from 'react';
import * as Styles from '../assets/variables';

export default function Health() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const radioStatus = 'control'
  return (
    <ScrollView centerContent='true' style={styles.scrollView}>
        <ApplicationProvider {...eva} theme={eva.light}>
        <StatusBar barStyle='light-content' />

        {/**********        Health Main Container       ***********/}
        <View style={styles.container}>
            <View style={styles.headingContainer}>
                <Text style={styles.headings} category='h5'>Your health</Text>
                <Text style={styles.headings} category='p1'>What is your current life stage?</Text>
            </View>

            {/**********        Radio Card Container       ***********/}
            <View style={styles.card}>
                <RadioGroup
                selectedIndex={selectedIndex}
                onChange={index => setSelectedIndex(index)}>
                    <Radio status={radioStatus} style={styles.radio}>Single</Radio>
                    <Divider style={styles.divider}/>
                    <Radio status={radioStatus} style={styles.radio}>Single</Radio>
                    <Divider style={styles.divider}/>
                    <Radio status={radioStatus} style={styles.radio}>Single</Radio>
                    <Divider style={styles.divider}/>
                    <Radio status={radioStatus} style={styles.radio}>Single</Radio>   
                    <Divider style={styles.divider}/>
                    <Radio status={radioStatus} style={styles.radio}>Single</Radio>      
                </RadioGroup>
            </View>
        </View>
        </ApplicationProvider>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 100,
        alignItems: 'center'
    },
    headingContainer: {
        marginBottom: 40,
        width: Styles.HEALTH_COMPONENT_STYLES.width,
    },
    headings: {
        color: 'white',
        lineHeight: 40
    },
    card: {
        width: Styles.HEALTH_COMPONENT_STYLES.width,
        borderRadius: 10,
        borderColor: Styles.HEALTH_COMPONENT_STYLES.borderColor,
        borderWidth: 2,
        marginBottom: 20
    },
    divider: {
        backgroundColor: Styles.HEALTH_COMPONENT_STYLES.borderColor,
        height: 2
    },
    radio: {
        marginLeft: 20,
        height: 30,
    }, 
    scrollView: {
        backgroundColor: Styles.HEALTH_COMPONENT_STYLES.color,
        paddingTop: 70
    }
});
