if (document.URL.indexOf('reddit.com') != -1) {
  var titles = document.querySelectorAll('a.title')
  Array.prototype.forEach.call(titles, function(el, i) {
    el.setAttribute('target', '_blank')
  })
}
