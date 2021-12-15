import React from "react";
import { View, Text, TouchableOpacity, Share } from "react-native"
import styles from "./style";
import { FontAwesome } from "@expo/vector-icons"

const ResultImc = (props) => {

    const onShare = async () => {
        const result = await Share.share({
            message: `Meu IMC hoje é: ${props.resultImc}`,
        })
    }

    return (
        <View style={styles.resultImc}>
            <Text style={styles.information}>{props.messageResultImc}</Text>
            <Text style={styles.number}>{props.resultImc}</Text>

            <View style={styles.boxShareButton}>
            {props.resultImc !== null ?
                <TouchableOpacity
                    onPress={onShare}
                    style={styles.sharedButton}>
                    <Text style={styles.sharedText}>
                        <FontAwesome name="share-alt" size={14} color="white" /> Share
                    </Text>
                </TouchableOpacity>
            : <Text></Text>}
            </View>
            
        </View>
    )
}

export default ResultImc