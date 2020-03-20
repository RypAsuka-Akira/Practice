<template>
  <div id="all">
    <div id="logo">
      <div class="logo1">
        <img src="../../assets/home/logo.png" style="max-width: 578px; width:100%;">
      </div>
      <div id="submit">
        <el-button type="success"
                   icon="el-icon-plus"
                   circle
                   @click="jumpEdit"></el-button>
      </div>
      <div id="login">
        <el-button type="success"
                   icon="el-icon-check"
                   circle
                   @click="jumpHome"></el-button>
      </div>
    </div>
    <div id="container">
      <div id="pic">
        <div id="pic1">
        <el-col :span="22">
          <el-card :body-style="{ padding: '0px' }">
            <img src="../../assets/home/1.jpg" class="image">
            <div style="padding: 14px;">
              <span>1</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button" @click="dialogFormVisible = true">修改图片</el-button>
                <el-dialog title="修改图片" :visible.sync="dialogFormVisible">
                  <el-form :model="form">
                    <el-form-item label="标题" :label-width="formLabelWidth">
                      <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="上传图片" :label-width="formLabelWidth">

                    <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
                      <i class="el-icon-upload" ></i>
                      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                    </el-form-item>
                  </el-form>
                  <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                  </div>
                </el-dialog>
              </div>
            </div>
          </el-card>
        </el-col>
        </div>
        <div id="pic2">
            <el-col :span="22">
              <el-card :body-style="{ padding: '0px' }">
                <img src="../../assets/home/2.jpg" class="image">
                <div style="padding: 14px;">
                  <span>2</span>
                  <div class="bottom clearfix">
                    <time class="time">{{ currentDate }}</time>
                    <el-button type="text" class="button" @click="dialogFormVisible = true">修改图片</el-button>
                    <el-dialog title="修改图片" :visible.sync="dialogFormVisible">
                      <el-form :model="form">
                        <el-form-item label="标题" :label-width="formLabelWidth">
                          <el-input v-model="form.name" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="上传图片" :label-width="formLabelWidth">

                          <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
                            <i class="el-icon-upload" ></i>
                            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                          </el-upload>
                        </el-form-item>
                      </el-form>
                      <div slot="footer" class="dialog-footer">
                        <el-button @click="dialogFormVisible = false">取 消</el-button>
                        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                      </div>
                    </el-dialog>
                  </div>
                </div>
              </el-card>
            </el-col>
        </div>
        <div id="pic3">
            <el-col :span="22">
              <el-card :body-style="{ padding: '0px' }">
                <img src="../../assets/home/3.jpg" class="image">
                <div style="padding: 14px;">
                  <span>3</span>
                  <div class="bottom clearfix">
                    <time class="time">{{ currentDate }}</time>
                    <el-button type="text" class="button" @click="dialogFormVisible = true">修改图片</el-button>
                    <el-dialog title="修改图片" :visible.sync="dialogFormVisible">
                      <el-form :model="form">
                        <el-form-item label="标题" :label-width="formLabelWidth">
                          <el-input v-model="form.name" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="上传图片" :label-width="formLabelWidth">

                          <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
                            <i class="el-icon-upload" ></i>
                            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                          </el-upload>
                        </el-form-item>
                      </el-form>
                      <div slot="footer" class="dialog-footer">
                        <el-button @click="dialogFormVisible = false">取 消</el-button>
                        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                      </div>
                    </el-dialog>
                  </div>
                </div>
              </el-card>
            </el-col>
        </div>
        <div id="pic4">
            <el-col :span="22">
              <el-card :body-style="{ padding: '0px' }">
                <img src="../../assets/home/4.jpg" class="image">
                <div style="padding: 14px;">
                  <span>4</span>
                  <div class="bottom clearfix">
                    <time class="time">{{ currentDate }}</time>
                    <el-button type="text" class="button" @click="dialogFormVisible = true">修改图片</el-button>
                    <el-dialog title="修改图片" :visible.sync="dialogFormVisible">
                      <el-form :model="form">
                        <el-form-item label="标题" :label-width="formLabelWidth">
                          <el-input v-model="form.name" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="上传图片" :label-width="formLabelWidth">

                          <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
                            <i class="el-icon-upload" ></i>
                            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                          </el-upload>
                        </el-form-item>
                      </el-form>
                      <div slot="footer" class="dialog-footer">
                        <el-button @click="dialogFormVisible = false">取 消</el-button>
                        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                      </div>
                    </el-dialog>
                  </div>
                </div>
              </el-card>
            </el-col>
        </div>
        <div id="pic5">
            <el-col :span="22">
              <el-card :body-style="{ padding: '0px' }">
                <img src="../../assets/home/5.jpg" class="image">
                <div style="padding: 14px;">
                  <span>5</span>
                  <div class="bottom clearfix">
                    <time class="time">{{ currentDate }}</time>
                    <el-button type="text" class="button" @click="dialogFormVisible = true">修改图片</el-button>
                    <el-dialog title="修改图片" :visible.sync="dialogFormVisible">
                      <el-form :model="form">
                        <el-form-item label="标题" :label-width="formLabelWidth">
                          <el-input v-model="form.name" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="上传图片" :label-width="formLabelWidth">

                          <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
                            <i class="el-icon-upload" ></i>
                            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                          </el-upload>
                        </el-form-item>
                      </el-form>
                      <div slot="footer" class="dialog-footer">
                        <el-button @click="dialogFormVisible = false">取 消</el-button>
                        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                      </div>
                    </el-dialog>
                  </div>
                </div>
              </el-card>
            </el-col>
        </div>
        <div id="pic6">
            <el-col :span="22">
              <el-card :body-style="{ padding: '0px' }">
                <img src="../../assets/home/6.jpg" class="image">
                <div style="padding: 14px;">
                  <span>6</span>
                  <div class="bottom clearfix">
                    <time class="time">{{ currentDate }}</time>
                    <el-button type="text" class="button" @click="dialogFormVisible = true">修改图片</el-button>
                    <el-dialog title="修改图片" :visible.sync="dialogFormVisible">
                      <el-form :model="form">
                        <el-form-item label="标题" :label-width="formLabelWidth">
                          <el-input v-model="form.name" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="上传图片" :label-width="formLabelWidth">

                          <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
                            <i class="el-icon-upload" ></i>
                            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                          </el-upload>
                        </el-form-item>
                      </el-form>
                      <div slot="footer" class="dialog-footer">
                        <el-button @click="dialogFormVisible = false">取 消</el-button>
                        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                      </div>
                    </el-dialog>
                  </div>
                </div>
              </el-card>
            </el-col>
        </div>
      </div>
      <div id="notice">
        <div id="noticeContainer">
          <el-table
            :data="tableData"
            style="width: 100%"
            height="300">
            <el-table-column
              label="新闻"
              width="600">
              <template slot-scope="scope">
                <el-tag size="medium">
                    <a>{{ scope.row.title }}</a>
                </el-tag>
              </template>
            </el-table-column>
            <el-table-column
              label="日期"
              width="200"
              align="center">
              <template slot-scope="scope">
                <i class="el-icon-time"></i>
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="操作"
              align="center"
              >
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  type="danger"
                  @click.native="deleteNews(scope.row.id)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
      <div id="news">
        <div id="newsContainer">
          <el-table
            :data="tableData2"
            style="width: 100%"
            height="300">
            <el-table-column
              label="公告"
              width="600"
            >
              <template slot-scope="scope" >
                  <a>{{ scope.row.title }}</a>
              </template>
            </el-table-column>
            <el-table-column
              label="日期"
              width="200"
              align="center">
              <template slot-scope="scope">
                <i class="el-icon-time"></i>
                <span style="margin-left: 10px">{{scope.row.date}}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="操作"
              align="center"
              >
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  type="danger"
                  @click.native="deleteNotice(scope.row.id)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tNews',
  data () {
    return {
      identity: '',
      show: false,
      tableData: [],
      tableData2: [],
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },

      formLabelWidth: '120px',

      imgs: [
        { url: require('../../assets/home/1.jpg') },
        { url: require('../../assets/home/2.jpg') },
        { url: require('../../assets/home/3.jpg') },
        { url: require('../../assets/home/4.jpg') },
        { url: require('../../assets/home/5.jpg') },
        { url: require('../../assets/home/6.jpg') }
      ],
      currentDate: new Date()
    }
  },
  methods: {
    deleteNews (id) {
      console.log(id)
      this.$axios.delete('/api/new/' + id)
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteNotice (id) {
      console.log(id)
      this.$axios.delete('/api/new/' + id)
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    },
    jumpHome () {
      this.$router.push({ path: '/tInfo/identity' })
    },
    jumpEdit () {
      this.$router.push({ path: '/tEdit' })
    },
    show1 () {
      let activeIndex = this.$refs.carousel.activeIndex
      this.$router.push(this.imgs[activeIndex].link)
    }
  },
  created () {
    this.$axios.get('/api/new/')
      .then(res => {
        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i].classs === 0) {
            this.tableData.push(res.data[i])
          } else {
            this.tableData2.push(res.data[i])
          }
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #all{
    width: 100%;
    height:1900px;
    background-image: url("../../assets/home/bg2.jpg");
  }
  #logo{
    width: inherit;
    height: 20vh;
    padding-left: 100px;
    padding-top: 50px;
  }
  .logo1{
    width:50%;height:100%;
  }
  #submit{
    position:absolute ;
    left:1350px;
    top:100px;
  }
  #login{
    position:absolute ;
    left:1400px;
    top:100px;
  }
  #container{
    width: inherit;
    height: 150vh;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 20px 0;
  }
  #pic{
    width: inherit;
    height: 950px;
    padding: 0 200px;
    float: left;
  }
  #pic1{
    width: 450px;
    height: 300px;
    float: left;
    margin-left: 100px;
  }
  #pic2{
    width: 450px;
    height: 300px;
    float: left;
    margin-left: 100px;
  }
  #pic3 {
    width: 450px;
    height: 300px;
    float: left;
    margin-left: 100px;
  }
  #pic4{
    width: 450px;
    height: 300px;
    float: left;
    margin-left: 100px;
  }
  #pic5{
    width: 450px;
    height: 300px;
    float: left;
    margin-left: 100px;
  }
  #pic6{
    width: 450px;
    height: 300px;
    float: left;
    margin-left: 100px;
  }
  #notice, #news{
    width: 100%;
    height: 300px;
    margin: 20px 20px;
    display: flex;
    justify-content: center;
  }
  #noticeContainer, #newsContainer{
    width: 1000px;
    height: 300px;
    display: flex;
    align-items: center;
  }
  a{
    text-decoration:none;
    color: black;
  }
  .el-carousel__item h3 {
    font-size: 14px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(3) {
    background-image: url("../../assets/home/1.jpg");
  }

  .el-carousel__item:nth-child(4) {
    background-image: url("../../assets/home/2.jpg");
  }
  .el-carousel__item:nth-child(5) {
    background-image: url("../../assets/home/3.jpg");
  }
  .el-carousel__item:nth-child(6) {
    background-image: url("../../assets/home/4.jpg");
  }
  .el-carousel__item:nth-child(7) {
    background-image: url("../../assets/home/5.jpg");
  }
  .el-carousel__item:nth-child(8) {
    background-image: url("../../assets/home/6.jpg");
  }

  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 430px;
    height:200px;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>
