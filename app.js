let Home = 0
let Away = 0

function HomeIncrease1() {
  Home++
  console.log(Home)
  drawHome()
}

function AwayIncrease1() {
  Away++
  console.log(Away)
  drawAway()
}

function HomeIncrease3() {
  Home += 3
  console.log(Home)
  drawHome()
}

function AwayIncrease3() {
  Away += 3
  console.log(Away)
  drawAway()
}

function Reset() {
  Away = 0
  Home = 0
  drawAway()
  drawHome()
}

function drawHome() {

  // @ts-ignore
  document.getElementById('Home').innerHTML = `
  <h1 class="text-center"> ${Home.toFixed(0)} </h1>
  `
}

function drawAway() {

  // @ts-ignore
  document.getElementById('Away').innerHTML = `
  <h1 class="text-center"> ${Away.toFixed(0)} </h1>
  `
}

drawHome()
drawAway()

document.getElementById('Away')

