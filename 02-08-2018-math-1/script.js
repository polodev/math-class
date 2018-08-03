// function _square50 () {
//   let digitSquare = [];
//   for(let i = 1; i < 51; i++) {
//     digitSquare.push([`${i}^2`, i*i]);
//   }
//   console.log(digitSquare)
// }

function _getPow (number, max) {
  let n = [];
  for(let i = 1; i < (max + 1); i++) {
    let nt = `${number}^${i} -  ${Math.pow(number, i)}`
    n.push(nt);
  }
  console.log(n)
}

function _getTheSquareRoot () {
  // √
  let n = [];
  for(let i = 2; i < 11; i++) {
    let nr = `√${i} = ${Math.sqrt(i)}`
    n.push(nr);
  }
  console.log(n)
}

function _getPowAll() {
  _getPow(2, 10)
  _getPow(3, 10)
  _getPow(4, 4)
  _getPow(5, 4)
  _getPow(6, 4)
  _getPow(7, 4)
  _getPow(8, 4)
  _getPow(9, 4)
  _getPow(10, 4)
}
function _multiplicationTable12To30 () {
  let allTable = [];
  for(let i = 12; i < 31; i++) {
    let singleTable = [];
    for(let j = 1; j < 11; j++) {
      let st = `${i}X${j} = ${i * j}`
      singleTable.push(st)
    }
    allTable.push(singleTable);
  }
  console.log(allTable);
} 

//output results
//_square50();
// _getPowAll()
// _getTheSquareRoot();
_multiplicationTable12To30();

(function () {
  App = {
    init: function () {
      this.domCached();
      this.get_the_square_of_1_50();
      this.get_the_square_root();
      this.get_pow_all();
      this.all_multiplication_table();
    },
    domCached: function () {
      this.math_out = document.querySelector('#math_out')
    },
    making_div_title: function (content, nestedTitle) {
      let h = nestedTitle ? document.createElement('h4') : document.createElement('h1') ;
      let div = document.createElement('div')
      let str = document.createTextNode(content)
      h.appendChild(str)
      div.appendChild(h)
      return div;
    },
    get_the_square_of_1_50 () {
      let h1 = document.createElement('h1')
      let str = document.createTextNode('# Squre of 1 to 50');
      h1.appendChild(str);
      let ul = document.createElement('ul')
      for(let i = 1; i < 51; i++) {
        let li = document.createElement('li')
        let str =document.createTextNode(`${i}^2 =  ${i*i}`)
        li.appendChild(str)
        ul.appendChild(li);
      }
      this.mountingContent('# Squre of 1 to 50', ul)
    },
    mountingContent: function (content, ul) {
      let div = this.making_div_title(content)
      div.appendChild(ul);
      this.math_out.appendChild(div);
    },
    get_the_square_root: function  () {
      // √
      let ul = document.createElement('ul');
      for(let i = 2; i < 11; i++) {
        let li = document.createElement('li');
        let str = document.createTextNode(`√${i} = ${Math.sqrt(i)}`)
        li.appendChild(str);
        ul.appendChild(li)
      }
      this.mountingContent('# Square root of 2 to 10', ul)
    },
    get_pow: function (number, max, title) {
      let ul = document.createElement('ul')
      for(let i = 1; i < (max + 1); i++) {
        let str = document.createTextNode( `${number}^${i} -  ${Math.pow(number, i)}`)
        let li = document.createElement('li')
        li.appendChild(str);
        ul.appendChild(li)
      }
      let div = this.making_div_title(title, true);
      div.appendChild(ul)
      return div;
    },
    get_pow_all: function () {
      let div = document.createElement('div')
      div.appendChild(this.get_pow(2, 10, '## 2 ^ (2-10)'))
      div.appendChild(this.get_pow(3, 10, '## 3 ^ (3-10)'))
      div.appendChild(this.get_pow(4, 4, '## 4 ^ (2-4)'))
      div.appendChild(this.get_pow(5, 4, '## 5 ^ (2-4)'))
      div.appendChild(this.get_pow(6, 4, '## 6 ^ (2-4)'))
      div.appendChild(this.get_pow(7, 4, '## 7 ^ (2-4)'))
      div.appendChild(this.get_pow(8, 4, '## 8 ^ (2-4)'))
      div.appendChild(this.get_pow(9, 4, '## 9 ^ (2-4)'))
      div.appendChild(this.get_pow(10, 4, '## 10 ^ (2-4)'))
      this.mountingContent('# All essential Power', div)
    },
    single_multipliation_table(number) {
      let div = this.making_div_title(`## Multiplication table of ${number}`, true)
      div.classList = 'nested_div'
      let ul = document.createElement('ul')
      for(let i = 1; i < 11; i++) {
          let val = `${number}X${i} = ${number * i}`
          let str = document.createTextNode(val);
          let li = document.createElement('li');
          li.appendChild(str);
          ul.appendChild(li)
      }
      div.appendChild(ul)
      return div;
    },
    all_multiplication_table: function () {
      let div = document.createElement('div')
      for (let i = 12; i < 31; i++) {
        div.appendChild(this.single_multipliation_table(i))
      }
      this.mountingContent(`# All multiplication table`, div);
    }

  }
  App.init();
})()

// modular Approach 
$(function () {})

