import './app1.css'
import $ from 'jquery'

const $add = $('#add')
const $reduce = $('#reduce')
const $multiply = $('#multiply')
const $divide = $('#divide')
const $number = $('#number')
const number = localStorage.getItem('number')

$number.text(number || 100)

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