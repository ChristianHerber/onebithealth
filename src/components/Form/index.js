import React, { useState } from "react";
import { TextInput, Text, View, TouchableOpacity, Vibration, Pressable, Keyboard, FlatList } from "react-native"
import ResultImc from "../ResultImc";
import styles from "./style"

const Form = () => {

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState('preencha o peso e altura')
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState('Calcular')
    const [errorMessage, setErrorMessage] = useState(null)
    const [imcList, setImcList] = useState([])

    function imcCalculator(){
        let heightFormated = height.replace(",", ".")
        let weitghtFormated = weight.replace(",", ".")
        const totalImc = (weitghtFormated/(heightFormated*heightFormated)).toFixed(2)
        setImcList((arr) => [...arr, {id: new Date().getTime(), imc: totalImc}])
        return setImc(totalImc)
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
        } else {
            verificationImc()
            setImc(null)
            setTextButton("Calcular")
            setMessageImc("preencha o peso e altura")
        }
    }

    return (
            <View style={styles.formContext}>
                {imc == null ? 
                <Pressable onPress={Keyboard.dismiss} style={styles.form}>

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

            </Pressable>
            :
            <View style={styles.exhibitionResultImc}>
                <ResultImc messageResultImc={messageImc} resultImc={imc} />

                <TouchableOpacity
                    style={styles.buttonCalculator}
                    onPress={() => validationImc()}
                >
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>

            </View>
            }

            <FlatList
                showsVerticalScrollIndicator={false}
                style={styles.listImcs}
                data={imcList.reverse()} 
                renderItem={({item}) => {
                    return(
                        <Text style={styles.resultImcItem}>
                            <Text style={styles.textResultItemList}>Resultado IMC = </Text>
                            {item.imc}
                        </Text>
                    )
                }}
                keyExtractor={item => item.id}
                />
        </View>
    )
}

export default Form