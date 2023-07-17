# JavaScript

# Book

## Chapter 14 DOM
1. DOM(document object model)是html和xml文档的编程接口。
2. document是每个文档的根节点
3. 所有节点都继承了Node，因此所有的类型都共享相同的基本属性和方法
4. hasChildNodes() 以及 查看ChildNodes 的length属性，都可以查询是否有子节点。
5. 所有的关系指针都是只读的。
6. appendChild()插入最后节点或者移动到最后节点
7. insertbefore()插入特定位置节点。
8. replaceChild()会插入新的节点并删除老的节点。
9. removeChild()删除节点
10. node.cloneNode(true):深复制。 node.cloneNode(false),浅复制。shallowList
11. normalize(),处理文档子树中的文本节点。
12. 修改document.domain可以使得两个页面通信，不过，如果放松成功，就不能收紧了。
13. 只有NodeList 对象有包含属性节点和文本节点。 HTMLCollection 元素可以通过 name ， id 或 index 索引来获取。 NodeList 只能通过 index 索引来获取
14. 在HTML中，元素标签名始终以全大写表示。在XML.XHTML中，标签名始终与源代码中的大小写一致。如果不确定脚本是在HTML文档还是XML文档中运行，最好将标签名转换为小写形式。
15. getAttribute(), setAttribute(), removeAttribute(); 
16. document.createelement()方法创建元素。
17. 遍历子节点时，可以用nodeType来过滤想要的元素。也可以用getElementsByTagName()的方法，来获取想要节点里面的子节点。
18. Text类型。
	* nodeType:3
	* nodeName: "#text"
	* nodeValue: 为节点中包含的文本
	* parentNode： 为element对象
	* 不支持子节点




## Chapter 19 Form
### Tips:
1. 如果表单有任何一个按钮并且焦点在表单中的某个控件上，按**回车***也可以提交表单。    
	> textarea 是例外，如果按回车，则会换行。
2. 如果表单中没有submit按钮，也可以通过调用submit()方法来提交。
	```
	let form = document.getElementByID("myForm");
	form.submit();
	```
3. 调用event.preventDefault()来阻止表单的提交。
	```
	let form = document.querySelector("#myForm");
	form.addEventListener("submit", (event)=>{
		event.preventDefault();
	})
	```
4. get from elements    
   Through ID.    
    >`let form = documents.getElementByID("form1");`   
     
     
   Through document.forms get all the forms elements.    
   Get form from the name    
    >`let firstForm = document.form[0];`    
    >`let myForm = docment.form["form2];`
5. 阻止多次提交表单的2个方法：
	* 在表单提交后禁用提交按钮
	* 通过onSubmit事件处理程序取消之后的表单提交
6. 重置表单*form.reset()*, 用法基本上与submit相似。**表单设计中通常不提倡重置表单**
7. 为了阻止表单多次提交，可以在form submit事件中禁用提交按钮。这个功能不能直接交给提交按钮添加onclick事件处理。    
**因为不同浏览器触发事件的时机不一样**。因此最好使用表单的submit事件来禁用提交按钮。
8. type属性可以用于除了\<filedset\>之外的所有表单字段。**select 元素的type属性是*只读的***
9. HTML5为表单增加了autofocus属性。 `<input type="text" autofocus>`. *大多数现代浏览器支持autofocus属性，只有IOS Safari/ Opera Mini 和 IE10 及以下版本不支持*
10. 表单公共事件： change() && focus() && blur() - 移除焦点， 现在很少有用例需要调用blur()    
	> change: 在<input>和<textarea>元素的value发生变化且失去焦点时触发，或者在<select>元素中选中项发生变化的触发。3
	> blur 和 change 事件的关系没有明确的定义，有些浏览blur事件会优先change，有些则反之。
11. <textarea>不能在HTML中指定最大允许的字节数
12. select事件和select()。文本有selectionStart和selectionEnd属性，用于获取选取的值。用String.subString来过滤。
13. keypress事件，可以过滤想要用户输入的内容，例如只能输入数字。
	> String.fromCharCode()可以把事件中的charCode转换成字符串。
	> 为了应对Safari3.1和Firefox老版本（它们的非字符键也会出发keypress)，\[Firefox所有非非字符键的charCode都是0，Safari的都是8\], 因此可以这么判断 `if(!/\d/.test(String.fromCharCode(event.charCode)) && event.charCode > 9)`
	> 解决Ctrl+C/V组合键 `if(!/\d/.test(String.fromCharCode(event.charCode)) && event.charCode > 9 && !event.ctrlKey)`
	```JavaScript
	form.elements["phone"].addEventListener("keypress", (event)=>{
		if(!/\d/.test(String.fromCharCode(event.charCode)) && event.charCode > 9 && !event.ctrlKey){
			event.preventDefault();
		}
	})
	```
14. HTML5约束验证API只有支持HTML这部分的浏览器才有，包括所有现代浏览器(除了Safari)和IE10+。
15. `required`属性适用于_<input>,<textarea>和<select>_。


## RegExp
1. RegExp object is used for matching text with a pattern.
2. two ways to construct a regular expression    
	> `const re = /ab+c/;` If the regular expression remains constant, using this can improve performance.
	> `const re = new RegExp("ab+c");` Using the constructor function provides runtime compilation of the regular expression
3. 正则表达式.test(). 用于验证正则表达式。返回布尔值。
4. 