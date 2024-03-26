function fibonacci(num) {
// your code here

	let arr = [0,1];
	let n = arr.length;

	for (let i=num; i<=n-1; i++){
		arr[i] = arr[i-1] + arr[i-2];
		return arr
	}
}

module.exports = fibonacci;
