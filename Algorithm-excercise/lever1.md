프로그래머스 레벨1 알고리즘 정리하기

# 완주하지 못한 선수

수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

## 문제 풀이

```js
function solution(participant, completion) {
  let answer
  participant.map(name => {
    if (completion.indexOf(name) === -1) {
      answer = name
      return
    }
  })
  return answer
}
```

       //  switch(answers[i]) {
       //      case a[i % a.length]:
       //          score[0].score++
       //      case b[i % b.length]:
       //          score[1].score++
       //      case c[i % c.length]:
       //          score[2].score++
       // }

# 수포자

[link](https://programmers.co.kr/learn/courses/30/lessons/42840?language=javascript)

수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

제한 조건
시험은 최대 10,000 문제로 구성되어있습니다.
문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.

## 문제 풀이

```js
function solution(answers) {
  const a = [1, 2, 3, 4, 5]
  const b = [2, 1, 2, 3, 2, 4, 2, 5]
  const c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
  const score = [
    { index: 1, score: 0 },
    { index: 2, score: 0 },
    { index: 3, score: 0 }
  ]
  for (let i = 0; i < answers.length; i++) {
    answers[i] === a[i % a.length] && ++score[0].score
    answers[i] === b[i % b.length] && ++score[1].score
    answers[i] === c[i % c.length] && ++score[2].score
  }
  let sortedScore = score.sort((a, b) => {
    if (a.score === b.score) {
      return a.index - b.index
    } else {
      return a.score - b.score
    }
  })
  const answer = sortedScore.reduce((acc, student) => {
    if (sortedScore[2].score === student.score) {
      acc && acc.push(student.index)
      return acc ? acc : [student.index]
    }
  }, [])
  return answer
}
```

```js
function solution(answers) {
  const a = [1, 2, 3, 4, 5]
  const b = [2, 1, 2, 3, 2, 4, 2, 5]
  const c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
  const score = [0, 0, 0]
  for (let i = 0; i < answers.length; i++) {
    answers[i] === a[i % a.length] && ++score[0]
    answers[i] === b[i % b.length] && ++score[1]
    answers[i] === c[i % c.length] && ++score[2]
  }
  const max = Math.max(...score)
  const answer = []
  score.map(score, index) => score === max ? answer.push(index + 1))
}
```

처음부터 사람을 1, 2, 3 으로 배열에 넣었기 때문에 솔팅을 할 필요가 없었다.
이미 솔팅되어 있으니 첫 번쨰 학생부터 확인하면서 max 스코어와 같으면 배열에 푸시하면 되는것이였음.

```js
function solution(lands, wells, point) {
function toRect(point) {
return {
leftBottomX: point[0],
leftBottomY: point[1],
topRightX: point[2],
topRightY: point[3]
}
}

function isIntersect(a, b) {
const r1 = toRect(a);
const r2 = toRect(b);

return !(
r1.leftBottomX &gt;= r2.topRightX ||
r2.leftBottomY &gt;= r1.topRightY ||
r2.leftBottomX &gt;= r1.topRightX ||
r1.leftBottomY &gt;= r2.topRightY
)
}

function isContains(rectangleArray, rectangle) {
for (let i = 0; i &lt; rectangleArray.length; i++) {
const intersect = isIntersect(rectangleArray[i], rectangle);
if (intersect) {
return true;
}
}
}

const isLandContains = isContains(lands, point);
const isWellContains = isContains(wells, point);

return !isLandContains & isWellContains;
}
```

```js
function solution(pobi, crong) {
  function isInvalid(page) {
    if (page[0] % 2 != 1) {
      return true
    }

    if (page[0] + 1 != page[1]) {
      return true
    }

    return false
  }

  function score(num) {
    const nums = num
      .toString()
      .split('')
      .map(Number)
    const plus = nums.reduce((x1, x2) => x1 + x2)
    const multiply = nums.reduce((x1, x2) => x1 * x2)
    return Math.max(plus, multiply)
  }

  if (isInvalid(pobi) || isInvalid(crong)) {
    return -1
  }

  const pobiScore = Math.max(...pobi.map(score))
  const crongScore = Math.max(...crong.map(score))

  if (pobiScore > crongScore) {
    return 1
  } else if (crongScore > pobiScore) {
    return 2
  } else {
    return 0
  }
}
```
