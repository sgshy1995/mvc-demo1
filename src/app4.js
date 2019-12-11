import './app4.css'
import $ from 'jquery'

const $circle = $('#circle')

$circle.on('mousemove', () => {
    $circle.addClass('active')
}).on('mouseleave', () => {
    $circle.removeClass('active')
})