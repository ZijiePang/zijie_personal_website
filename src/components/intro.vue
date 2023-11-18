<template>
    <div class="layout">

      <Menu mode="horizontal" theme="light" active-name="2">
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
            <Row><h1 style="margin-bottom:30px;text-align:center">Introduction</h1></Row>
            <Row type="flex">
                <Col span="6" order="4">
                  <Card style="height:400px;width:300px">
                    <img src="static/travel.jpg" style="height:260px;width:260px;margin:0 auto" alt="">
                    <br><br>
                    <h3>Travel</h3>
                    <Button :size="buttonSize" icon="ios-arrow-forward" type="default" style="margin-top:15px" shape="circle" @click="changeModal('Travel')"></Button>
                  </Card>
                </Col>
                <Col span="6" order="3">
                  <Card style="height:400px;width:300px">
                    <img src="static/kendo.jpg" style="height:260px;width:260px;margin:0 auto" alt="">
                    <br><br>
                    <h3>Sports</h3>
                    <Button :size="buttonSize" icon="ios-arrow-forward" type="default" style="margin-top:15px" shape="circle" @click="changeModal('Sports')"></Button>
                  </Card>
                </Col>
                <Col span="6" order="2">
                  <Card style="height:400px;width:300px">
                    <img src="static/mccombs.jpg" style="height:260px;width:260px;margin:0 auto" alt="">
                    <br><br>
                    <h3>Austin</h3>
                    <Button :size="buttonSize" icon="ios-arrow-forward" type="default" style="margin-top:15px" shape="circle" @click="changeModal('Austin')"></Button>

                  </Card>
                </Col>
                <Col span="6" order="1">
                  <Card style="height:400px;width:300px">
                    <img src="static/rdfz.jpg" style="height:260px;width:260px;margin:0 auto" alt="">
                    <br><br>
                    <h3>Beijing</h3>
                    <Button :size="buttonSize" icon="ios-arrow-forward" type="default" style="margin-top:15px" shape="circle" @click="changeModal('Beijing')"></Button>

                  </Card>
                </Col>
            </Row>
            <Modal
              ok-text="OK"
              cancel-text="Cancel"
              v-model="modal1">
              <h1>{{title}}</h1>
              <br><br>
              <h3>{{modalMsgList[title]}}</h3>

            </Modal>
          </div>
          <Divider />

      </Content>
      <Footer class="layout-footer-center">2021 &copy; Zijie Pang</Footer>
    </div>
</template>



<script>
export default {
  name: 'intro',
  data () {
    return {
      button:'',
      modal1: false,
      title:'',
      modalMsg:'',
      modalMsgList: {'Travel':'I am a big Traveler. UK/France/Switzerland/Japan/Cambodia/USA.',
      'Sports':'I am a kendo player and a swimmer. And recently, I am very into jazz/kpop dances.',
      'Austin':'I have spent 5 years in Austin. It is a beautiful city with live music and lovely nature.',
      'Beijing':'I grew up in Beijing, lots of people and lots of fun!'}
      
    }
  },
  methods: {
    changeModal(i) {
      this.modal1 = true;
      this.title = i;
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
