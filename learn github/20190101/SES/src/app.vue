<style scoped>
@import 'styles/common.css';
 .layout-footer-center{
    text-align: center;
    background:#f5f6f5;
    border-top: 1px solid #ebebeb;
    height:40px;
}
.layout a{
    color:#515a6e;
}
.ivu-layout-header{
    background:#368ee0;
    height:60px;
    padding:0px;
}
.ivu-layout-sider{
    background:#eee;
    height:900px;
}
.ivu-layout-content{
    background:#eee;
    height:900px;
}
.rotate-icon{
    transform: rotate(-90deg);
}
.menu-icon{
    transition: all 0.3s;
}
.menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 60px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .3s ease .2s;
    }
.menu-item{
    background:#eee;
}
.menu-item i{
    transform: translateX(4px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 20px;
}
.collapsed-menu span{
        width: 0px;
        transition: width .3s ease;
    }
.collapsed-menu i{
        transform: translateX(-20px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 24px;
    }
.div-right{
    text-align: right;
}
.div-left{
    text-align: left;
    padding-left: 2px;
}
</style>
<template>
   <!--  <div>
         <p>
            <router-link to="/icon">手机</router-link>
            <router-link to="/dropdown">平板</router-link>
        </p>
        
    </div> -->
    <div class="layout">
        <Layout>
            <Header>
            <!-- div>
                <Icon custom="i-icon  i-icon-computer_fill " size="50" />
            </div>
            <div style="float: left;"> -->
            <icon name="logo" width="50" height="50"></icon>
            <div style="display: inline;float: right;margin-right: 20px;">
                <ButtonGroup size="large">
                    <Tooltip content="个人信息">
                            <Button @click="info" type="text" icon="ios-contact" >张琦</Button>
                    </Tooltip>
                    <Tooltip content="修改密码">    
                            <Button v-on:click="changePwd=true" type="text" custom-icon="i-icon i-icon-editor"></Button>
                            <Modal
                                    v-model="changePwd"
                                    title="修改密码"
                                    @on-ok="ok"
                                    @on-cancel="cancel">
                                    <Form ref="user" :label-width="90" :model="user" :rules="ruleInline">
                                       <FormItem prop="oldPwd" label="旧密码:">
                                            <Input type="password" v-model="user.oldPwd" placeholder="请输入旧密码..."></Input>
                                       </FormItem>
                                       <FormItem prop="newPwd" label="新密码:">
                                            <Input type="password" v-model="user.newPwd" placeholder="请输入新密码..."></Input>
                                       </FormItem>
                                       <FormItem prop="confirmPwd" label="确认新密码:">
                                            <Input id="confirmPwd" type="password" v-model="user.confirmPwd" placeholder="请重新输入新密码..."></Input>
                                       </FormItem>
                                    </Form>
                            </Modal>
                    </Tooltip>
                    <Dropdown @on-click="changeColor" style="margin-left: 20px" >
                        <Button type="text">
                            下拉菜单
                            <Icon type="ios-arrow-down"></Icon>
                        </Button>
                        <DropdownMenu slot="list">
                            <DropdownItem name="blue"><Icon type="ios-arrow-dropright-circle" size="15" color="#2d8cf0"></Icon> 宝石蓝</DropdownItem>
                            <DropdownItem name="grey"><Icon type="ios-arrow-dropright-circle" size="15" color="grey"></Icon> 高级灰</DropdownItem>
                            <DropdownItem name="green"><Icon type="ios-arrow-dropright-circle"size="15" color="green" ></Icon> 翡翠绿</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <Tooltip content="退出">    
                            <Button v-on:click="logout" type="text" icon="md-log-out" ></Button>
                    </Tooltip>
                </ButtonGroup>
            </div>
            <!-- </div> -->
            </Header>
            <Layout>
                <Sider ref="side1" hide-trigger collapsible :collapsed-width="50" v-model="isCollapsed">
                <div :class="div_position">
                    <Icon @click.native="collapsedSider" :class="rotateIcon" type="md-menu" size="30"></Icon>
                </div>
                <Menu :theme="theme" width="auto" :class="menuitemClasses">
                    <MenuItem name="mypaper" to="/mypaper">
                        <Icon custom="i-icon  i-icon-addressbook_fill"></Icon>
                        <span>我的考试</span>
                    </MenuItem>
                    <MenuItem name="exam" to="/dropdown">
                        <Icon type="ios-bookmark"></Icon>
                        <span>考试模拟</span>
                    </MenuItem>
                    <MenuItem name="questionManage">
                        <Icon custom="i-icon i-icon-document_fill"></Icon>
                        <span>题库管理</span>
                    </MenuItem>
                    <MenuItem name="paperManage">
                        <Icon custom="i-icon i-icon-brush_fill"></Icon>
                        <span>试卷管理</span>
                    </MenuItem>
                    <MenuItem name="analysis">
                        <Icon type="md-stats"></Icon>
                        <span>统计分析</span>
                    </MenuItem>
                    <MenuItem name="userManage">
                        <Icon type="ios-people"></Icon>
                        <span>用户管理</span>
                    </MenuItem>
                    <MenuItem name="systemManage">
                        <Icon type="ios-settings"></Icon>
                        <span>系统管理</span>
                    </MenuItem>
                    <Submenu name="2">
                        <template slot="title">
                            <Icon type="ios-filing" />
                            Navigation Two
                        </template>
                        <MenuItem name="2-1">Option 5</MenuItem>
                        <MenuItem name="2-2">Option 6</MenuItem>
                        <Submenu name="3">
                            <template slot="title">Submenu</template>
                            <MenuItem name="3-1">Option 7</MenuItem>
                            <MenuItem name="3-2">Option 8</MenuItem>
                        </Submenu>
                    </Submenu>
                </Menu>
                </Sider>
                <Content >
                    <router-view></router-view>
                </Content>
            </Layout>
            <Footer class="layout-footer-center">2018-2026 &copy; gangu zhang</Footer>
        </Layout>
    </div>
</div>
</template>
<script>
    export default {
        data () {
            var checkConfirmPwd = (rule, value, callback)=>{
                         if (value == '') {
                                return callback(new Error('请再次输入密码'));
                            } else if (value != this.user.newPwd) {
                                return callback(new Error('两次密码不一致'));
                            } else {
                                 callback();
                            }

                    };
            return {
                isCollapsed: false,
                changePwd:false,
                theme:'light',
                avatar:'../../static/timg.jpg',
                user:{
                    oldPwd:'123456',
                    newPwd:'',
                    confirmPwd:''
                },
                ruleInline: {
                    oldPwd: [
                        { required: true, message: '请输入旧密码', trigger: 'blur' }
                    ],
                    confirmPwd: [
                        { required: true, validator:checkConfirmPwd, trigger: 'blur' }
                    ],
                    newPwd: [
                        { required: true, message: '请输入新密码.', trigger: 'blur' },
                        { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
                    ]
                }
            }
        },
        computed: {
            rotateIcon () {
                return [
                    'menu-icon',
                    this.isCollapsed ? 'rotate-icon' : ''
                ];
            },
            menuitemClasses () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            },
            div_position(){
                return ['div-right',
                    this.isCollapsed ? 'div-left' : ''
                ]
            }
        },
        methods: {
            collapsedSider () {
                this.$refs.side1.toggleCollapse();
            },
            logout:function(){
                this.$Message.info('退出成功！');
            },
            ok () {
                this.$refs['infomation'].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            info:function(){
                this.$Message.info('个人信息');
            },
            cancel () {
                this.$Message.info('Clicked cancel');
            },
            changeColor(name) {
                if (name == 'blue') {
                    this.theme = 'dark'
                } else if (name == 'grey') {
                    this.theme = 'light'
                } else {
                    this.theme = 'yellow'
                }
            }
        }
    }
</script>
