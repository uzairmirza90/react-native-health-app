import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import { ApplicationProvider, Text, Divider, Icon, IconRegistry, Button} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import * as Styles from '../assets/variables';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

export default function Profile(){
    const icon = (props) => (
        <Icon {...props} name='arrow-circle-right-outline' fill='#0043A8' style={styles.icon}/>
    ); 
    return (
    <ScrollView centerContent="true" style={styles.scrollView}>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={eva.light}>

            {/**********        Profile Main Container       ***********/}
            <View style={styles.container}>

                {/**********       Username Heading Container       ***********/}
                <View style={styles.userHeadingContainer}>
                    <Text style={styles.userHeadingText}>Jane Smith</Text>
                </View>

                {/**********        Components Container       ***********/}
                <View style={styles.components}>

                    {/**********        Rewards Container       ***********/}
                    <View style={styles.rewardsComponent}>
                        <Text style={styles.rewardsHeadingText}>REWARDS</Text>
                        <Text style={styles.rewardsUnlockedText}>1 of 5 unlocked</Text>
                        <Text style={styles.rewardsText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                         incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </Text>
                    </View>

                    {/**********         Activity Container        ***********/}
                    <View style={styles.activityComponent}>
                        <Text style={styles.activityHeadingText}>Activity (Your pillar)</Text>
                        <Text style={styles.activityText}>What state your physical health is in</Text>
                    </View>

                    {/**********        Health Container       ***********/}
                    <View style={styles.textComponent}>
                        <Text style={styles.componentHeader}>Your health</Text>
                        <View style={styles.dataComponent}>
                            <Text style={styles.dataText}>Link text here</Text>
                        </View>
                        <View style={styles.dataComponent}>
                            <Text style={styles.dataText}>Link text here</Text>
                        </View>
                    </View>

                    {/**********        Details Container       ***********/}
                    <View style={styles.textComponent}>
                        <Text style={styles.componentHeader}>Your details</Text>
                        <View style={styles.dataComponent}>
                            <Text style={styles.dataText}>Link text here</Text>
                        </View>
                        <View style={styles.dataComponent}>
                            <Text style={styles.dataText}>Link text here</Text>
                        </View>
                    </View>

                    {/**********         Support and Feedback Container       ***********/}
                    <View style={styles.textComponent}>
                        <Text style={styles.componentHeader}>Support and feedback</Text>
                        <View style={styles.dataComponent}>
                            <Text style={styles.dataText}>Link text here</Text>
                        </View>
                        <View style={styles.dataComponent}>
                            <Text style={styles.dataText}>Link text here</Text>
                        </View>
                    </View>

                    {/**********        Divider Container       ***********/}
                    <Divider style={styles.divider}/>

                    {/**********        Logout Container       ***********/}
                    <View style={styles.logoutComponent}>
                        <Text style={styles.logoutDataText}>Logout</Text>
                        <Button style={styles.button} appearance='ghost' accessoryLeft={icon}/>
                    </View>
                </View>
            </View>
        </ApplicationProvider>
    </ScrollView>    
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 100,
        alignItems: 'center'
    },
    userHeadingContainer: {
        marginBottom: 50,
    },
    userHeadingText: {
        color: Styles.REWARDS_COMPONENT_STYLES.textColor, 
        fontSize: 28
    },
    rewardsComponent: {
        backgroundColor: Styles.REWARDS_COMPONENT_STYLES.componentBackgroundColor, 
        borderRadius: Styles.REWARDS_COMPONENT_STYLES.borderRadius, 
        padding: 20, 
        marginBottom: 10
    },
    rewardsHeadingText: {
        marginBottom: 15, 
        color: Styles.REWARDS_COMPONENT_STYLES.textColor, 
        fontSize: 10
    },
    rewardsUnlockedText: {
        marginBottom: 7, 
        fontSize: 20, 
        fontWeight: '500'
    },
    rewardsText: {
        fontSize: 10
    },
    activityComponent: {
        backgroundColor: Styles.REWARDS_COMPONENT_STYLES.componentBackgroundColor, 
        borderRadius: Styles.REWARDS_COMPONENT_STYLES.borderRadius, 
        padding: 20, 
        marginBottom: 10
    },
    activityHeadingText: {
        color: Styles.REWARDS_COMPONENT_STYLES.textColor, 
        marginBottom: 5
    },
    activityText: {
        color: Styles.REWARDS_COMPONENT_STYLES.textColor, 
        fontSize: 10
    },
    components: {
        width: Styles.REWARDS_COMPONENT_STYLES.width,
    },
    componentHeader: {
        fontSize: 10, 
        marginLeft: 15, 
        marginBottom: 10, 
        marginTop: 30
    },
    dataComponent: {
        backgroundColor: Styles.REWARDS_COMPONENT_STYLES.componentBackgroundColor, 
        borderRadius: Styles.REWARDS_COMPONENT_STYLES.borderRadius, 
        padding: 20, 
        marginBottom: 10
    },
    dataText: {
        color: Styles.REWARDS_COMPONENT_STYLES.textColor, 
        fontWeight: '600'
    },
    logoutComponent: {
        backgroundColor: Styles.REWARDS_COMPONENT_STYLES.componentBackgroundColor, 
        borderRadius: Styles.REWARDS_COMPONENT_STYLES.borderRadius, 
        padding: 20, 
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        marginBottom: 10
    },
    logoutDataText: {
        color: Styles.REWARDS_COMPONENT_STYLES.textColor, 
        fontWeight: '600',
    },
    button: {
        marginLeft: 'auto',
    },
    icon: {
       width: 25,
       height: 25,
    },
    divider: {
        marginTop: 40,
        marginBottom: 20
    },
    scrollView: {
        paddingTop: 70
    }
})