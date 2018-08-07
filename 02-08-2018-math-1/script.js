// multiplication quiz
(function () {

  var App = {
    init: function () {
      let questions = this.generateAllMultiplicationTable()
      this.state.questions = questions;
      let randomNumber = this.getRandomArbitrary(0, questions.length);
      let currentQuestion = this.state.questions[randomNumber];
      this.state.currentQuestion = currentQuestion;

      this.domCached();
      this.bindEvents();

      this.render();
    },
    domCached: function () {
      this.show_button = document.querySelector('#show_button')
      this.next_button = document.querySelector('#next_button')
      this.question_block = document.querySelector('#question_block')
      this.answer_block = document.querySelector('#answer_block')
    },
    bindEvents: function () {
      this.show_button.addEventListener('click', this.show_button_click.bind(this));
      this.next_button.addEventListener('click', this.next_button_click.bind(this));
    },
    show_button_click: function () {
      this.setState({isResultShowing: !this.state.isResultShowing})
    },
    next_button_click: function () {
      let randomNumber = this.getRandomArbitrary(0, this.state.questions.length);
      let currentQuestion = this.state.questions[randomNumber];
      this.setState({currentQuestion, isResultShowing: false})
    },
    state: {
      questions: [],
      isResultShowing: false,
      currentQuestion: {},
    },
    getRandomArbitrary: function (min, max) {
      return Math.floor( Math.random() * (max - min) + min);
    },
    render: function () {
      let {currentQuestion, isResultShowing} = this.state;
      this.question_block.innerHTML = currentQuestion.question
      if (isResultShowing) {
        this.answer_block.innerHTML = ` = ${currentQuestion.answer}`
      } else {
        this.answer_block.innerHTML = `?`
      }
    },
    setState: function (state) {
      this.state = {...this.state, ...state}
      this.render()
    },
    generateSingleMultiplicationTable: function (number) {
      let arr = [];
      for(let i = 1; i <= 10; i++) {
        let obj = {
          question: `${number}X${i}`,
          answer: number * i
        }
        arr.push(obj);
      }
      return arr;

    },
    generateAllMultiplicationTable: function () {
      let arr = [];
      for(let i = 11; i <= 30; i++) {
        newarr = this.generateSingleMultiplicationTable(i);
        newarr.forEach(obj => arr.push(obj))
      }
      return arr;
    }
  }
  App.init();

}());

// for generating class
(function () {
  App = {
    init: function () {
      this.domCached();
      this.get_the_square_of_1_50();
      this.get_the_square_root();
      this.get_pow_all();
      this.all_multiplication_table();
      this.number_frequency();
      this.getting_prime();
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
      let str = document.createTextNode('# Square of 1 to 50');
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
    },
    get_frequency: function (string, char) {
      let re = new RegExp(char, 'gi');
      let length = string.match(re).length
      return length;
    },
    number_frequency: function () {
      let string_number = '';
      for (let i = 0; i < 101; i++) {
        string_number += `${i}`
      }
      let ul = document.createElement('ul')
      for (let i = 0; i < 10; i++) {
        let str = `${i} - ${this.get_frequency(string_number, i)}`
        let li = document.createElement('li')
        let listr = document.createTextNode(str);
        li.appendChild(listr);
        ul.appendChild(li)
      }
      this.mountingContent('# Frequency of number till 100', ul);
    },
    is_prime: function (n) {
      if (isNaN(n) || !isFinite(n) || n%1 || n<2) return false; 
       if (n%2==0) return (n==2);
       var m=Math.sqrt(n);
       for (var i=3;i<=m;i+=2) {
        if (n%i==0) return false;
       }
       return true;
    },
    getting_prime: function () {
      let str = "";
      let numbers = [];
      for(i = 1; i < 101; i++) {
        if (this.is_prime(i)) {
          str += `${i}, `
          numbers.push(i)
        }
      }

      str = str.trim();
      var trim = str.replace(/(^,)|(,$)/g, "")
      let p = document.createElement('p');
      var pStr = document.createTextNode(trim);
      var pStr2 = document.createTextNode(`-- Total:  ${numbers.length}`)
      p.appendChild(pStr);
      p.appendChild(pStr2);
      this.mountingContent('Prime number till 100', p);
    }

  }
  App.init();
}())

// modular Approach 

