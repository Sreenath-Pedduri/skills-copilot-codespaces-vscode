// Create web server
// 1. Load modules
var http = require('http');
var url = require('url');
var fs = require('fs');
var qs = require('querystring');
var comments = require('./comments');

// 2. Create server
http.createServer(function (req, res) {
  switch (req.method) {
    case 'GET': 
      if (req.url === '/') {
        show(res);
      } else {
        var id = parseInt(req.url.slice(1), 10);
        if (isNaN(id)) {
          notFound(res);
        } else {
          read(id, res);
        }
      }
      break;
    case 'POST': 
      if (req.url === '/') {
        add(req, res);
      } else {
        notFound(res);
      }
      break;
    default: 
      notAllowed(res);
  }
}).listen(3000);

function show(res) {
  var html = '<html><head><title>Comments</title></head><body>'
           + '<h1>Comments</h1>'
           + '<ul>'
           + comments.list().map(function (comment, i) {
               return '<li><a href="/' + i + '">' + comment.title + '</a></li>';
             }).join('')
           + '</ul>'
           + '<form method="post" action="/">'
           + '<p>Title: <input type="text" name="title"></p>'
           + '<p>Comment: <textarea name="comment"></textarea></p>'
           + '<p><input type="submit" value="Add Comment"></p>'
           + '</form>'
           + '</body></html>';
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Content-Length', Buffer.byteLength(html));
  res.end(html);
}

function read(id, res) {
  var comment = comments.get(id);
  if (!comment) {
    notFound(res);
  } else {
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Length', Buffer.byteLength(comment.text));
    res.end(comment.text);
  }
}

function add(req, res) {
  var body = '';
  req.setEncoding('utf8');
  req.on('data', function (chunk) { body += chunk; });
  req.on('end', function () {
    var obj = qs.parse(body);
    comments.add(obj.title, obj.comment);
    show(res