#Simple Select

A simple select with jquery,because the html select can not deal with css.

##How to use
* step 1
```html
<link rel="stylesheet" href="public/css/simple-select.css">
<link rel="stylesheet" href="public/css/font-awesome.min.css">
```

* step 2
```html
<script type="text/javascript" src="public/js/jquery-1.11.0.min.js"></script>
<script type="text/javascript" src="public/js/simple-select.js"></script>
```

* step 3
```html
<span class="simple-select">
  <select name="city" data-name="Select City">
    <option value="0">Select City</option>
    <option value="city-1">City-1</option>
    <option value="city-2">City-2</option>
    <option value="city-3">City-3</option>
  </select>
</span>
```  
the select data-name is just to display,and the wrapper span is a select container,you also can use other tag.


* step 4
```html
<script type="text/javascript">
$(function(){
  $('.simple-select').simpleSelect();
})
</script>
```

## Demo
[Click Here](http://dev.365jinbi.com/simple-select/)