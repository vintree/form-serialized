# form-serialized

form-serialized是一个表单序列化库，可以非常简单获取表单中的name、value值，并且以对象的形式返回。

引入模块
```
import Serialized from 'form-serialized'
```

获取页面所有表单
```
Serialized.get('css selector')

Serialized.get('input[name=webServer]')

return => {
    webServer: 'http://test.taobao.com'
}

```

获取序列化的简单方法
```
Serialized.fast('name')

Serialized.fast('webServer')

return => {
    webServer: 'http://test.taobao.com'
    
}
```