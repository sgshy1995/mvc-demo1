import './app2.css'
import $ from 'jquery'

const $tabNav = $('.tabNav')
const $tabContent = $('.tabContent')

$tabNav.on('click', 'li', (e) => {
    const $li = $(e.currentTarget)
    const index = $li.index()
    $li.addClass('selected').siblings().removeClass('selected')
    $tabContent.children().eq(index).addClass('active').siblings().removeClass('active')
})

$tabNav.children().eq(0).trigger('click')