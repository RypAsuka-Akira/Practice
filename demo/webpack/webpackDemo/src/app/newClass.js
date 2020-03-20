module.exports = function (data) {
    class newPage {
        constructor(data, option) {
            this.data = data
            this.option = option
            this.init()
        }
        todayNew() {
            $('#container').append(`<div class='main'></div>`)

            for (let i = 0; i < this.data.mainResources.length; i++) {
                if (this.data.mainResources[i].type === 'img') {
                    $('.main').append(
                        `<img src= ${this.data.mainResources[i].value} style='width:100%'>`
                    )
                } else {
                    $('.main').append(
                        `<div class="mainText">${this.data.mainResources[i].value}</div>`
                    )
                    $('.mainText').css(this.data.mainResources[i].style)
                }
            }
        }
        preNew() {
            $('#container').append(`<div class='beforePre'></div>`)

            $('#container').append(
                `<div class='pre'>
              <div class='preTitle' style='border-left: 3px solid red'>&nbsp;&nbsp往期精彩</div>
              <div class="preItems"></div>
            </div>`
            )

            for (let i = 0; i < this.data.preNews.length; i++) {
                $('.preItems').append(
                    `<div class = 'preItem'>
                <div class = 'preItemLeft'>
                  <div class = 'preItemTitle'>${this.data.preNews[i].title}</div>
                  <div class = 'preItemTag'>原创图文</div>
                </div>
                <div class = 'preItemRight' style='background-image:url(${this.data.preNews[i].imageUrl})'></div>
              </div>`
                )
            }
        }
        init() {
            this.todayNew()
            this.preNew()
        }
    }
    return new newPage(data)
}