<template>
<div class="conversion-container">
    <div class="input-container">
      <md-content>
        <md-field>
          <label>FROM</label>
              <md-input 
              @input="changedSecondUnit()"
              class="textbox"
              type="text"
              v-model="firstTextValue"
              ></md-input>
        </md-field>
        <select class="selectfrom"  @change="changedFirstUnit()" v-model="selectedFirstUnit">
            <option 
            class="option-box"
                v-for="subUnit in subUnits"
                v-bind:key="subUnit"
            > {{ subUnit }}</option>
        </select>
      </md-content>
      <md-content>
        <md-field>
          <label>TO</label>
          <md-input
          @input="changedFirstUnit()"
              class="textbox"
              type="text"
              v-model="secondTextValue"
           ></md-input>
        </md-field>
        <select class="selectto">
            <option
             class="option-box"
                v-for="subUnit in subUnits"
                v-bind:key="subUnit">
                {{subUnit}}
             </option>
        </select>
      </md-content>
    </div>
  </div>
</template>

<script>
import {bus} from '../main' 
import QuantityMeasurement from "../services/QuantityMeasurement";


export default { 
    name:'TextBox',
    data(){ 
      return{
      // initialFrom:"1",
      // initialTo:"1",
      // selectDropdown:[],
      // Length:['Meter','kilometer','centimeter'],
      // Volume:['liter','mililiter'],
      // Temperature:['kelvin','fahrenheit'],

    selectedMainUnit: "",
    subUnits: [],
    firstTextValue: "1",
    secondTextValue: "",
    selectedFirstUnit: null,
    selectedSecondUnit: null,
          
            }     
    },

  methods:{

        fetchSubUnits: function (selectedMainUnit) {
         QuantityMeasurement
        .getSubUnit(selectedMainUnit)        
        .then((response) => {
          this.subUnits = response.data;
        })
       .catch((error) => {
          console.log(error);
        });
    },

      changedFirstUnit: function () {
       QuantityMeasurement
        .getConvertedValue(
          this.secondTextValue,
          this.selectedSecondUnit,
          this.selectedFirstUnit
        )
        .then((response) => {
          this.firstTextValue = response.data.value;
        })
        .catch((error) => {
          console.log(error);
        });
    },

     changedSecondUnit: function () {
       QuantityMeasurement
        .getConvertedValue(
          this.firstTextValue,
          this.selectedFirstUnit,
          this.selectedSecondUnit
        )
        .then((response) => {
          this.secondTextValue = response.data.value;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  
  watch: {
    subUnits: function () {
      this.selectedFirstUnit = this.subUnits[0];
      this.selectedSecondUnit = this.subUnits[1];
      this.firstTextValue='1';
      this.changedSecondUnit();
    },
  },

    mounted() {
    bus.$on("changedMainUnit", (unit) => {
      this.selectedMainUnit = unit;
      this.fetchSubUnits(this.selectedMainUnit);
    });
    this.selectedFirstUnit = this.subUnits[0];
    this.selectedSecondUnit = this.subUnits[1];
  },

},
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
  font-size: 28px;
  width: 318px;
  height: 40px;
  font-weight: bold;
  border: solid 1px  #e7dcfe;;
}
.selectfrom,.selectto{
  width: 325px;
  height: 44px;
  border: 1px solid #e7dcfe;
  outline: none;
  padding: 10px;
  font-family: Montserrat, Medium;
  margin-right:21px
  }
</style>
