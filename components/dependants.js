import { StyleSheet, View, StatusBar, ScrollView, Alert} from 'react-native';
import { ApplicationProvider, Text} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import React from 'react';
import Button from 'apsl-react-native-button';
import * as Styles from '../assets/variables';

export default function Dependants() {
    return (
        <ScrollView style={styles.scrollView} centerContent="true">
            <ApplicationProvider {...eva} theme={eva.light}>
            <StatusBar barStyle='light-content' />

            {/**********        Dependants Main Container       ***********/}
            <View style={styles.container}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headings} category='h4'>Your health</Text>
                    <Text style={styles.headings} category='p1'>Do you have any dependants?</Text>
                </View>

                {/**********        Age Card Container       ***********/}
                <View style={styles.card}>

                    {/**********        Age component       ***********/}
                    <View style={styles.ageComponent}>
                        <View style={styles.age}>
                            <Text style={styles.text}>Age 0 - 5</Text>
                        </View>
                        <View style={styles.buttons}>
                            <Button style={styles.button}>
                                <View>
                                    <Text style={styles.buttonText}>-</Text>
                                </View>
                            </Button>
                            <Text style={styles.counterText}>2</Text>
                            <Button style={styles.button}>
                                <View>
                                    <Text style={styles.buttonText}>+</Text>
                                </View>
                            </Button>
                        </View>
                    </View>

                     {/**********        Age component       ***********/}
                     <View style={styles.ageComponent}>
                        <View style={styles.age}>
                            <Text style={styles.text}>Age 0 - 5</Text>
                        </View>
                        <View style={styles.buttons}>
                            <Button style={styles.button}>
                                <View>
                                    <Text style={styles.buttonText}>-</Text>
                                </View>
                            </Button>
                            <Text style={styles.counterText}>2</Text>
                            <Button style={styles.button}>
                                <View>
                                    <Text style={styles.buttonText}>+</Text>
                                </View>
                            </Button>
                        </View>
                    </View>

                    {/**********        Age component       ***********/}
                    <View style={styles.ageComponent}>
                        <View style={styles.age}>
                            <Text style={styles.text}>Age 6 - 11</Text>
                        </View>
                        <View style={styles.buttons}>
                            <Button style={styles.button}>
                                <View>
                                    <Text style={styles.buttonText}>-</Text>
                                </View>
                            </Button>
                            <Text style={styles.counterText}>2</Text>
                            <Button style={styles.button}>
                                <View>
                                    <Text style={styles.buttonText}>+</Text>
                                </View>
                            </Button>
                        </View>
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
        backgroundColor: Styles.AGE_COMPONENT_STYLES.textColor,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 100
    },
    headingContainer: {
        width: Styles.AGE_COMPONENT_STYLES.width
    },
    headings: {
        color: 'white',
        lineHeight: 40,
    },
    card: {
        width: Styles.AGE_COMPONENT_STYLES.width
    },
    ageComponent: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
    },
    buttons: {
        flexDirection: 'row',
        marginLeft: 'auto',
        alignItems: 'center',
    },
    button: {
        width: 45, 
        height: 45, 
        borderRadius: 30, 
        borderColor: '#FFFFFF',                                                                  
    },
    buttonText: {
        color: 'white', 
        fontSize: 25
    },
    text: {
        color:'white'
    },
    counterText: {
        color: 'white', 
        marginLeft: 20, 
        marginRight: 20
    },
    scrollView: {
        paddingTop: 70,
        backgroundColor: Styles.AGE_COMPONENT_STYLES.textColor,
    }
})