import React, { Component } from 'react';
import { View, StyleSheet, Text, ImageBackground, ScrollView } from 'react-native';
import data from './data';
import { LinearGradient } from 'expo-linear-gradient';

export default class Mosiac extends Component {

    state = {
        data: data
    }

    mosiac = () => {
        return this.state.data.map(singleData => {
            return (
                <View key={singleData.id} style={{ height: 250, margin: 3, flexBasis: '48%' }}>
                    <ImageBackground
                    imageStyle = {{borderRadius: 20}}
                         source={{uri: singleData.image_link}}
                        style={{
                            height: 250,
                            position: 'absolute',
                            top: 0,
                            bottom: 0,
                            right: 0,
                            left: 0,
                        }}>

                        <LinearGradient
                            style={{
                                height: 250,
                                position: 'absolute',
                                top: 0,
                                bottom: 0,
                                right: 0,
                                left: 0,
                                flexDirection: 'row',
                                borderRadius: 20
                            }}
                            start={{ x: 0.1, y: 0.6 }} end={{ x: 0.1, y: 1 }}
                            colors={['rgba(0,0,0,.1)', 'rgba(0,0,0,1)',]}>
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: 15,
                                paddingLeft: 15,
                                color: '#fff',
                                alignSelf: 'flex-end',
                                paddingBottom: 5
                            }}>
                                {singleData.headline}
                            </Text>
                        </LinearGradient>
                    </ImageBackground>
                </View>
            )
        })
    }

    render() {
        return (
            <View style={styles.container}>
                {this.mosiac()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 800,
        overflow: 'hidden',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});
