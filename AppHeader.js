import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

 class AppHeader extends React.Component{
   render(){
    return(
      <View style={styles.headerViewer}>
     <Text style = {styles.headerText}>
         DJ AUDIO MIXER APP
     
     </Text>
     
     </View>
    )

    
  }
 }
  const styles = StyleSheet.create({
      headerViewer:{
        backgroundColor:'black',
        marginBottom:50
        
      },
      headerText:{
        color:'white',
        fontSize:25,
        fontStyle:'bold',
        textAlign:'center'
        
      }
  });
     
export default AppHeader;