#Simple Select With Jquery

A simple select control with jquery,because the html select can not update with css.

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
  <a href="#" class="ss-dropdown" data-name="item">Select Item</a><i class="icon-angle-right"></i>
  <ul>
    <li><a href="#" data-value="item-1">Item-1</a></li>
    <li><a href="#" data-value="item-2">Item-2</a></li>
    <li><a href="#" data-value="item-3">Item-3</a></li>
    <li><a href="#" data-value="0">Select Item</a></li>
  </ul>
</span>
```  
the data-name is equal the html select name, the html a link data-value is equal select option value.the simple-select.js will append a input type hidden to set the value which data-value you selected.

* step 4
```html
<script type="text/javascript">
$(function(){
  $('.simple-select').simpleSelect();
})
</script>
```