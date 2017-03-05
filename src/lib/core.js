/*
 * @Author: puxiao.wh 
 * @Date: 2017-03-05 18:43:31 
 * @Last Modified by: puxiao.wh
 * @Last Modified time: 2017-03-05 18:49:42
 */

export default {
    // 不建议使用get方法
    get: (query) => {
        var obj = {}
        var list = document.querySelectorAll(query)
        for(var i = 0, l = list.length; i < l; i++) {
            obj[list[i].getAttribute('name')] = list[i].getAttribute('value')
        }
        console.warn('当前正在使用Serialization的get方法，该方法不建议使用，但依然有效，请推荐fast方法')
        return obj
    },
    fast: (name) => {
        var obj = {}
        var list = []
        if(name) {
            list = document.querySelectorAll(`input[name=${name}]`)
        } else {
            list = document.querySelectorAll('input')
        }
        for(var i = 0, l = list.length; i < l; i++) {
            obj[list[i].getAttribute('name')] = list[i].getAttribute('value')
        }
        return obj
    }
}