import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Platform } from "react-native";
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function Register() {
    const navigation = useNavigation();
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showDatepicker = () => {
        setShow(true);
    };

    return (
        <View style={styles.container}>
            <Animatable.View animation={"fadeInLeft"} delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Novo(a) por Aqui?</Text>
                <Text style={styles.message}>Faça seu Cadastro</Text>
            </Animatable.View>
 
            <Animatable.View animation={"fadeInUp"} style={styles.containerForm}>
                <Text style={styles.title}>Digite seu nome:</Text>
                <TextInput 
                    placeholder="Ex: Nome Sobrenome"
                    style={styles.input}
                />

                <Text style={styles.title}>Digite sua data de nascimento:</Text>
                <TouchableOpacity onPress={showDatepicker} style={styles.datePickerButton}>
                    <Text style={styles.datePickerText}>{date.toLocaleDateString()}</Text>
                </TouchableOpacity>
                {show && (
                    <DateTimePicker
                        value={date}
                        mode="date"
                        display="default"
                        onChange={onChange}
                    />
                )}
                
                <Text style={styles.title}>Digite seu email:</Text>
                <TextInput 
                    placeholder="example@example.com"
                    style={styles.input}
                />
                
                <Text style={styles.title}>Confirme seu email:</Text>
                <TextInput 
                    placeholder="example@example.com"
                    style={styles.input}
                />
                
                <Text style={styles.title}>Digite sua senha:</Text>
                <TextInput 
                    placeholder="Digite sua senha" 
                    style={styles.input}
                    secureTextEntry={true}
                />

                <Text style={styles.title}>Confirme sua senha:</Text>
                <TextInput 
                    placeholder="Digite sua senha" 
                    style={styles.input}
                    secureTextEntry={true}
                />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Cadastrar-me</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#5BA4FF'
    },
    containerHeader:{
        marginTop: '20%',
        marginBottom: '8%',
        paddingStart: "15%"
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF'
    },
    containerForm:{
        backgroundColor:'#FFF',
        flex: 1,
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title: {
        fontSize: 18,
        marginTop: 28
    },
    input:{
        borderBottomWidth: 1,
        height: 40,
        fontSize: 14
    },
    button:{
        backgroundColor: '#5BA4FF',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    },
    datePickerButton: {
        width: '100%',
        marginTop: 10,
        marginBottom: 12,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'center'
    },
    datePickerText: {
        fontSize: 14,
        color: 'black',
        alignSelf: 'center'
    },
});
