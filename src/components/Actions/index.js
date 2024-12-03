import { 
    View ,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView
    } from 'react-native';
import {AntDesign} from '@expo/vector-icons'

export default function Actions() {
 return (
   <ScrollView style = {styles.container} horizontal = {true} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style = {styles.areaButton}>
            <View style = {styles.actionButton}>
                <AntDesign name = "addfolder" size={26} color="#000"></AntDesign>
                <Text style = {styles.labelButton}>Entradas</Text>

            </View>
        </TouchableOpacity>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
    
})