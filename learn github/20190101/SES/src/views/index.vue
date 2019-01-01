<template>
    <div style="background:#eee;padding: 20px">
        <Card :bordered="false">
            <p slot="title">系统介绍</p>
             <Collapse v-model="value2" v-for="item in items" accordion>
                <Panel :name="item.index">
                    {{item.title}}
                    <p slot="content" >{{item.content}}</p>
                </Panel>
            </Collapse>
        </Card>
    </div>
</template>
<script>
   export default {
        data () {
            return {
                value2: '1',
                items:[{index:'1',title:'我的考试',content:'当前登录人考过的试'},{index:'2',title:'模拟考试',content:'对考过的试进行模拟练习'}]
            }
        }
    }
</script>
