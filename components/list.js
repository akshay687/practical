/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React,{Component} from 'react';
 import {
     FlatList,
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   TextInput,
   TouchableOpacity,
   useColorScheme,
   View,
 } from 'react-native';
 
 class list extends Component{
   constructor(props){
     super(props)
     this.state={ 
     }
   }
 
 
 
   render(){
       const {data} = this.props
     return(
       <View>
         
         <View>
           <Text style={styles.hdtitle}>Invested Share:</Text>
         </View>
            <View style={{ padding:5}}>
                <View style={styles.listHeadContainer}>
                    <Text style={{fontSize:20, width:"30%", fontWeight:"500"}}>Share</Text>
                    <Text style={{fontSize:20,width:"20%", fontWeight:"500"}}>Buy</Text>
                    <Text style={{fontSize:20,width:"20%", fontWeight:"500"}}>Sell</Text>
                    <Text style={{fontSize:20,width:"20%", fontWeight:"500"}}>Profit</Text>
                </View>
                <FlatList
                    data={data}
                    nestedScrollEnabled
                    style={{height:"50%"}}
                    keyExtractor={(item, index)=>index.toString()}
                    renderItem={({item})=>(

                        <View style={styles.listContainer}>
                            <Text style={{fontSize:20, width:"30%"}}>{item.share}</Text>
                            <Text style={{fontSize:20, width:"20%"}}>{item.buy.toFixed('2')}</Text>
                            <Text style={{fontSize:20, width:"20%"}}>{item.sell.toFixed('2')}</Text>
                            <Text style={{fontSize:20, width:"20%"}}>{item.profit.toFixed('2')}</Text>
                        </View>
                    )}
                /> 
            </View>
         <View style={styles.totalInvest}> 
             <Text style={{fontSize:20}}>Total Invested:</Text>
             <Text style={{fontSize:20}}>{(data.length>0)?data.map(invest=>invest.buy).reduce((buy,total)=>buy+total).toFixed('2'):0}</Text>
         </View>
         <View style={styles.totalInvest}> 
             <Text style={{fontSize:20}}>Total Profit:</Text>
             <Text style={{fontSize:20}}>{(data.length>0)?data.map(invest=>invest.profit).reduce((profit,total)=>profit+total).toFixed('2'):0}</Text>
         </View>
       </View>
     )
   }
 }
 
 
 
 const styles = StyleSheet.create({
   listContainer: {
     justifyContent: 'space-between',
     flexDirection: 'row',
     borderBottomWidth:1,
        borderColor:"grey",
        paddingVertical:8
   },
   listHeadContainer:{
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop:20,
        marginBottom:5,
        borderBottomWidth:1,
        borderColor:"grey",
        backgroundColor:'lightgray',
        paddingVertical:8
   },
   totalInvest:{
    // justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop:30
   },

   hdtitle:{
    fontSize:20,
    // textAlign:'center',
    fontWeight:'800',
    color:'#212529',
    marginBottom:10
  },



   calculateBtn:{
     width:50,
     backgroundColor:"#FFFFFF",
     padding:20
 
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
 });
 
 export default list;
 