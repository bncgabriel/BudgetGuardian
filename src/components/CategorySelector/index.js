import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const categories = [
  { label: 'Salário', iconName: 'wallet' },
  { label: 'Pix', iconName: 'qrcode' },
  { label: 'TED', iconName: 'swap' },
];

export default function CategorySelector() {
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
    maxHeight: 84,
    marginBottom: 14,
    marginTop: 18,
    paddingStart: 14,
    paddingEnd: 14,
    alignSelf: 'center'
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
    backgroundColor: '#dcdde1',
  },
  categoryLabel: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
