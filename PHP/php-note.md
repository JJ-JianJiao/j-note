# Add element to Array in PHP:

1. use `[]` to add element.    

    ```php
    $array = []; // define an empty array
    $array[] = "element1"; // add element
    $array[] = "element2";    
    ```

2. use `array_push()` to add elements：use `array_push()` to add elements to the end of the array. 

    ```php
    $array = [];
    array_push($array, "element1"); // add element
    array_push($array, "element2");
    ```
3. use the index to add element：

    ```php
    $array = [];
    $array[0] = “element1”; // add element at index = 0
    $array[1] = “element2”; 
    ```
4. use `array_merge()` to combine arrays and return a new array.

    ```php
    $array1 = ["a","b","c"];
    $array2 = ["d","e","f"];
    $array3 = array_merge($array1, $array2); // return:["a","b","c","d","e","f"]
    ```