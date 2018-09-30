<template>
    <div style='margin-top:1.28rem;'>
         <!-- 为ECharts准备一个具备大小（宽高）的Dom -->
        <div id="main" style="width: 7rem;height:7rem;"></div>
    </div>
</template>

<script>
import bus from "../../assets/js/common.js"
export default {
    data(){
        return{
            provinceList:[]
        }
    },
    created(){
        bus.$emit("setTitleBus", "全国吃辣排行");
    },
    mounted(){
        this.pepperFun();
    },
    methods:{
        pepperFun(){
            // 基于准备好的dom，初始化echarts实例
            var myChart = this.$echarts.init(document.getElementById('main'));

            // 指定图表的配置项和数据
            let option = {
                title: {
                    text: '全国吃辣排行',
                    subtext: '数据来自网络',
                    textStyle:{
                    }
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                legend: {
                    data: []
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'value',
                    boundaryGap: [0, 0.01],
                    show:false
                },
                yAxis: {
                    type: 'category',
                    data: ['其他地区','海南','广西',"江西",'云南','湖北',"贵州","重庆","四川","湖南",]
                },
                series: [
                    {
                        name: '2012年',
                        type: 'bar',
                        data: [1, 2, 3, 4, 5,6,7,8,9,10]
                    }
                ]
            };
            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        }
    }
}
</script>

<style>

</style>
