<template>
<div class="conversion-container">
    <div class="input-container">
      <md-content>
        <md-field>
          <label>FROM</label>
              <md-input v-model=initialFrom></md-input>
        </md-field>
        <select class="selectfrom">
            <option v-for= "value in selectDropdown" :key="value" > {{ value }}</option>
        </select>
      </md-content>
      <md-content>
        <md-field>
          <label>TO</label>
          <md-input v-model="initialTo"></md-input>
        </md-field>
        <select class="selectto">
            <option v-for= "value in selectDropdown" :key="value" > {{ value }}</option>
        </select>
      </md-content>
    </div>
  </div>
</template>

<script>
import {bus} from '../main' 

export default { 
    name:'TextBox',
    data(){ 
      return{
      initialFrom:"1",
      initialTo:"1",
      selectDropdown:[],
      Length:['Meter','kilometer','centimeter'],
      Volume:['liter','mililiter'],
      Temperature:['kelvin','fahrenheit'],
      }     
    },

    created(){
      bus.$on('getValue',(data)=>{        
        this.Changedropdown(data)
      })
    },

  methods:{
    Changedropdown:function( value){
      alert(value)
      switch(value) {
        case 'Length':
         this.selectDropdown=this.Length;
        break;
        case 'Volume':
          this.selectDropdown=this.Volume; 
        break; 
        case 'Temperature':
          this.selectDropdown=this.Temperature;
        break;
                  }
    }
  }
}
</script>

<style scoped>
.conversion-container {
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  background-color: #F5F6FA;
}
.input-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  
}
.md-content {
  width: 345px;
  height: 113px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 3px;
  /* padding: 12px 24px; */
}
.md-field {
  padding-top: 25px;
  min-height: initial;
}
.md-input {
  font-size: 28px !important;
  width: 318px;
  height: 50px;
  font-weight: bold;
  border: solid 1px  #e7dcfe;;
}
.selectfrom,.selectto{
  width: 325px;
  height: 44px;
  border: 1px solid #e7dcfe;
  outline: none;
  padding: 15px;
  font-family: Montserrat, Medium;
  margin-right:21px
  }
</style>
