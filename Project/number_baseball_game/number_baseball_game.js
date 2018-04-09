    //정답을 생성하는 함수를 만든다.

    function getrandomanswer(min, max) {
      return Math.floor(Math.random() * (max - min) + min);

  }

  function makingAnswer() {
      var answer = [];
      while (answer.length < 3) {
          var newNumber = getrandomanswer(1, 10)
          if (answer.includes(newNumber)) {
              continue;
          }
          answer.push(newNumber);
      }
      return answer
  }

  //정답 변수 생성 
  var answer = makingAnswer();

  //스트라이크와 볼의 개수를 세는 함수 
  function screen() {

      function count() {
          var strike = 0;
          var ball = 0;
          for (i = 0; i < 3; i++) {
              if (number[i] == answer[i]) {
                  strike++;
              } else if (answer.includes(number[i])) {
                  ball++;
              }
          }
          return {
              'strike': strike,
              'ball': ball
          };
      }

      var usernumber = document.getElementById("usernumber").value;
      var number = usernumber.split("")
      var number = [Number(number[0]), Number(number[1]), Number(number[2])]
      var strikeandball = count()
      var strike = strikeandball['strike'];
      var ball = strikeandball['ball'];

      if (strike == 3) {
          var div = document.createElement("div")
          var result = document.createTextNode('congratulation!');
          div.appendChild(result);

          var element = document.getElementById("result")
          element.appendChild(div);


      } else {

          var div = document.createElement("div")
          var result = document.createTextNode(usernumber + "\u00A0" + strike + "S"+"\u00A0" + ball + "B");
          div.appendChild(result);

          var element = document.getElementById("result")
          element.appendChild(div);
      }

  }