$.fn.outsider = function(fn) {
  var el = this,
      args = [].slice.call(arguments, 1);

  $("html").click(function(event) {
    if (!$.contains(el[0], event.target)) {
      if (typeof fn === "string") {
        el[fn].apply(el, args);
      }
      else {
        fn.call(el, event, el);
      }
      $(this).unbind(event);
    }
  });
};
