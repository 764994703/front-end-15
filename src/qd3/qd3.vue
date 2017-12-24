
<template>
  	<div class="qd3">
    	<img src="../assets/picture.jpg">
    <h1>hello world</h1>
    <button id="back-btn" v-if="!isCountDown">Back to catagory</button>
    <h1>我要当学霸</h1>
    <h1><span class="time" v-text="hour" @click="setTime"></span> 时
      <span class="time" v-text="minute" @click="setTime"></span> 分
      <span class="time" v-text="second" @click="setTime"></span> 秒</h1>

      <div v-if="showList">
        <h2 >设置不可取消学习时间</h2>
        <select class="select-list" id="setHour">
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
        </select>
        <p class="unit">时</p>
        <select class="select-list" id="setMinute">
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
          <option value="28">28</option>
          <option value="29">29</option>
          <option value="30">20</option>
          <option value="31">31</option>
          <option value="32">32</option>
          <option value="33">33</option>
          <option value="34">34</option>
          <option value="35">35</option>
          <option value="36">36</option>
          <option value="37">37</option>
          <option value="38">38</option>
          <option value="39">39</option>
          <option value="40">40</option>
          <option value="41">41</option>
          <option value="42">42</option>
          <option value="43">43</option>
          <option value="44">44</option>
          <option value="45">45</option>
          <option value="46">46</option>
          <option value="47">47</option>
          <option value="48">48</option>
          <option value="49">49</option>
          <option value="50">50</option>
          <option value="51">51</option>
          <option value="52">52</option>
          <option value="53">53</option>
          <option value="54">54</option>
          <option value="55">55</option>
          <option value="56">56</option>
          <option value="57">57</option>
          <option value="58">58</option>
          <option value="59">59</option>
        </select>
        <p class="unit">分  </p>
        <button id="confirm-time" @click="changeTime">开始学习</button>
      </div>
  	</div>
</template>

<script>
//import HelloWorld from './components/HelloWorld'
import HelloWorld from '@/components/HelloWorld'

export default {
  	name: 'HelloWorld',
  	data: function(){
    return {
      hour: 0,
      minute: 0,
      second: 0,
      showList: false,
      isCountDown: false,
      timer: null
    }
  },
  components: {
    HelloWorld
  },
  methods:{
    setTime:function(){
      this.showList = true
    },
    changeTime: function() {
      this.hour = document.getElementById("setHour").value;
      this.minute = document.getElementById("setMinute").value;

      if (!this.timer){
        this.isCountDown = true;
        console.log("1");

        this.timer = setInterval(()=>{
          if ((this.hour == 0) && (this.minute == 0) && (this.second == 0)){
            this.isCountDown = false;
            clearInterval(this.timer);
            this.timer = null;
          }
          else{
            console.log("2");
            this.second -= 1;
            if (this.second < 0){
              this.minute -= 1;
              this.second += 60;
            }
            if (this.minute < 0){
              this.hour -= 1;
              this.minute += 60;
            }
          }
        }, 1000);
      }
    },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  ul{
    list-style: none;
    padding: 0;
  }
  li{
    height: 30px;
  }
  .time{
    font-size: 70px;
    cursor: pointer;
  }
  .unit{
    display: inline;
  }
  #back-btn{
    font-family: Arial, sans-serif;
    font-size: 20px;
    width: 100px;
  }
</style>
