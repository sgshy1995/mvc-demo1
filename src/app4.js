import './app4.css'
import $ from 'jquery'

const html = `
<section class="app4">
<div class="circle" id="circle">选我</div>
</section>
`

$(html).appendTo($('.page'))
const $circle = $('#circle')

$circle.on('mousemove', () => {
    $circle.addClass('active')
}).on('mouseleave', () => {
    $circle.removeClass('active')
})