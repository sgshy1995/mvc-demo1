import './app2.css'
import $ from 'jquery'

const html = `
    <section class="app2">
        <ol class="tabNav">
            <li>选 项 1</li>
            <li>选 项 2</li>
        </ol>
        <ol class="tabContent">
            <li>内容一比较多</li>
            <li>内容二相对来说更多了</li>
        </ol>
    </section>
`

$(html).appendTo($('.page'))
const $tabNav = $('.tabNav')
const $tabContent = $('.tabContent')
const nthChild = localStorage.getItem('nthOne') || 0

$tabNav.on('click', 'li', (e) => {
    const $li = $(e.currentTarget)
    const index = $li.index()
    localStorage.setItem('nthOne', index)
    $li.addClass('selected').siblings().removeClass('selected')
    $tabContent.children().eq(index).addClass('active').siblings().removeClass('active')
})

$tabNav.children().eq(nthChild).trigger('click')
