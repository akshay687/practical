/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Component} from 'react';
import {
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
import List from "./components/list"
class App extends Component{
  constructor(props){
    super(props)
    // create state for variable and and json array for invesment list
    this.state={  
      amount:"",
      investmentData:[{
          share:"L&T",
          buy:100.00,
          sell:112.00
        },
        {
          share:"NHPC",
          buy:25.60,
          sell:28.80
        },
        {
          share:"SBICard",
          buy:80.00,
          sell:85.40
        },
        {
          share:"Appollo",
          buy:250.00,
          sell:195.00
        },
        {
          share:"Edelweiss",
          buy:290.20,
          sell:62.80
        },
        {
          share:"ITC",
          buy:153.95,
          sell:244.94
        },
        {
          share:"TCS",
          buy:456.00,
          sell:561.00
        },
        {
          share:"CEAT",
          buy:200.00,
          sell:205.44
        },
        {
          share:"HDFCBank",
          buy:806.00,
          sell:1008.50
        },
        {
          share:"PowerGrid",
          buy:190.00,
          sell:565.45
        },
        {
          share:"AXISBank",
          buy:30.50,
          sell:80.50
        },
        {
          share:"BajajFinsv",
          buy:31.60,
          sell:81.65
        },
        {
          share:"CIPLA",
          buy:140.00,
          sell:157.45
        },
        {
          share:"EKC",
          buy:80.50,
          sell:88.50
        },
        {
          share:"EMCO",
          buy:25.60,
          sell:0.45
        },],
        finalResultData:[],
        listShow:false
    }
  }

//  function for calculating  profit amount  and profit list show
  calculate=()=>{
    // console.log(this.state.amount)

    if(this.state.amount>0){
      let profitInv = [];
      this.state.investmentData.forEach(ele=>{
        //in this condition check amount less than equal to buy amount
        if(Number(this.state.amount) >= Number(ele.buy)){
          let profit = parseFloat(ele.sell)-parseFloat(ele.buy);
          // check profit greater than 0 
          if(profit>0){
            // push profit amount list in temp array
            profitInv.push({...ele, profit});
          }
        }
        // short profit array in desc order
        profitInv=profitInv.sort((a,b)=> b.profit-a.profit)

        this.setState({finalResultData:profitInv, listShow:true})
        console.log("data",profitInv)
      })
    }else{
      console.log("enter a amount")
    }  
  }

  render(){
    return(
      <SafeAreaView style={{flex:1}}>
        <View style={styles.mainContainer}>
          <View>
            <Text style={styles.title}>Maximum Profit</Text>
          </View>
          <View style={styles.container}>
            <Text style={{marginTop:5, fontSize:20}}>Amount : </Text>
            <TextInput 
              style={{width:'70%', borderWidth:1, borderColor:'black', padding:10, borderRadius:6}}
              placeholder="Amount"
              onChangeText={text=> this.setState({amount:text})}
            />
          </View>
          <View>
            <TouchableOpacity style={styles.calculateBtn}
              onPress={()=>this.calculate()}
            >
              <Text style={{color:"#FFFFFF", fontWeight:'bold', textAlign:'center', fontSize:18}}>Calculate</Text>
            </TouchableOpacity>
          </View>

          <View>
            {this.state.listShow?
            <List data={this.state.finalResultData}/>:null}
          </View>
        
        </View>
      </SafeAreaView>
    )
  }
}



const styles = StyleSheet.create({
  mainContainer:{
    // flex:1,
    paddingHorizontal:40,
    paddingVertical:40
  },
  title:{
    fontSize:20,
    textAlign:'center',
    fontWeight:'500',
    color:'blue'
  },
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop:20
  },
  calculateBtn:{
    width:'80%',
    backgroundColor:"gray",
    padding:16,
    borderWidth:1,
    borderColor:'#212529',
    borderRadius:12,
    marginVertical:25,
    alignSelf:'center'
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

export default App;
