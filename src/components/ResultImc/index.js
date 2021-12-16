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

            {props.resultImc < 18.5 ? <Text>Abaixo do peso</Text> : <></>}
            {props.resultImc > 18.5 && props.resultImc <= 24.9 ? <Text>Peso Normal</Text> : <></>}
            {props.resultImc >= 25 && props.resultImc <= 29.9 ? <Text>Sobrepeso</Text> : <></>}
            {props.resultImc >= 30 && props.resultImc <= 34.9 ? <Text>Obesidade Grau I</Text> : <></>}
            {props.resultImc >= 35 && props.resultImc <= 39.9 ? <Text>Obesidade Grau II</Text> : <></>}
            {props.resultImc >= 40 ? <Text>Obesidade Grau III/Mórbida</Text> : <></>}

            <View style={styles.boxShareButton}>
                <TouchableOpacity
                    onPress={onShare}
                    style={styles.sharedButton}>
                    <Text style={styles.sharedText}>
                        <FontAwesome name="share-alt" size={14} color="white" /> Share
                    </Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

export default ResultImc