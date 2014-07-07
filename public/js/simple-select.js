(function($){
  $.fn.simpleSelect = function(options){
    var defaults = {};
    var options = $.extend(defaults, options);

    this.each(function(){
      var parent = $(this);
      var select = parent.find('select');
      parent.append('<a href="#" class="ss-dropdown" data-name="'+select.attr('name')+'">'+select.attr('data-name')+'</a><i class="icon-angle-right"></i>');

      var options = parent.find('option');
      parent.append('<ul></ul>');
      var ul = parent.find('ul');

      for (var i = 0; i <= options.length; i++) {
        var opt = $(options[i]);
        if(opt.html() != undefined)
          ul.append('<li><a href="#" data-value="'+$(opt).val()+'">'+$(opt).html()+'</a></li>')
      }

 
      parent.on('click','.ss-dropdown',function(){
        parent.find('ul').toggle();


        var i = parent.find('i');
        if (i.attr('class') == 'icon-angle-right') {
          i.attr('class','icon-angle-down');
        } else{
          i.attr('class','icon-angle-right');
        }

        return false;

      })

      var ul = parent.find('ul');
      ul.on('click','a',function(){
        ul.toggle();


        //find each input[hidden]
        var input = parent.find('input[type=hidden]');
        var val = $(this).attr('data-value');
        var a = parent.find('.ss-dropdown');

        //setting input[hidden] value
        if (input.length) {
          input.val(val);
        } else{
          input = $('<input type="hidden" name="' + a.attr('data-name') + '" value="' + val + '"/>');
          parent.append(input)
        }
        a.html($(this).html());

        parent.find('i').attr('class','icon-angle-right');

        return false;
      })
    })
  };
})(jQuery);