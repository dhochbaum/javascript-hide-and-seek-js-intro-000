function getFirstSelector(selector) {
 return document.querySelector(selector);
}

function nestedTarget() {
  var nestedElements = document.getElementById('nested')
  var j = nestedElements.getElementsByClassName('target')
  return j[0]
}

function increaseRankBy(n) {
  var rankedlist = document.getElementsByClassName('ranked-list')
  var lineitems = []
  for (let i = 0; i < rankedlist.length; i++) {
    lineitems[i] = rankedlist[i].getElementsByTagName('li')

    for (let j = 0; j < lineitems[i].length; j++) {
      var lineitem = lineitems[i][j]

      console.log(lineitem.textContent)

      lineitem.textContent = parseInt(lineitem.textContent) + n
      console.log(lineitem.textContent)
    }
    //var testA = rankedlist[i].getElementsByTagName('li')

    //console.log(testA[0].textContent)
  }

  console.log(rankedlist.length)
  console.log(rankedlist.length)
  console.log(rankedlist.length)
  console.log(rankedlist.length)
  console.log(rankedlist.length)
  //console.log(lineitems[0])

/*  var lineitems = rankedlist.getElementsByTagName('li')
  console.log(lineitems)
  var lineitem = lineitems[0]
  //console.log(lineitems[0])
  console.log(lineitem.textContent)
  lineitem.textContent = "asdjksadasdsdshkladsa"
  console.log(lineitem.textContent)
*/
  return lineitems
}

function deepestChild() {
  var top = document.getElementById('grand-node')
  return top
}

/*

  for (let i = 0; i < document.getElementById('nested').length; i++) {
    console.log(nestedElements[i])
    console.log('log test')
  }
  */
