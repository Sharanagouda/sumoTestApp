import React from 'react';
import { Text, View, TouchableNativeFeedback, Image, ScrollView } from 'react-native';



class Sidebar extends React.Component {
    render() {

        return (
            <ScrollView>
                <TouchableNativeFeedback>
                    <View>
                            <Text>Manifest</Text>
                    </View>
                </TouchableNativeFeedback>
                
                <TouchableNativeFeedback >
                    <View >
                       
                            <Text>Logout</Text>
                        
                    </View>
                </TouchableNativeFeedback>
            </ScrollView>
        );
    }
}

export default Sidebar;