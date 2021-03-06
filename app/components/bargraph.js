import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { BarChart } from "react-native-chart-kit";

export default function BarGraph( {data, width, barColor, title, gbgColor="#dcdee0"} ) {
    const chartConfig = {
        backgroundGradientFrom: gbgColor,
        backgroundGradientTo: gbgColor,
        height:5000,
        fillShadowGradient: barColor, //`rgba(1, 122, 205, 1)`,
        fillShadowGradientOpacity: 1,
        color: (opacity = 1) => `rgba(1, 122, 205, 1)`, //`rgba(1, 122, 205, ${opacity})`,
        strokeWidth: 1, // optional, default 3
        barPercentage: 0.8,
        // fillShadowGradient: 'green'
        };

    return (
        <View style={ {...styles.mt15, ...styles.card, marginHorizontal: 10 } } >
                <Text style={ {...styles.heading, padding: 20 } }> { title }</Text>
                <BarChart 
                    style={ {borderRadius: 10} }
                    data={data}
                    width={width}
                    height={220}
                    yAxisLabel="₹ "
                    yAxisSuffix="k"
                    chartConfig={chartConfig}
                    verticalLabelRotation={0}
                    />
            </View>
    );
}

const styles = StyleSheet.create({
    mt15: {
        marginTop: 15
    },
    card: {
        //width: Dimensions.get("window").width-10,
        borderStyle: 'dotted',
        borderColor: 'black',
        borderRadius: 10,
        backgroundColor: "#dcdee0",
        flex:1,
        alignContent: "center",
        justifyContent: "center"
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 18
    },
});