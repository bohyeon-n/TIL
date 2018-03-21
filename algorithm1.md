## Find maximum in array algorithm 
-------------------------------------------


1.배열중 첫번 째 값을 masimumValue 변수로 설정한다.
2.maximumVlue가 배열의 두 번째 값보다 작다면 배열의 두 번째 값을 maximumvalue로 설정한다. 
3.maximumVlue가 배열의 세 번째 값보다 작다면 배열의 세 번째 값을 maximumValue로 설정한다.
4.이를 배열의 길이( arr.length) 만큼 반복한다. 
5.최종적으로 가장 큰 최댓값인 maximumValue가 나온다. 


```
function findMax (arr){
var maximumValue = arr[0]
for(i=1;i<arr.length;i++){
	if(maximumValue < arr[i]){
	var maximumValue = arr[i];
	}
} 
return maximumValue
}
var maximumValue = findMax(arr)
arr = [1,2,3,4]
console.log(maximumValue)
```
