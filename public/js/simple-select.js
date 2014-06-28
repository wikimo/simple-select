(function($){
  $.fn.simpleSelect = function(options){
    var defaults = {};
    var options = $.extend(defaults, options);

    this.each(function(){
      var parent = $(this);
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