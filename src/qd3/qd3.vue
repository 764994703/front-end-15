
<template>
  	<div class="qd3">
    	<img src="../assets/picture.jpg">

      <h1 id="title">我要当学霸!</h1>
    <h3>Tip：君子言必行行必果，约定好的学习时间要做到！否则会系统会惩罚你！</h3>
    <h1>{{msg}}学习时间： <span class="time" v-text="hour" @click="setTime"></span> 时
      <span class="time" v-text="minute" @click="setTime"></span> 分
      <span class="time" v-text="second" @click="setTime"></span> 秒</h1>

      <div v-if="showList">
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
        <p class="unit">分        </p>
        <button class="btn" id="confirm-time" @click="changeTime">开始学习</button>
      </div>

      <div v-if="isCountDown">
        <button class="btn" @click="pauseStudy">中断学习</button>
        <button class="btn" @click="continueStudy">继续学习</button>
      </div>

    <br/>
    <br/>

    <button class="btn" id="back-btn" v-if="!isCountDown" @click='toggle'>Back to catagory</button>
  	</div>
</template>

<script>
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
      isPaused: false,
      timer: null,
      punisher: null,
      msg:'',
      items: ["国强爸爸的算法看完了没有啊！", "ICS这周的作业做了没有啊！",
        "数据结构早就忘光了还不去看啊！","基电就快考试了复习过了没啊！",
        "电工老师讲的还记不记得啊！","大物会做一点点了没有啊！",
        "任爹的前端写完了没啊！","那你还不赶快去学习啊！",
      ]
    }
  },
  components: {
    HelloWorld
  },
  methods:{
    setTime:function(){
      this.showList = true;
      this.msg = "设置"
    },
    changeTime: function() {
      this.hour = document.getElementById("setHour").value;
      this.minute = document.getElementById("setMinute").value;
      this.msg = "剩余";

      if (!this.timer){
        this.isCountDown = true;
        this.showList = false;

        this.timer = setInterval(()=>{
          if (!this.ispaused) {
            if ((this.hour == 0) && (this.minute == 0) && (this.second == 0)) {
              this.isCountDown = false;
              clearInterval(this.timer);
              this.timer = null;
              this.msg = "";
            }
            else {
              this.second -= 1;
              if (this.second < 0) {
                this.minute -= 1;
                this.second += 60;
              }
              if (this.minute < 0) {
                this.hour -= 1;
                this.minute += 60;
              }
            }
          }
        }, 1000);
      }
    },
    pauseStudy: function(){
      this.ispaused = true;
      var i = 0;
      var timedelay = 0;
      var speed = 2000;
      this.punisher = setInterval(()=>{
        if (this.ispaused) {
          alert(this.items[i % 8]);
          i += 1;
          timedelay += 1;
          if ((timedelay >= 10) && (speed >= 800)) {
            speed = 2000 - timedelay*100;
          }
        }
      },speed);
    },
    continueStudy: function(){
        this.ispaused = false;
    },
    toggle:function () {
      this.$router.push('/');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.qd3{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
   h1, h2 {
    font-weight: normal;
  }
  ul{
    list-style: none;
    padding: 0;
  }
  li{
    height: 30px;
  }
  a {
    color: #42b983;
  }
  .time{
    font-size: 70px;
    cursor: pointer;
  }
  .unit{
    display: inline;
    font-size: 20px;
  }
  #back-btn{
    font-family: Arial, sans-serif;
    font-size: 20px;
    width: 200px;
  }
  #title{
    font-size: 50px;
    font-weight: bolder;
    font-family: sans-serif;
  }
  .select-list {
    background: transparent;
    border-color: grey;
    padding-left: 10px;
    width: 120px;
    height: 40px;
    cursor: pointer;
    border-radius: 5px;
    font-size: 20px;
  }
  .btn{
    background-color: whitesmoke;
    border: none;
    color: black;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: large;
    cursor: pointer;
    border-radius: 15px;
    padding: 10px 22px;
  }
  .btn:hover{
    background-color: grey;
    color: white;
  }
  .btn:active {
    background-color: grey;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
</style>
