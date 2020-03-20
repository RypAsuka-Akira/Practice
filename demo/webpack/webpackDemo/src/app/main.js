const page = require('./newClass')
import css from '../css/style.css'

let data = {
    mainResources: [{
            type: 'img',
            value: 'https://s.thsi.cn/js/datavproject/dataNews/29_jiangxi/1.jpg'
        },
        {
            type: 'text',
            value: '啦啦啦啦啦啦啦啦啦',
            style: {
                'font-size': '14px',
                color: 'red',
                'font-weight': 'bolder',
                'text-align': 'center'
            }
        },
        {
            type: 'img',
            value: 'https://s.thsi.cn/js/datavproject/dataNews/29_jiangxi/1.jpg'
        }
    ],

    preNews: [{
            index: 1,
            title: '守好疫情防控的最后防线：大量的医疗废物要如何妥善处理？',
            imageUrl: 'https://s.thsi.cn/js/datavproject/dataNews/common/review/entrances/886.png'
        },
        {
            index: 2,
            title: '【图说】全国复工潮催生新需求，疫情对消毒液行业影响几乎',
            imageUrl: 'https://s.thsi.cn/js/datavproject/dataNews/common/review/entrances/885.png'
        },
        {
            index: 3,
            title: '【图说】新冠病毒“救命机”一机难求，呼吸机供应到底卡在哪？',
            imageUrl: 'https://s.thsi.cn/js/datavproject/dataNews/common/review/entrances/881.png'
        }
    ]
}
let option = {}
page(data, option)