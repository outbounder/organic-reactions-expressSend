var response = require("express").response

var expressSend = module.exports.expressSend = function(c, next){
  if(c.res.body) {
    var oldProto = c.res.__proto__;
    c.res.app = {settings: {}, get:function(){}}
    c.res.req = c.req
    c.res.__proto__ = response
    if(c.res.code)
      c.res.send(c.res.code, c.res.body)
    else
      c.res.send(c.res.body)
    delete c.res.app
    delete c.res.req
    c.res.__proto__ = oldProto
  }
  next()
}