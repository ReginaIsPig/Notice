<template>
    <Row style="background:#eee;padding:20px" >
        <Col offset=23 span="1" style="padding:10px">
            <Button size='small' style="left:203px;">s<br>s<br>s<br>s</Button>
        </Col>
        <Col span="3" style="padding:10px" v-for="item in items">
            <Card >
                <p slot="title">{{item.title}}</p>
                <p>{{item.time}}</p>
                <p>{{item.address}}</p>
                <p>{{item.score}}</p>
            </Card>
        </Col>
        <Col span="24" style="padding:10px">
            <Button type="success" long @click="loadData">更多...</Button>
        </Col>
    </Row>
</template>
<script>
    export default {
        data () {
            return{
                items:[
                       {title:'第一次考试',time:'2018-10-24 9:00:00 至 2018-10-24 11:00:00',address:'西安软件新城',score:'90'},
                       {title:'第一次考试',time:'2018-10-24 9:00:00 至 2018-10-24 11:00:00',address:'西安软件新城',score:'90'},
                       {title:'第一次考试',time:'2018-10-24 9:00:00 至 2018-10-24 11:00:00',address:'西安软件新城',score:'90'},
                       {title:'第一次考试',time:'2018-10-24 9:00:00 至 2018-10-24 11:00:00',address:'西安软件新城',score:'90'},
                       {title:'第一次考试',time:'2018-10-24 9:00:00 至 2018-10-24 11:00:00',address:'西安软件新城',score:'90'},
                       {title:'第一次考试',time:'2018-10-24 9:00:00 至 2018-10-24 11:00:00',address:'西安软件新城',score:'90'},
                       {title:'第一次考试',time:'2018-10-24 9:00:00 至 2018-10-24 11:00:00',address:'西安软件新城',score:'90'},
                       {title:'第一次考试',time:'2018-10-24 9:00:00 至 2018-10-24 11:00:00',address:'西安软件新城',score:'90'},

                       {title:'第一次考试',time:'2018-10-24 9:00:00 至 2018-10-24 11:00:00',address:'西安软件新城',score:'90'},
                       {title:'第一次考试',time:'2018-10-24 9:00:00 至 2018-10-24 11:00:00',address:'西安软件新城',score:'90'},
                       {title:'第一次考试',time:'2018-10-24 9:00:00 至 2018-10-24 11:00:00',address:'西安软件新城',score:'90'},
                       {title:'第一次考试',time:'2018-10-24 9:00:00 至 2018-10-24 11:00:00',address:'西安软件新城',score:'90'},
                       {title:'第一次考试',time:'2018-10-24 9:00:00 至 2018-10-24 11:00:00',address:'西安软件新城',score:'90'},
                       {title:'第一次考试',time:'2018-10-24 9:00:00 至 2018-10-24 11:00:00',address:'西安软件新城',score:'90'},
                       {title:'第一次考试',time:'2018-10-24 9:00:00 至 2018-10-24 11:00:00',address:'西安软件新城',score:'90'},
                       {title:'第一次考试',time:'2018-10-24 9:00:00 至 2018-10-24 11:00:00',address:'西安软件新城',score:'90'},

                       {title:'第一次考试',time:'2018-10-24 9:00:00 至 2018-10-24 11:00:00',address:'西安软件新城',score:'90'},
                       {title:'第一次考试',time:'2018-10-24 9:00:00 至 2018-10-24 11:00:00',address:'西安软件新城',score:'90'},
                       {title:'第一次考试',time:'2018-10-24 9:00:00 至 2018-10-24 11:00:00',address:'西安软件新城',score:'90'},
                       {title:'第一次考试',time:'2018-10-24 9:00:00 至 2018-10-24 11:00:00',address:'西安软件新城',score:'90'},
                       {title:'第一次考试',time:'2018-10-24 9:00:00 至 2018-10-24 11:00:00',address:'西安软件新城',score:'90'},
                       {title:'第一次考试',time:'2018-10-24 9:00:00 至 2018-10-24 11:00:00',address:'西安软件新城',score:'90'},
                       {title:'第一次考试',time:'2018-10-24 9:00:00 至 2018-10-24 11:00:00',address:'西安软件新城',score:'90'},
                       {title:'第一次考试',time:'2018-10-24 9:00:00 至 2018-10-24 11:00:00',address:'西安软件新城',score:'90'},

                       {title:'第一次考试',time:'2018-10-24 9:00:00 至 2018-10-24 11:00:00',address:'西安软件新城',score:'90'},
                       {title:'第一次考试',time:'2018-10-24 9:00:00 至 2018-10-24 11:00:00',address:'西安软件新城',score:'90'},
                       {title:'第一次考试',time:'2018-10-24 9:00:00 至 2018-10-24 11:00:00',address:'西安软件新城',score:'90'},
                       {title:'第一次考试',time:'2018-10-24 9:00:00 至 2018-10-24 11:00:00',address:'西安软件新城',score:'90'},
                       {title:'第一次考试',time:'2018-10-24 9:00:00 至 2018-10-24 11:00:00',address:'西安软件新城',score:'90'},
                       {title:'第一次考试',time:'2018-10-24 9:00:00 至 2018-10-24 11:00:00',address:'西安软件新城',score:'90'},
                       {title:'第一次考试',time:'2018-10-24 9:00:00 至 2018-10-24 11:00:00',address:'西安软件新城',score:'90'},
                       {title:'第一次考试',time:'2018-10-24 9:00:00 至 2018-10-24 11:00:00',address:'西安软件新城',score:'90'}]
            }
        },
        mounted () {
            window.addEventListener('scroll', this.handleScroll)
        },
        methods:{
            loadData(){
                for(var i=0;i<16;i++){
                    this.items.push({title:'第一次考试',time:'2018-10-24 9:00:00 至 2018-10-24 11:00:00',address:'西安软件新城',score:'90'});
                }
            },
            handleScroll () {
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                alert(scrollTop)
            }
        }
    }
</script>