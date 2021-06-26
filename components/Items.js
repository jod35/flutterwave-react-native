import React from 'react'
import {
    Text,
    View,
    FlatList,
    TouchableOpacity,
    StyleSheet

} from 'react-native'

const styles = StyleSheet.create({
  selectedText: {
    color: 'white',
    backgroundColor: 'red',
    padding:30,
    fontSize:24

  },
  normalText: {
    color: 'black',
    fontSize: 24,
    padding:30
  },
  button:{
      padding:20,
      margin:20
  }
});

const buttons=[
    {
        id:1,
        name: 'toggle'
    },{
        id:2,
        name: 'toggle'
    },{
        id:3,
        name: 'toggle'
    },{
        id:4,
        name: 'toggle'
    },{
        id:5,
        name: 'toggle'
    },{
        id:6,
        name: 'toggle'
    },{
        id:7,
        name: 'toggle'
    },

]

const ButtonList= (props) => {
  const [category, updateCategory] = React.useState(props.category);

  const updateOnPress = (index) => {
    const categories = buttons.map((item) => {
      item.selected = false;
      return item;
    });
    categories[index].selected = true;
    updateCategory(categories);
  };

  return (
    <View>
      <FlatList
        style={{}}
        data={buttons}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity onPress={() => updateOnPress(index)} style={styles.button}>
              <View >
                <Text 
                    style={item.selected ? styles.selectedText : styles.normalText}>
                    {item.name}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  )
}


export default ButtonList