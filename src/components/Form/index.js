import React from "react";
import { TextInput, Text, View, Button } from "react-native"
import ResultImc from "../ResultImc";

const Form = () => {
    return (
        <View>
            <View>

                <Text>Altura</Text>
                <TextInput
                    placeholder="Ex.: 1.75"
                    keyboardType="numeric"
                />

                <Text>Peso</Text>
                <TextInput
                    placeholder="Ex.: 75.256"
                    keyboardType="numeric"
                />

                <Button title="Calcular IMC" />

            </View>

            <ResultImc />

        </View>
    )
}

export default Form