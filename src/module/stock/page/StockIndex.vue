
<template>
    <div id="stockIndex">
        <div class="menu-list">
            <div class="menu-item">
                <div>
                    <svg class="icon closeImg" aria-hidden="true"  style="font-size: 26px;margin-top: 11px;">
                        <use xlink:href="#icon-wodezhuye"></use>
                    </svg>
                </div>
                <span>我的主页</span>
            </div>
            <div class="menu-item">
                <div>
                    <svg class="icon closeImg" aria-hidden="true"  style="font-size: 26px;margin-top: 11px;">
                        <use xlink:href="#icon-xiaoxizhongxin"></use>
                    </svg>
                </div>
                <span>消息中心</span>
            </div>
            <div class="menu-item">
                <div>
                    <svg class="icon closeImg" aria-hidden="true"  style="font-size: 26px;margin-top: 11px;">
                        <use xlink:href="#icon-wodedingdan"></use>
                    </svg>
                </div>
                <span>我的订单</span>
            </div>
        </div>
    </div>

</template>

<script>
export default {
  name: 'StockIndex'
}
</script>

<style >
    .menu-list{
        display: flex;              /*设置为flex布局*/
        flex-direction: row;        /*横向排列*/
        justify-content: space-around;    /*各item之间被间隔包裹*/
        align-items: center;        /*垂直方向上居中*/
        flex-wrap: nowrap;          /*不换行*/
    }
    .menu-item{
        flex: 1 ;
        text-align: center;
        padding-bottom: 25rpx;
        padding-top: 25rpx;
        font-size: 30rpx;
        color: #333333;
    }

    .iconfont {
        font-size: 30px ;
    }

</style>
