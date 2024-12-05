import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, RefreshControl, ScrollView } from "react-native";
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from "../../components/Movements";
import Actions from '../../components/Actions';
const initialList = [
    {
      id: 1,
      label: 'Boleto conta luz',
      value: '300,90',
      date: '17/09/2022',
      type: 0
    },
    {
      id: 2,
      label: 'Pix Cliente X',
      value: '2.500,00',
      date: '17/09/2022',
      type: 1 
    },
    {
      id: 3, 
      label: 'Salário',
      value: '7.200,00',
      date: '17/09/2022',
      type: 1
    },
];

export default function Home() {
    const [refreshing, setRefreshing] = useState(false);
    const [balance, setBalance] = useState({ saldo: "9.250,90", gastos: "-300,90" });
    const [list, setList] = useState(initialList);

    const onRefresh = () => {
        setRefreshing(true);
        
        setTimeout(() => {
            const newBalance = {
                saldo: (Math.random() * 10000).toFixed(2),
                gastos: `-${(Math.random() * 1000).toFixed(2)}`
            };

            const newList = initialList.map(item => ({
                ...item,
                value: (Math.random() * 5000).toFixed(2)
            }));

            setBalance(newBalance);
            setList(newList);
            setRefreshing(false);
        }, 2000);
    };

    return (
        <View style={styles.container}>
            <Header name="Gabriel Benicio" />

            <ScrollView
                contentContainerStyle={styles.scrollContainer}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            >
                <Balance saldo={balance.saldo} gastos={balance.gastos} />

                <Actions />

                <Text style={styles.title}>Últimas Movimentações</Text>

                <FlatList
                    style={styles.list}
                    data={list}
                    keyExtractor={item => String(item.id)}
                    renderItem={({ item }) => <Movements data={item} />}
                />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    scrollContainer: {
        flexGrow: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 14
    },
    list: {
        marginStart: 14,
        marginEnd: 14
    },
    item: {
        marginVertical: 8,
    }
});
