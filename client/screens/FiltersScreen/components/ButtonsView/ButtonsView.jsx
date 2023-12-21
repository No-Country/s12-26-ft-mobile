import { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import normalize from 'react-native-normalize';
import { styles } from '../../styles/ButtonsView.styles';

const ButtonsView = ({
  buttonNames,
  title,
  iconName,
  isMaterialIcon = true,
}) => {
  const [selected, setSelected] = useState(10);

  return (
    <>
      <View style={styles.subTitleContainer}>
        {isMaterialIcon ? (
          <MaterialIcons name={iconName} size={28} color='#8390FA' />
        ) : (
          <MaterialCommunityIcons name={iconName} size={28} color='#8390FA' />
        )}
        <Text style={styles.title}>{title}</Text>
      </View>
      <FlatList
        data={buttonNames}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={[
              styles.button,
              { marginLeft: index === 0 ? normalize(16, 'width') : 0 },
              {
                backgroundColor: selected === index ? '#8390FA' : 'transparent',
              },
            ]}
            onPress={() => setSelected(index)}
          >
            <Text
              style={[
                styles.textButton,
                { color: selected === index ? '#FFF' : '#46464F' },
              ]}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
      <View style={styles.separatorContainer}>
        <View style={styles.separator} />
      </View>
    </>
  );
};

export default ButtonsView;
