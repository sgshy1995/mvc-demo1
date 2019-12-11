import './app3.css'
import $ from 'jquery'

const html = `
<section class="app3">
    <div class="square" id="square">点我</div>
</section>
`
$(html).appendTo($('.page'))
const $square = $('#square')
let value = localStorage.getItem('method') === 'yes'
$square.toggleClass('active',value)

$square.on('click', () => {
    if ($square.hasClass('active')) {
        localStorage.setItem('method', 'no')
        $square.removeClass('active')
    } else {
        localStorage.setItem('method', 'yes')
        $square.addClass('active')
    }
})