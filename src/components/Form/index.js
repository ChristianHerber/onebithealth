import React, { useState } from "react";
import { TextInput, Text, View, TouchableOpacity, Vibration, Pressable, Keyboard } from "react-native"
import ResultImc from "../ResultImc";
import styles from "./style"

const Form = () => {

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState('preencha o peso e altura')
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState('Calcular')
    const[errorMessage, setErrorMessage] = useState(null)

    function imcCalculator(){
        return setImc((weight/(height*height)).toFixed(2))
    }

    function verificationImc(){
        if(imc == null){
            Vibration.vibrate()
            setErrorMessage("Campo obrigatório*")
        }
    }

    function validationImc(){
        if(weight !== null && height !== null){
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu IMC é igual: ")
            setTextButton("Calcular novamente")
            setErrorMessage(null)
            return
        }
        verificationImc()
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("preencha o peso e altura")
    }

    return (
        <Pressable onPress={Keyboard.dismiss} style={styles.formContext}>
            <View style={styles.form}>

                <Text style={styles.formLabel}>Altura</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setHeight}
                    valu={height}
                    placeholder="Ex.: 1.75"
                    keyboardType="numeric"
                />
                <Text style={styles.errorMessage}>{errorMessage}</Text>

                <Text style={styles.formLabel}>Peso</Text>
                <TextInput
                    style={styles.input}
                    value={weight}
                    onChangeText={setWeight}
                    placeholder="Ex.: 75.256"
                    keyboardType="numeric"
                />
                <Text style={styles.errorMessage}>{errorMessage}</Text>

                <TouchableOpacity
                    style={styles.buttonCalculator}
                    onPress={() => validationImc()}
                >
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>

            </View>

            <ResultImc messageResultImc={messageImc} resultImc={imc} />

        </Pressable>
    )
}

export default Form