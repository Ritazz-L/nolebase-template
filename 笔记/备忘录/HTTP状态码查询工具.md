---
status: 尚未完成
tags:
  - 知识领域
---
>了解所有 HTTP 状态码的含义，助您更好地进行 Web 开发
## 100
continue
继续，客户端应继续其请求
## 101
Switching Protocols
切换协议。服务器根据客户端的请求切换协议
## 102
Processing
处理中。服务器正在处理请求，但无响应可用
## 103
Early Hints
早期提示。用来在最终的 HTTP 消息之前返回一些响应头
## 200
OK
请求成功。一般用于GET与POST请求
## 201
Created
已创建。成功请求并创建了新的资源
## 202
Accepted
已接受。已经接受请求，但是未处理完成
## 203
Non-Authoritative Information
非授权信息。请求成功，但返回的信息可能来自另一来源
## 204
No Content
无内容。服务器成功处理，但未返回内容
## 205
Reset Content
重置内容。服务器处理成功，用户终端应重置文档视图
## 206
Partial Content
部分内容。服务器成功处理了部分GET请求
## 207
Multi-Status
多状态。代表之后的消息体是一个XML消息
## 208
Already Reported
已报告。DAV绑定的成员已在（多状态）响应之前的部分被列举
## 226
IM Used
实用IM。服务器已经完成了对资源的GET请求
## 300
Multiple Choices
多种选择。请求的资源可包括多个位置
## 301
Moved Permanently
永久移动。请求的资源已被永久移动到新位置
## 302
==Found==
临时移动。请求的资源临时移动到新的位置
## 303
==See Other==
查看其它地址。使用GET和POST请求查看。
## 304
==Not Modified==
未修改。所请求的资源未修改，会使用缓存。
## 305
==Use Proxy==
使用代理。请求者只能使用代理访问请求的网页
## 307
==Temporary Redirect==
临时重定向。请求的资源临时移动到新位置
## 308
==Permanent Redirect==
永久重定向。请求的资源已永久移动到新位置
## 400
==Bad Request==
错误请求。服务器不理解请求的语法
## 401
==Unauthorized==
未授权。请求要求用户的身份认证
## 402
==Payment Required==
需要付款。预留给未来使用
## 403
==Forbiden==
禁止。服务器拒绝请求
## 404
==Not found==
未找到。服务器找不到请求的资源
## 405
==Method Not Allowed==
方法禁用。禁用请求中指定的方法
## 406
==Not Acceptable==
不接受。无法使用请求的内容特性响应请求的网页
## 407
==Proxy Authentication Required==
需要代理授权。请求需要代理授权
## 408
==Request Timeout==
请求超时。服务器等待请求时发生超时
## 409
==Conflict==
冲突。服务器在完成请求时发生冲突
## 410
==Gone==
已删除。请求的资源永久删除后不再可用
## 411
==Length Required==
需要有效长度。服务器拒绝不包含有效内容长度标头的请求
## 412
==Precondition Failed==
未满足前提条件。服务器未满足请求者在请求中设置的其中一个前提条件
## 413
==Payload Too Large==
请求实体过大。服务器无法处理请求，因为请求实体过大
## 414
==URI Too Long==
请求的 URI 过长。服务器无法处理请求，因为 URI 过长
## 415
==Unsupported Media Type==
不支持的媒体类型。服务器无法处理请求附带的媒体格式
## 416
==Range Not Satisfiable==
请求范围不符合要求。请求的范围无法满足
## 417
==Expectation Failed==
未满足期望值。服务器无法满足 Expect 的请求头信息
## 418
==I'm a teapot==
我是一个茶壶。超文本咖啡壶控制协议的笑话
## 421
==Misdirected Request==
误导请求。服务器不能产生响应
## 422
==Unprocessable Entity==
无法处理的实体。请求格式正确，但是含有语义错误
## 423
==Locked==
已锁定。当前资源被锁定
## 424
==Failed Dependency==
依赖关系失败。由于之前的某个请求发生的错误，导致当前请求失败
## 425
==Too Early==
太早。服务器不愿意冒着风险去处理可能重播的请求
## 426
==Upgrade Required==
需要升级。客户端应当切换到TLS/1.0
## 428
==Precondition Required==
要求先决条件。原始服务器要求该请求满足先决条件
## 429
==Too Many Requests==
太多请求。用户在给定的时间内发送了太多的请求
## 431
==Request Header Fields Too Large==
请求头字段太大。服务器不愿处理请求，因为它的头字段太大
## 451
==Unavailable For Legal Reasons==
因法律原因无法获得。该请求因法律原因不可用
## 500
==Internal Server Error==
服务器内部错误。服务器遇到错误，无法完成请求
## 501
==Not Implemented==
尚未实施。服务器不具备完成请求的功能
## 502
==Bad Gateway==
错误网关。服务器作为网关或代理，从上游服务器收到无效响应
## 503
==Service Unavailable==
服务不可用。服务器暂时无法处理请求
## 504
==Gateway Timeout==
网关超时。服务器作为网关或代理，但是没有及时从上游服务器收到请求‘
## 505
==HTTP Version Not Supported==
HTTP 版本不受支持。服务器不支持请求中所用的 HTTP 协议版本
## 506
==Variant Also Negotiates==
服务器存在内部配置错误
## 507
==Insufficient Storage==
存储空间不足。服务器无法存储完成请求所必须的内容
## 508
==Loop Detected==
检测到循环。服务器在处理请求时检测到无限循环
## 510
==Not Extended==
不延长。获取资源所需要的策略并没有被满足
## 511
==Network Authentication Required==
要求网络认证。客户端需要进行身份验证才能获得网络访问权限