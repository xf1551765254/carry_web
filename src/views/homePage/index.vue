<template>
  <div class="homePage">

    <!-- <sticky :sticky-top="0">
     
    </sticky> -->
    <header-search />
    <div class=""></div>
    <div class="banner">
      <el-row class="banner_middle" :gutter="0">
        <el-col :span="4">
          <div class="banner_title">全部产品</div>
          <ul class="banner_middle_left">
            <li v-for="item in goodsNarList" :key="item.id" @mouseover="mouseEnter($event,item.type)" @mouseout="mouseLeave($event)">
              <router-link to="/list">{{item.content}}</router-link>
              <div class="banner_middle_leftList" v-show="item.show">
                <!-- <li v-for="(item,index) in goodsList" :key="index" v-show="item.show">
                12 {{index}}
                <router-link to="">2</router-link>
              </li> -->
                <div>{{item.content}}</div>

              </div>
            </li>

          </ul>
        </el-col>
        <el-col :span="20">
          <div class="banner_middle_middle">
            <el-carousel trigger="click" height="350px">
              <el-carousel-item v-for="item in 4" :key="item">
                <h3>{{ item }}</h3>
              </el-carousel-item>
            </el-carousel>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="page-main">
      <div class="container">
        <div class="contain-corporate">
          <el-row class="contain-hd corporate">
            <el-col class="contain-title">
              <h5>企业文化</h5>
            </el-col>
          </el-row>
          <el-row class="contain-bd corporate" :gutter="0" type="flex" justify="space-between">
            <el-col class="video">
              <div class="video-details">

              </div>
            </el-col>
            <el-col class="scrollbar">
              <div class="scrollbar-wrapper">
                <pre>
                  &nbsp;&nbsp;新兴铸管股份有限公司源于1971年成立的中国人民解放军第二六七二工程指挥部，1996年改制为国有独资有限公司，1997年在深交所上市。公司作为国资委监管央企新兴际华集团的核心企业，是全球最大的球墨铸铁管及管铸件研发制造商和国内最具竞争力的钢铁产品研发制造商。<br />

                  &nbsp;&nbsp;&nbsp;&nbsp;经过近五十年的发展成长，新兴铸管股份有限公司形成了战略布局优势、销售终端控制、生产成本优势、品牌价值优势、科技创新能力和企业文化优势六大核心竞争力，在全国各大区域和“一带一路”沿线国家建有众多生产基地，满足用户需求。销售网络覆盖亚洲、欧洲、非洲、美洲，产品出口世界120多个国家，铸管产品国内市场占有率和出口占有率具有绝对优势。<br />

                  &nbsp;&nbsp;&nbsp;&nbsp;新兴铸管股份有限公司有效专利数量1800余项，其中发明专利380余项，PCT 14项。离心球墨铸铁管关键技术及装备荣获中国专利金奖。公司是离心球墨铸铁管国家标准的主起草单位，主持参与29项标准制修订，其中，国家标准13项，行业标准6项，并作为唯一中国企业代表参与9项国际铸管标准制修订工作。<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;近年来，新兴品牌荣获多项国家级荣誉称号和水利、铸造行业特别奖项。公司主要经济技术指标稳居行业第一阵营，联合信用综合评定长期为AAA级别，蝉联冶金企业最高等级“竞争力极强A+”，蝉联“亚洲品牌500强”，将一个红海的球墨铸铁管产品打到了蓝海领域，形成全球铸管行业一家独大的市场竞争格局。<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;面向未来，新兴铸管股份有限公司将秉承“铸丹心铁骨，管通四海创造美好生活”的企业情怀，坚持“尚勤崇简、乐变求新、笃行务实、兴业报国”的经营理念，以国际化和科技创新为新动能，做强世界铸管行业领导者和冶金行业领先者;以智能化和绿色共享为新模式，打造前向铸造产业运营平台和后向涉水范围经济平台，跨入基础产业+AI平台经济新业态，打造基业长青的新兴铸管公司。<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;面向未来，新兴铸管股份有限公司将秉承“铸丹心铁骨，管通四海创造美好生活”的企业情怀，坚持“尚勤崇简、乐变求新、笃行务实、兴业报国”的经营理念，以国际化和科技创新为新动能，做强世界铸管行业领导者和冶金行业领先者;以智能化和绿色共享为新模式，打造前向铸造产业运营平台和后向涉水范围经济平台，跨入基础产业+AI平台经济新业态，打造基业长青的新兴铸管公司。<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;面向未来，新兴铸管股份有限公司将秉承“铸丹心铁骨，管通四海创造美好生活”的企业情怀，坚持“尚勤崇简、乐变求新、笃行务实、兴业报国”的经营理念，以国际化和科技创新为新动能，做强世界铸管行业领导者和冶金行业领先者;以智能化和绿色共享为新模式，打造前向铸造产业运营平台和后向涉水范围经济平台，跨入基础产业+AI平台经济新业态，打造基业长青的新兴铸管公司。<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;面向未来，新兴铸管股份有限公司将秉承“铸丹心铁骨，管通四海创造美好生活”的企业情怀，坚持“尚勤崇简、乐变求新、笃行务实、兴业报国”的经营理念，以国际化和科技创新为新动能，做强世界铸管行业领导者和冶金行业领先者;以智能化和绿色共享为新模式，打造前向铸造产业运营平台和后向涉水范围经济平台，跨入基础产业+AI平台经济新业态，打造基业长青的新兴铸管公司。<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;面向未来，新兴铸管股份有限公司将秉承“铸丹心铁骨，管通四海创造美好生活”的企业情怀，坚持“尚勤崇简、乐变求新、笃行务实、兴业报国”的经营理念，以国际化和科技创新为新动能，做强世界铸管行业领导者和冶金行业领先者;以智能化和绿色共享为新模式，打造前向铸造产业运营平台和后向涉水范围经济平台，跨入基础产业+AI平台经济新业态，打造基业长青的新兴铸管公司。<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;面向未来，新兴铸管股份有限公司将秉承“铸丹心铁骨，管通四海创造美好生活”的企业情怀，坚持“尚勤崇简、乐变求新、笃行务实、兴业报国”的经营理念，以国际化和科技创新为新动能，做强世界铸管行业领导者和冶金行业领先者;以智能化和绿色共享为新模式，打造前向铸造产业运营平台和后向涉水范围经济平台，跨入基础产业+AI平台经济新业态，打造基业长青的新兴铸管公司。<br />
                </pre>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="contain-purchase" v-if="provideRoleIn">
          <el-row class="contain-hd purchase" type="flex" align="middle" justify="space-between">
            <el-col class="contain-title">
              <h5>采购中心</h5>
            </el-col>
            <el-col class="contain-more">
              <div class="">
                <a>
                  <div>更多</div>
                  <div class="more-icon">
                    <i class="el-icon-arrow-right" />
                  </div>
                </a>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20" class="contain-bd purchase">
            <el-col :span="6" v-for="(item,index) in purchaseCenterList" :key="index">
              <el-card :body-style="{ padding: '0px' }">
                <div slot="header" class="clearfix">
                  <div>{{item.title}}</div>
                </div>
                <div class="card-list">
                  <span>采购产品数 :{{item.number}}种</span>
                </div>
                <div class="card-list">
                  <span>截止日期 : {{item.date}}</span>
                </div>
                <div class="card-list-bottom">
                  <div style="text-align:left">
                    <span>已有保家 : {{item.offerNum}}家</span>
                  </div>
                  <el-button type="primary">立即报价</el-button>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
        <div class="contain-newGoods">
          <el-row class="contain-hd newGoods" type="flex" align="middle" justify="space-between">
            <el-col class="contain-title">
              <h5>新品推荐</h5>
            </el-col>
            <el-col class="contain-more">
              <div class="">
                <a>
                  <div>更多</div>
                  <div class="more-icon">
                    <i class="el-icon-arrow-right" />
                  </div>
                </a>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20" class="contain-bd newGoods">
            <el-col :span="6" v-for="(item,index) in newGoodsList" :key="index">
              <el-card shadow="hover" :body-style="{ padding: '0px' }">
                <router-link to="123">
                  <div class="imgBox">
                    <el-image style="" :src="item.url">
                      <div slot="error" class="image-slot">
                        <img class="" src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
                      </div>
                    </el-image>
                  </div>
                  <div class="newGoods-Details">
                    <span>{{item.details}}</span>>
                  </div>
                </router-link>
                <div class="newGoods-footer">
                  <div>#{{item.good}}#</div>
                  <div style="margin-left:10px">
                    <svg-icon icon-class="eye-open" />{{item.heart}}</div>
                  <div>{{item.date}}</div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
        <div class="contain-discount">
          <el-row class="contain-hd discount" type="flex" align="middle" justify="space-between">
            <el-col class="contain-title">
              <h5>营销活动</h5>
            </el-col>
            <el-col class="contain-more">
              <div class="">
                <a>
                  <div>更多</div>
                  <div class="more-icon">
                    <i class="el-icon-arrow-right" />
                  </div>
                </a>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20" class="contain-bd discount">
            <el-col :span="8" v-for="(item,index) in discountList" :key="index">
              <el-card shadow="never" :body-style="{ padding: '0px' }">
                <router-link to="123">
                  <div class="imgBox">
                    <el-image style="" :src="item.url">
                      <div slot="error" class="image-slot">
                        <img class="" src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
                      </div>
                    </el-image>
                  </div>
                  <div class="discount-Details">
                    <span>{{item.title}}</span>
                  </div>
                </router-link>
              </el-card>
            </el-col>
          </el-row>
        </div>
        <div class="contain-industry">
          <el-row class="contain-hd industry" type="flex" align="middle" justify="space-between">
            <el-col class="contain-title chocces">
              <div v-for="(item,index) in industryTitle" :key="index">
                <h5 :class="{active:index===industryTitleIndex}" @click="selectTitle(index)">{{item.title}}</h5>
              </div>
            </el-col>
            <el-col class="contain-more">
              <div class="">
                <a>
                  <div>更多</div>
                  <div class="more-icon">
                    <i class="el-icon-arrow-right" />
                  </div>
                </a>
              </div>
            </el-col>
          </el-row>
          <div class="contain-bd industry">
            <list-card v-for="(item,index) in listCard" :key="index" :imgSrc="item.src" :type="item.type" :title="item.title" :date="item.date" :instury="item.instury||''" :contain="item.content"
              :startNumber="item.number" :downloadNumber="item.downloadNumber" :isIndustry="isIndustry">
            </list-card>
          </div>
        </div>
        <div class="contain-love">
          <el-row class="contain-hd newGoods" type="flex" align="middle" justify="space-between">
            <el-col class="contain-title">
              <h5>猜你喜欢</h5>
            </el-col>
          </el-row>
          <el-row :gutter="20" class="contain-bd newGoods">
            <el-col :span="6" v-for="(item,index) in loveList" :key="index">
              <el-card shadow="hover" :body-style="{ padding: '0px' }">
                <router-link to="123">
                  <div class="imgBox">
                    <el-image style="" :src="item.url" lazy>
                      <div slot="error" class="image-slot">
                        <img class="" src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
                      </div>
                    </el-image>
                  </div>
                  <div class="newGoods-Details">
                    <span>{{item.details}}</span>>
                  </div>
                </router-link>
                <div class="newGoods-footer">
                  <div>#{{item.good}}#</div>
                  <div style="margin-left:10px">
                    <svg-icon icon-class="eye-open" />{{item.heart}}</div>
                  <div>{{item.date}}</div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderSearch from "@/components/HeaderSearch";
import Sticky from '@/components/StickyS'
import ListCard from '@/components/ListCard'
export default {
  name: 'homePage',
  components: { HeaderSearch, Sticky, ListCard },
  data() {
    return {
      searchSelect: '',
      currentDate: new Date(),
      goodsNarList: [
        { id: 0, type: 0, content: '1', show: false },
        { id: 1, type: 1, content: '2', show: false },
        { id: 2, type: 2, content: '3', show: false },
        { id: 3, type: 3, content: '4', show: false },
        { id: 4, type: 4, content: '5', show: false },
        { id: 5, type: 5, content: '6', show: false },
        { id: 6, type: 6, content: '7', show: false },
      ],
      goodsList: [
        { show: false, content: '1' },
        { show: false, content: '2' },
        { show: false, content: '3' },
        { show: false, content: '4' },
        { show: false, content: '5' },
        { show: false, content: '6' },
        { show: false, content: '7' },
        { show: false, content: '8' },
        { show: false, content: '9' },
      ],
      purchaseCenterList: [
        { id: '1', title: '球墨铸铁管及管件采购', number: 5, date: '2020-08-23 09:30:00', offerNum: 3 },
        { id: '2', title: '球墨铸铁管及管件采购', number: 6, date: '2020-08-24 09:30:00', offerNum: 3 },
        { id: '3', title: '球墨铸铁管及管件采购', number: 7, date: '2020-08-25 09:30:00', offerNum: 3 },
        { id: '4', title: '球墨铸铁管及管件采购球墨铸铁管及管件采购球墨铸铁管及管件采购', number: 8, date: '2020-08-26 09:30:00', offerNum: 3 },
      ],
      newGoodsList: [
        {
          id: '1', url: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          details: '污水-GB/T 26081-2010-DN500-SIAwb-K9-5.9-铝酸盐水泥-灰色环氧', good: '污水管', heart: 33333, date: '2020-08-23'
        },
        {
          id: '2', url: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
          details: '污水-GB/T 26081-2010-DN500-SIAwb-K9-5.9-铝酸盐水泥-灰色环氧', good: '污水管', heart: 33333, date: '2020-08-24'
        },
        {
          id: '3', url: 'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
          details: '污水-GB/T 26081-2010-DN500-SIAwb-K9-5.9-铝酸盐水泥-灰色环氧', good: '污水管', heart: 33333, date: '2020-08-25'
        },
        {
          id: '4', url: 'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
          details: '污水-GB/T 26081-2010-DN500-SIAwb-K9-5.9-铝酸盐水泥-灰色环氧', good: '污水管', heart: 33333, date: '2020-08-26'
        },
      ],
      discountList: [
        {
          id: '1', url: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          title: '双十一购物优惠活动'
        },
        {
          id: '2', url: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
          title: '双十一购物优惠活动'
        },
        {
          id: '3', url: 'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
          title: '双十一购物优惠活动'
        },
      ],
      industryTitle: [
        { title: '行业动态', isActive: false },
        { title: '政策法规', isActive: false },
        { title: '行业知识', isActive: false },
      ],
      industryTitleIndex: 0,
      listTrens: [
        {
          id: '1', src: '', type: '行业动态', title: '这是标题', instury: '摘自 : ',
          content: '这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容',
          date: '2019-23-21 12:00', number: 123
        },
        { id: '2', src: '', type: '行业动态', title: '这是标题', content: '这是内容', date: '2019-23-21 12:00', number: 123 },
        { id: '3', src: '', type: '行业动态', title: '这是标题', content: '这是内容', date: '2019-23-21 12:00', number: 123 },
      ],
      listLaws: [
        {
          id: '1', src: '', type: '政策法规', title: '这是标题', instury: '来自机构: ',
          content: '这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容',
          date: '2019-23-21 12:00', number: 123, downloadNumber: 1223
        },
        { id: '2', src: '', type: '政策法规', title: '这是标题', content: '这是内容', date: '2019-23-21 12:00', number: 123 },
        { id: '3', src: '', type: '政策法规', title: '这是标题', content: '这是内容', date: '2019-23-21 12:00', number: 123 },
      ],
      listKnowledge: [
        {
          id: '1', src: '', type: '行业知识', title: '这是标题',
          content: '这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容',
          date: '2019-23-21 12:00'
        },
        { id: '2', src: '', type: '行业知识', title: '这是标题', content: '这是内容' },
        { id: '3', src: '', type: '行业知识', title: '这是标题', content: '这是内容' },
      ],
      listCard: [
        {
          id: '1', src: '', type: '行业动态', title: '这是标题', instury: '摘自 : ',
          content: '这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容',
          date: '2019-23-21 12:00', number: 123
        },
        { id: '2', src: '', type: '行业动态', title: '这是标题', content: '这是内容', date: '2019-23-21 12:00', number: 123 },
        { id: '3', src: '', type: '行业动态', title: '这是标题', content: '这是内容', date: '2019-23-21 12:00', number: 123 },
      ],
      isIndustry: false,
      loveList: [
        {
          id: '1', url: 'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
          details: '污水-GB/T 26081-2010-DN500-SIAwb-K9-5.9-铝酸盐水泥-灰色环氧', good: '污水管', heart: 33333, date: '2020-08-23'
        },
        {
          id: '2', url: 'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
          details: '污水-GB/T 26081-2010-DN500-SIAwb-K9-5.9-铝酸盐水泥-灰色环氧', good: '污水管', heart: 33333, date: '2020-08-24'
        },
        {
          id: '3', url: 'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
          details: '污水-GB/T 26081-2010-DN500-SIAwb-K9-5.9-铝酸盐水泥-灰色环氧', good: '污水管', heart: 33333, date: '2020-08-25'
        },
        {
          id: '4', url: 'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
          details: '污水-GB/T 26081-2010-DN500-SIAwb-K9-5.9-铝酸盐水泥-灰色环氧', good: '污水管', heart: 33333, date: '2020-08-26'
        },
      ],
    }
  },
  computed: {
    provideRoleIn() {
      return this.$store.state.user.roles.indexOf('provide') != -1
    }
  },
  methods: {
    mouseEnter(e, type) {
      console.log('over', e, type)
      let liEvent = e.target
      if (liEvent) {
        let liIndex = Number(liEvent.type)
        this.goodsNarList.forEach((item, index) => {
          if (type === index) {
            item.show = true
          } else {
            item.show = false
          }
        })
      }

    },
    mouseLeave(e) {
      console.log('leave')
      let liEvent = e.target
      if (liEvent) {
        let liIndex = Number(liEvent.type)
        this.goodsNarList.forEach((item, index) => {
          item.show = false
        })
      }
    },
    // 行业点击
    selectTitle(index) {
      this.industryTitleIndex = index
      if (index === 0) {
        this.listCard = [...this.listTrens]
        this.isIndustry = false

      } else if (index === 1) {
        this.listCard = [...this.listLaws]
        this.isIndustry = false
      } else {
        this.listCard = [...this.listKnowledge]
        this.isIndustry = true
      }
    }
  },
}
</script>

<style lang="scss" scope>
li {
  list-style: none;
}
.homePage {
  width: 100%;
  .banner {
    width: 100%;
    margin-top: 5px;
    .banner_middle {
      // margin-top: 5px;
      width: 1200px;
      min-width: 1100px;
      margin: auto;
      height: 350px;
      .banner_title {
        background-color: #e62b1e;
        height: 35px;
        width: 100%;
        color: #fff;
        line-height: 35px;
        font-weight: bold;
        text-align: center;
      }
      .banner_middle_left {
        border: 1px solid #e62b1e;
        border-top: none;
        height: 315px;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        background-color: #fff;
        position: relative;
        & > li {
          height: 43px;
          border-bottom: 1px solid #f2f6fc;
          padding: 0 5px;
          line-height: 30px;
          box-sizing: border-box;
          -webkit-box-sizing: border-box;
          & > a {
            display: block;
            height: 43px;
          }
          &:hover {
            background-color: #0079fe;
            color: #fff;
          }
          &:last-child {
            border-bottom: none;
          }
        }
        .banner_middle_leftList {
          position: absolute;
          left: 199px;
          top: -1px;
          z-index: 20;
          transition: display 2s;
          -webkit-transition: display 2s; /* Safari */
          div {
            width: auto;
            min-width: 200px;
            height: auto;
            color: #333;
            min-height: 350px;
            background-color: #fff;
            box-shadow: 0 2px 5px #a1a1a1;
          }
        }
      }
      .el-carousel__item {
        background-color: #99a9bf;
      }
    }
  }
  .page-main {
    width: 100%;
    .container {
      width: 1200px;
      min-width: 1100px;
      margin: auto;
      .contain-title {
        h5 {
          line-height: 30px;
          text-align: center;
          width: 90px;
          height: 30px;
          font-size: 16px;
          border: 1px solid #0079fe;
          border-radius: 5px;
          box-sizing: border-box;
          color: #0079fe;
          margin: 30px 0 15px;
        }
      }
      .contain-more {
        margin-top: 30px;
        line-height: 30px;
        text-align: right;
        width: 60px;
        a > div {
          float: left;
          &.more-icon {
            width: 20px;
            height: 20px;
            line-height: 20px;
            background-color: #b0b0b0;
            border-radius: 50%;
            margin-top: 5px;
            color: #fff;
            margin-left: 5px;
          }
        }
        a:hover {
          color: #0079fe;

          & > .more-icon {
            background-color: #0079fe;
          }
        }
      }
      .contain-bd .is-hover-shadow:hover {
        transform: translateY(-2px);
        -ms-transform: translateY(-2px); /* IE 9 */
        -moz-transform: translateY(-2px); /* Firefox */
        -webkit-transform: translateY(-2px); /* Safari 和 Chrome */
        -o-transform: translateY(-2px);
      }
      .contain-bd.corporate {
        height: 400px;
        .scrollbar {
          height: 100%;
          width: calc((100% - 10px) / 2);
          overflow: hidden;
          background-color: #fff;
          .scrollbar-wrapper {
            overflow-y: auto;
            overflow-x: hidden;
            height: 100%;
            pre {
              white-space: pre-wrap;
              line-height: 1.5;
              font-size: 14px;
              padding: 10px;
              margin: 0;
              font-family: "PingFangSC-Regular", "PingFang SC";
              font-weight: 400;
              letter-spacing: none;
              font-style: normal;
              color: #000;
            }
          }
        }
        .video {
          height: 100%;
          background-color: #fff;
          padding: 10px;
          width: calc((100% - 10px) / 2);
        }
      }
      .contain-bd.purchase {
        height: 290px;
        .el-card {
          height: 100%s;
          .clearfix div {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .card-list {
            padding: 13px 20px;
            border-bottom: 1px solid #e6ebf5;
            font-size: 14px;
            color: #999;
          }
          .card-list-bottom {
            padding: 10px 20px;
            line-height: 25px;
            font-size: 14px;
            color: #999;
            text-align: center;
            .el-button {
              margin: 35px 0 20px;
            }
          }
        }
      }
      .contain-bd.newGoods {
        height: 300px;
        .el-card {
          height: 100%;
          .imgBox {
            width: 160px;
            height: 160px;
            margin: 0 auto;
            img {
              width: 100%;
              height: 100%;
              display: block;
            }
          }
          .newGoods-Details {
            padding: 20px;
            height: 72px;
            width: 100%;
            border-bottom: 1px solid #e6ebf5;
            font-size: 14px;
            color: #666;
            line-height: 1.2;
            box-sizing: border-box;
          }
          .newGoods-footer {
            width: 100%;
            padding: 20px;
            height: 60px;
            line-height: 1.2;
            box-sizing: border-box;
            & > div {
              float: left;
              color: #999;
              font-size: 14px;
              &:last-child {
                float: right;
              }
            }
          }
        }
      }
      .contain-bd.discount {
        height: 218px;
        .el-card {
          height: 100%;
          position: relative;
          .imgBox {
            width: 216px;
            height: 216px;
            margin: 0 auto;
            img {
              width: 100%;
              height: 100%;
              display: block;
            }
          }
          .discount-Details {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 60px;
            color: #fff;
            line-height: 60px;
            background-color: rgba(0, 0, 0, 0.5);
            text-align: center;
            transition: 0.3s;
            -webkit-transition: 0.3s;
            span {
              padding: 2px 10px;
              background-color: #e62b1e;
              border-radius: 5px;
              font-size: 18px;
            }
          }
          // &:hover .discount-Details {
          //   //height: 60px;
          // }
        }
      }
      .contain-title.chocces {
        & > div {
          float: left;
          margin-left: 10px;
          h5 {
            line-height: 30px;
            text-align: center;
            width: 90px;
            height: 30px;
            font-size: 16px;
            margin: 30px 0 15px;
            color: #666;
            border: 1px solid transparent;
            box-sizing: border-box;
            cursor: pointer;
            &:hover {
              border: 1px solid #0079fe;
              border-radius: 5px;
              box-sizing: border-box;
              color: #0079fe;
            }
          }
          h5.active {
            border: 1px solid #0079fe;
            border-radius: 5px;
            box-sizing: border-box;
            color: #0079fe;
          }
        }
      }
    }
  }
}
</style>
<style lang="scss">
.banner_middle {
  .el-carousel__indicator--horizontal .el-carousel__button {
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }
}
</style>