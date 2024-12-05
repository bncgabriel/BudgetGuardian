import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const categories = [
  { label: 'Roupas', iconName: 'shoppingcart' },
  { label: 'Acessórios', iconName: 'gift' },
  { label: 'Pix', iconName: 'qrcode' },
  { label: 'Comida', iconName: 'rest' },
];

export default function CategorySelectorEx() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <ScrollView horizontal={true} style={styles.container} showsHorizontalScrollIndicator={false}>
      {categories.map((category, index) => (
        <TouchableOpacity
          key={index}
          style={styles.categoryButton}
          onPress={() => setSelectedCategory(category.label)}
        >
          <View style={[
            styles.iconContainer,
            selectedCategory === category.label && styles.selectedIconContainer,
          ]}>
            <AntDesign name={category.iconName} size={26} color="#000" />
          </View>
          <Text style={styles.categoryLabel}>{category.label}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    maxHeight: 84,
    marginBottom: 14,
    marginTop: 18,
    paddingStart: 14,
    paddingEnd: 14,
  },
  categoryButton: {
    alignItems: 'center',
    marginRight: 32,
  },
  iconContainer: {
    backgroundColor: '#ecf0f1',
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },
  selectedIconContainer: {
    backgroundColor: '#dcdde1', // Cor mais escura quando selecionado
  },
  categoryLabel: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
