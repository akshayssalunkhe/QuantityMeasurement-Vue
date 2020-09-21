<template>
<div class="conversion-container">
    <div class="input-container">
      <md-content>
        <md-field>
          <label>FROM</label>
              <md-input></md-input>
        </md-field>
        <select class="selectfrom">
            <option></option>
        </select>
      </md-content>
      <md-content>
        <md-field>
          <label>TO</label>
          <md-input></md-input>
        </md-field>
        <select class="selectto">
            <option></option>
        </select>
      </md-content>
    </div>
  </div>
</template>

<script>

export default { 
    name:'TextBox',
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
  margin: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 3px;
  padding: 12px 24px;
}
.md-field {
  padding-top: 25px;
  min-height: initial;
}
.md-input {
  font-size: 28px !important;
  width: 379px;
  height: 33px;
  font-weight: bold;
  border: solid 1px  #e7dcfe;;
}
.selectfrom,.selectto{
  width: 384px;
  height: 33px;
  border: 1px solid #e7dcfe;
  outline: none;
  padding-left: 20px;
  font-family: Montserrat, Medium;

  }
</style>
