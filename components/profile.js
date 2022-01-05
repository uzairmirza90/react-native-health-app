import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import { ApplicationProvider, Text, Divider, Icon, IconRegistry, Button} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import * as Styles from '../assets/variables';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

export default function Profile(){
    const DownwardIcon = (props) => (
        <Icon {...props} name="arrow-ios-downward" fill={Styles.PROFILE_COMPONENT_STYLES.textColor}/>
    )
    const ForwardIcon = (props) => (
        <Icon {...props} name='arrow-ios-forward' fill={Styles.PROFILE_COMPONENT_STYLES.textColor}/>
    );
    const LogOutIcon = (props) => (
        <Icon {...props} name='arrow-circle-right-outline' fill={Styles.PROFILE_COMPONENT_STYLES.textColor}/>
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
                        <View style={styles.rewardsHeadingComponent}>
                            <Text style={styles.rewardsHeadingText}>REWARDS</Text>
                            <Button style={styles.button} size="medium" appearance='ghost' accessoryRight={DownwardIcon}/>
                        </View>
                        <Text style={styles.rewardsUnlockedText}>1 of 5 unlocked</Text>
                        <Text style={styles.rewardsText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                         incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </Text>
                    </View>

                    {/**********         Activity Container        ***********/}
                    <View style={styles.activityComponent}>
                        <View style={styles.activityTextComponent}>
                            <Text style={styles.activityHeadingText}>Activity (Your pillar)</Text>
                            <Text style={styles.activityText}>What state your physical health is in</Text>
                        </View>
                        <View style={styles.arrowButton}>
                            <Button style={styles.button} size="medium" appearance='ghost' accessoryRight={ForwardIcon}/>
                        </View>
                    </View>

                    {/**********        Health Container       ***********/}
                    <View style={styles.textComponent}>
                        <Text style={styles.componentHeader}>Your health</Text>
                        <View style={styles.dataComponent}>
                            <Text style={styles.dataText}>Link text here</Text>
                            <Button style={styles.button} size="medium" appearance='ghost' accessoryRight={ForwardIcon}/>
                        </View>
                        <View style={styles.dataComponent}>
                            <Text style={styles.dataText}>Link text here</Text>
                            <Button style={styles.button} size="medium" appearance='ghost' accessoryRight={ForwardIcon}/>
                        </View>
                    </View>

                    {/**********        Details Container       ***********/}
                    <View style={styles.textComponent}>
                        <Text style={styles.componentHeader}>Your details</Text>
                        <View style={styles.dataComponent}>
                            <Text style={styles.dataText}>Link text here</Text>
                            <Button style={styles.button} size="medium" appearance='ghost' accessoryRight={ForwardIcon}/>
                        </View>
                        <View style={styles.dataComponent}>
                            <Text style={styles.dataText}>Link text here</Text>
                            <Button style={styles.button} size="medium" appearance='ghost' accessoryRight={ForwardIcon}/>
                        </View>
                    </View>

                    {/**********         Support and Feedback Container       ***********/}
                    <View style={styles.textComponent}>
                        <Text style={styles.componentHeader}>Support and feedback</Text>
                        <View style={styles.dataComponent}>
                            <Text style={styles.dataText}>Link text here</Text>
                            <Button style={styles.button} size="medium" appearance='ghost' accessoryRight={ForwardIcon}/>
                        </View>
                        <View style={styles.dataComponent}>
                            <Text style={styles.dataText}>Link text here</Text>
                            <Button style={styles.button} size="medium" appearance='ghost' accessoryRight={ForwardIcon}/>
                        </View>
                    </View>

                    {/**********        Divider Container       ***********/}
                    <Divider style={styles.divider}/>

                    {/**********        Logout Container       ***********/}
                    <View style={styles.logoutComponent}>
                        <Text style={styles.logoutDataText}>Logout</Text>
                        <Button style={styles.button} size="large" appearance='ghost' accessoryRight={LogOutIcon}/>
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
        color: Styles.PROFILE_COMPONENT_STYLES.textColor, 
        fontSize: 28
    },
    rewardsComponent: {
        backgroundColor: Styles.PROFILE_COMPONENT_STYLES.componentBackgroundColor, 
        borderRadius: Styles.PROFILE_COMPONENT_STYLES.borderRadius, 
        marginBottom: 10,
    },
    rewardsHeadingComponent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rewardsHeadingText: {
        marginBottom: 15, 
        color: Styles.PROFILE_COMPONENT_STYLES.textColor, 
        fontSize: 10,
        paddingLeft: Styles.PROFILE_COMPONENT_STYLES.padding,
        paddingTop: Styles.PROFILE_COMPONENT_STYLES.padding
    },
    rewardsUnlockedText: {
        marginBottom: 7, 
        fontSize: 20, 
        fontWeight: '500',
        paddingLeft: Styles.PROFILE_COMPONENT_STYLES.padding,
        width: Styles.PROFILE_COMPONENT_STYLES.width
    },
    rewardsText: {
        fontSize: 10,
        paddingLeft: Styles.PROFILE_COMPONENT_STYLES.padding,
        paddingBottom: Styles.PROFILE_COMPONENT_STYLES.padding, 
        paddingRight: Styles.PROFILE_COMPONENT_STYLES.padding,
        width: Styles.PROFILE_COMPONENT_STYLES.width,
    },
    activityComponent: {
        backgroundColor: Styles.PROFILE_COMPONENT_STYLES.componentBackgroundColor, 
        borderRadius: Styles.PROFILE_COMPONENT_STYLES.borderRadius, 
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    activityHeadingText: {
        color: Styles.PROFILE_COMPONENT_STYLES.textColor, 
        marginBottom: 5,
    },
    activityTextComponent: {
        padding: Styles.PROFILE_COMPONENT_STYLES.padding,
        width: Styles.PROFILE_COMPONENT_STYLES.width,
    },
    activityText: {
        color: Styles.PROFILE_COMPONENT_STYLES.textColor, 
        fontSize: 10,
    },
    components: {
        width: Styles.PROFILE_COMPONENT_STYLES.width,
    },
    componentHeader: {
        fontSize: 10, 
        marginLeft: 15, 
        marginBottom: 10, 
        marginTop: 30
    },
    dataComponent: {
        backgroundColor: Styles.PROFILE_COMPONENT_STYLES.componentBackgroundColor, 
        borderRadius: Styles.PROFILE_COMPONENT_STYLES.borderRadius, 
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    dataText: {
        color: Styles.PROFILE_COMPONENT_STYLES.textColor, 
        fontWeight: '600',
        width: Styles.PROFILE_COMPONENT_STYLES.width,
        padding: Styles.PROFILE_COMPONENT_STYLES.padding, 
    },
    logoutComponent: {
        backgroundColor: Styles.PROFILE_COMPONENT_STYLES.componentBackgroundColor, 
        borderRadius: Styles.PROFILE_COMPONENT_STYLES.borderRadius, 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    logoutDataText: {
        color: Styles.PROFILE_COMPONENT_STYLES.textColor, 
        fontWeight: '600',
        width: Styles.PROFILE_COMPONENT_STYLES.width,
        padding: Styles.PROFILE_COMPONENT_STYLES.padding,
    },
    button: {
        marginLeft: 'auto',
    },
    arrowButton: {
        marginLeft: 'auto'
    },
    divider: {
        marginTop: 40,
        marginBottom: 20
    },
    scrollView: {
        paddingTop: 70
    }
})