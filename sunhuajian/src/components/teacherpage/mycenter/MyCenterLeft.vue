<template>
  <section class="content_left">
            <div class="personal_information">
                                <div class="head_portrait">
                                    <img src="../../../assets/img/t1.jpg" alt="用户信息头像">
                                </div>
                                <div class="personal_msg">
                                    <p><span>孙华建</span><span class="per"></span></p>
                                    <p><span>信息完整度</span><span class="line"></span><span class="tall">高</span></p>
                                    <p><i class="fa fa-tablet"></i><i class="fa fa-id-card-o"></i><i class="fa fa-envelope-o"></i>
                                    </p>
                                </div>
                    </div>   
                    <div class="money">
                                <div class="withdraw_deposit">申请提现</div>
                                <div class="balance">
                                    <h5>账户余额</h5>
                                    <span class="num">456</span><span class="unit">元</span>
                                </div>
                    </div>  
                    <div class="identity_card">
                                <div>
                                    <div class="identity_card_front">
                                        <img src="../../../assets/img/front_fs.jpg" alt="">
                                    </div>
                                    <p>
                                        <span class="real_name_authentication">实名认证</span>
                                        <span class="no_authentication">【未认证】</span></p>
                                </div>
                                <div>
                                    <div class="identity_card_back">
                                        <img src="../../../assets/img/back_fs.jpg" alt="">
                                    </div>
                                    <p>
                                        <span class="real_name_authentication">资质认证</span>
                                        <span class="no_authentication">【未认证】</span>
                                    </p>
                                </div>
            </div>          
</section>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
 .content {
            margin: 35px auto;
        }

        .content_left {
            float: left;
            background-color: #fff;
        }

        .content_right {
            float: right;
        }


        .content_left .head_portrait {
            display: inline-block;
            width: 120px;
            height: 120px;
            margin-right: 40px;
            cursor: pointer;
            position: relative;
        }

        .content_left .head_portrait img {
            display: block;
            width: 120px;
            height: 120px;
            border-radius: 50%;
        }
        .content_left .head_portrait .bj {
            display: block;
            width: 120px;
            height: 40px;
            background-color: #333333;
            opacity: 0.8;
            text-align: center;
            color: #fff;
            border-bottom-right-radius: 50%;
            border-bottom-left-radius: 50%;
        }

        .content_left .personal_msg {
            display: inline-block;
            vertical-align: top;
        }

        .content_left .personal_msg p {
            margin: 0 0 22px 0;
        }

        .content_left .personal_msg p:first-child {
            margin-top: 15px;
            font-size: 24px;
            font-weight: bold;
        }

        .content_left .personal_msg p:nth-child(2) {
            font-size: 18px;
        }

        .content_left .personal_msg .per {
            display: inline-block;
            width: 30px;
            height: 20px;
            /* background-image: url(../images/per.jpg); */
            background-position: center;
            background-size: cover;
        }

        .content_left .personal_msg .line {
            display: inline-block;
            width: 190px;
            height: 5px;
            border-radius: 5px;
            margin: 0 15px;
            background-color: #00aaff;
        }

        .content_left .personal_msg .tall {
            color: #00aaff
        }

        .content_left .personal_msg p i {
            margin: 0 8px 0 0;
            font-size: 16px;
        }

        .content_left .personal_msg p i:first-child {
            color: #00aaff
        }

        .personal_information {
            padding: 50px 50px 25px 50px;
            border-bottom: 1px solid #f4f4f4;
        }

        .content_left .money {
            display: flex;
            align-items: center;
            height: 150px;
            border-bottom: 1px solid #f4f4f4;
        }

        .content_left .withdraw_deposit {
            width: 210px;
            height: 35px;
            color: #fff;
            line-height: 35px;
            text-align: center;
            margin: 0px 60px 0px 50px;
            background-color: #00aaff;
            border-radius: 35px;
            cursor: pointer;
        }

        .content_left .balance h5 {
            font-size: 16px;
            color: gray;
            margin-bottom: 20px;
        }

        .content_left .balance .num {
            font-size: 46px;
            margin-right: 10px;
        }

        .content_left .balance .unit {
            font-size: 16px;
        }

        .identity_card {
            box-sizing: border-box;
            padding: 85px 55px;
            display: flex;
            justify-content: space-around;
        }

        .content_left .identity_card_front,
        .content_left .identity_card_back {
            width: 225px;
            height: 165px;
            height: 165px;
            text-align: center;
            margin-right: 40px;
            background-color: #f4f4f4;
            padding: 35px 55px;
            box-sizing: border-box;
            cursor: pointer;
        }

        .content_left .identity_card_back {
            margin-right: 0px;
        }

        .content_left .identity_card_front img,
        .content_left .identity_card_back img {
            display: block;
            width: 100%;
            height: 100%;
        }

        .content_left .identity_card p {
            width: 225px;
            text-align: center;
            font-size: 14px;
            margin-top: 25px;
        }

        .content_left .identity_card p span:first-child {
            color: gray;
        }

        .content_left .identity_card p span:last-child {
            color: red;
        }
</style>