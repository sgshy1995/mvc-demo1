import './app1.css'
import $ from 'jquery'

const html = `
<section class="app1">
<div id="app1-output">
    <span id="number">100</span>
</div>
<div id="app1-actions">
    <button id="add">+</button>
    <button id="reduce">-</button>
    <button id="multiply">*</button>
    <button id="divide">÷</button>
</div>
</section>
`

$(html).appendTo($('.page'))
const $add = $('#add')
const $reduce = $('#reduce')
const $multiply = $('#multiply')
const $divide = $('#divide')
const $number = $('#number')
const numberInSpan = localStorage.getItem('number')

$number.text(numberInSpan || 100)

$add.on('click', () => {
    let number = parseInt($number.text())
    number += 1
    localStorage.setItem('number',number)
    $number.text(number)
})
$reduce.on('click', () => {
    let number = parseInt($number.text())
    number -= 1
    localStorage.setItem('number',number)
    $number.text(number)
})
$multiply.on('click', () => {
    let number = parseInt($number.text())
    number *= 2
    localStorage.setItem('number',number)
    $number.text(number)
})
$divide.on('click', () => {
    let number = parseInt($number.text())
    number /= 2
    localStorage.setItem('number',number)
    $number.text(number)
})