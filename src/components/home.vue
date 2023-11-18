<template>
    <div class="layout">

      <Menu mode="horizontal" theme="light" active-name="1">
        <MenuItem name="1" to="/">
            <Icon type="md-home" />
            Home
        </MenuItem>
        <MenuItem name="2" to="/intro">
            <Icon type="md-person" />
            Introduction
        </MenuItem>
        <Submenu name="3">
            <template slot="title">
                <Icon type="md-list" />
                Work
            </template>
            <MenuGroup title="Vue">
                <MenuItem name="3-1">My-blog</MenuItem>
                <MenuItem name="3-2">Front-end Internship</MenuItem>
                <MenuItem name="3-3">More...</MenuItem>
            </MenuGroup>
        </Submenu>
        <MenuItem name="4">
            <Icon type="md-paper" />
            Download Resume
        </MenuItem>
      </Menu>
      <Content :style="{padding: '0 50px'}">
          <Breadcrumb :style="{margin: '20px 0'}">

          </Breadcrumb>

          <div  style="margin-top:100px; margin-bottom:30px">
              <img src="static/hello.jpeg" style="width:150px;height:150px;margin-top:20px">

              <div style="min-height:200px;margin-left:40%">
                <h1 style="color:#2d8cf0;font-weight:bold">Hello,</h1>
                <h1>I am Zijie Pang</h1>
                <h2>Welcome to my personal website</h2>

              </div>
          </div>
          <Divider />
          <div>
              <RadioGroup v-model="button" type="button" size="large" style="margin-bottom:30px" @on-change='changeIntro'>
                <Radio label="Audit"></Radio>
                <Radio label="Data"></Radio>
                <Radio label="Front-end"></Radio>
                <Radio label="PM"></Radio>
                <Radio label="VC"></Radio>
                <Radio label="And more"></Radio>
              </RadioGroup>
              <Card :bordered="false" style="width:600px;height:150px;margin:0 auto;margin-bottom:30px">
                <h3>{{msg}}</h3>
              </Card>
              <Button :size="large" icon="ios-arrow-forward" type="primary" to="/intro">More about me</Button>
              <br><br>
              <br><br>
              <br><br>



          </div>
      </Content>
      <Footer class="layout-footer-center">2021 &copy; Zijie Pang</Footer>
    </div>
</template>



<script>
export default {
  name: 'home',
  data () {
    return {
      button:'',
      msg: 'Select a button above to check out my experience :)',
      msgList: ['I graduated from the integrated Master of Professional Accounting program at the University of Texas at Austin. I had several audit internship: external audit at KPMG & internal audit at DJO Global',
      'I am currently serve as a venture capital analyst at BOCGI, where my focus lies on growth investments within the tech sector.',
      'I am also a front-end software developer. As you can see, I created this website using Vue.js and iView framework. Also, I worked at TalkingData as a front-end SDE intern.',
      'I have learned RStudio and Python during college. Then, I took online classes on machine learning, where I learned to use Pandas/Matplotlib/PyTorch and participated in a Kaggle competition.',
      'Due to my curiosity towards Product Mangament, I challenged myself by switching to a PM intern role at TalkingData, where I was incharge of an advertisement monitoring SaaS product.',
      'More...'],
      intro:["Audit","VC","Front-end","Data","PM","And more"]
    }
  },
  methods: {
    changeIntro(){
      this.msg = this.msgList[this.intro.indexOf(this.button)]

    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  text-align: justify;
}
h3 {
  font-weight: normal;
  text-align: center;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.profile{
  margin-left:40%;
  margin-right: 0%;
}
.layout{
    border: 1px solid white;
    background:whi;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: white;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
.layout-footer-center{
    text-align: center;
}
</style>
