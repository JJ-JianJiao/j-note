# Big O
0. $o O$ (omicron), $\theta \vartheta \Theta$, $\omega \Omega$. Worst, middle, and best way.
1. Time complexity: we do not mesure time complexity in time, we mesure it in the number of opoerations.
2. Space complexity: the amount of memory that something uses.
3. Big O : measure worst case.
4. O(n): is always going to be a straight line. It is proportinal.
5. Drop constants: simplify big O notation. For example, the Big O for the code below is O(2n), it still will be O(n).
	```javascript
	function logItem(n){
		for(let i = 0; i < n; i++){
			console.log(i);
		}

		for(let j = 0; j < n; j++){
			console.log(j):
		}
	}
	```
6. O(n^2): n * n. If the for loop has three nests, it will be n*n*n. But we still can simplify it as O(n^2). ***auvergne suqared***
	```javascript
	function logItem(n){
		for(let i = 0; i < n; i++){
			for(let j = 0; j < n; j++){
				console.log(i, j):
			}
		}
	}
	```
6. Drop Non-Dominants: the Big O is O(n^2+n). to simplify it, so we drop the NON-Dominants. it still be O(n^2).
	```javascript
	function logItem(n){
		for(let i = 0; i < n; i++){
			for(let j = 0; j < n; j++){
				console.log(i, j):
			}
		}
		for(let k = 0; k < n; K++){
			console.log(k);
		}
	}
	```
7. O(1):
	```javascript
	function addItems(n){
		return n + n + n;
	}
	```
8. O(log n): divide and conquer. logarithm对数 $log{_2}{n}$ => $2^3$ = 8. Log sub 2 of 8 equals 3. 2 to the power 3 equals 8.
9. Different Terms for Inputs
	```javascript
	function logTitems(a, b){
		for(let i = 0; i < a; i++){
			console.log(i);
		}
		for(let j = 0; j < b; j++){
			console.log(j);
		}
	}
	```
	the Big O is O(a + b)
		```javascript
	function logTitems(a, b){
		for(let i = 0; i < a; i++){
			for(let j = 0; j < b; j++){
				console.log(j);
			}
		}
	}
	```
	the Big O is O(a * b)
10. Array:
	* push and pop are the O(1).
	* unshift()/shift() is the O(n).
	* splice(1,0,"Hi"); is the  O(n).
	* search the value is the O(n).
	* search by index is the O(1).
11. ***make the decision based on Big O**
12. $O(n^2)$ : loop within a loop    
	O(n): proportional
	O(log n): Divide and conquer
	O(1): Constant
13. ref: https://www.bigocheatsheet.com/


# classes && Pointers  
1. class and constructor
	```javascript
	class Cookie{
		constructor(color){
			this.color = color;
		}
		getColor(){
			return this.color;
		}
		setColor(color){
			this.color = color;
		}
	}

	let cookieOne = new Cookie('green');
	let cookieTwo = new Cookie('blue'); 
	//in this note, all the datastructure by using classes.
	class LinkedList{
		constructor(value){...}
		push(value);
		unshift(value);
		insert(index, value);
		remove(index);
		pop();
		shift();
	}
	```
2. Pointers
	```javascript
	let a = 5;
	let b = a;
	#this above will not use pointer.
	let obj1 = {
		value:11;
	}
	let obj2 = obj1;
	#this above will use pointer.
	```
3. Garbage collection will remove the obj or space of memory which not be used.



# Linked Lists
1. Arrays have that linked lists do not have are indexes.
2. Arrays are contiguous places in memory. Linked lists are not, they can be all over the place.
3. Linked list have head points to the first item and tail points to the last item.
4. Big O:
	* add item to tail : O(1);
	* remove item from tail: O(n)
	* add item to head: O(1)
	* remove item from head: O(1)
	* insert item into middle: O(n)
	* remove item from middle: O(n)
	* find item from linked list: 
5. table of the Big O
| Tables          |  Lined Lists  |  Array |
|-----------------|:-------------:|:------:|
| Push            | O(1)          |  O(1)  |
| Pop             | O(n)          |  O(1)  |
| Shift           | O(1)          |  O(n)  |
| UnShift         | O(1)          |  O(n)  |
| Insert          | O(n)          |  O(n)  |
| Delete          | O(n)          |  O(n)  |
| Lookup by Index | O(n)          |  O(1)  |
| Lookup by Value | O(n)          |  O(n)  |
6. under the hood
 * Node object: value and next(pointer)
7. linked list
	```javascript
	class LinkedList{
		constructor(value){
			//create a new Node
			const newNode = new Node(value);
			this.head = newNode;
			this.tail = this.head;
			this.length = 1;
		}
		push(value){
			//create new cNode and add it to end
		}
		unshift(value){
			//create a new Node and add it to the beginning
		}
		insert(index, value){
			//create a new Node and insert Node
		}
	}
	let myLinkedList = new LinkedList(4);
	//Node class
	class Node{
		constructor(value){
			this.value = value;
			this.next = null;
		}
	}
	//create an instance of Node class
	const newNode = new Node(4);
	```