function createPost() {
  var pageTemplate = document.getElementById("page-template").innerHTML
  var postTemplate = document.getElementById("post-template").innerHTML

  var templateFn = _.template(postTemplate)

  var postDiv = document.getElementById('post')

  var templateHtml = templateFn({ 'comment': comment, 'commenter': commenter })
}
