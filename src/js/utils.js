// minNum 求任意多数中的 最小值
function minNum() {
    var minNum = arguments[0];
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] < minNum) {
            minNum = arguments[i]
        }
    }
    return minNum;
}

// maxNum函数求任意多数中的最大值
function maxNum() {
    var maxNum = arguments[0];
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] > maxNum) {
            maxNum = arguments[i]
        }
    }
    return maxNum;
}

// 封装任意区间的随机数
function randomNum(min, max) {
    // 如果min > max的时候
    if (min > max) {
        return parseInt(Math.random() * (min - max + 1)) + max
    }
    return parseInt(Math.random() * (max - min + 1)) + min;
}

/* 
    bindEvent() 事件绑定的函数
    参数1：事件源（dom元素）
    参数2：事件类型（click,onmousedowm...）
    参数3：回调函数（需要传一个函数）
*/
function bindEvent(ele, type, callback) {
    if (ele.addEventListener) {
        ele.addEventListener(type, callback);
    } else {
        ele.attrachEvent('on' + type, callback)
    }
}

// 获取非内联样式样式
function getStyle(ele, attr) {
    var style;
    if (window.getComputedStyle) {
        // attr 是一个 字符串 对象[字符串]
        style = window.getComputedStyle(ele)[attr];
    } else {
        style = ele.currentStyle[attr];
    }
    return style;
}

/* 
    运动函数：
    参数：
        【1】dom元素（需要做动画的元素）
        【2】对象（你要改变的属性和数值）
        【3】回调函数（运动结束之后需要做的事情放在回调函数中）
*/
function move(ele, obj, callback) {
    let timerLen = 0;
    for (const key in obj) {
        timerLen++;
        //防止抖动
        clearInterval(ele[key]);

        ele[key] = setInterval(() => {
            // 透明度取值为 0-1 * 100 === 0-100
            let style;
            if (key === 'opacity') {
                style = parseFloat(getStyle(ele, key) * 100);
            } else {
                style = parseInt(getStyle(ele, key));
            }
            let aa = (obj[key] - style) / 5;
            // 当aa大于0 向上取整，当aa小于0向下取整
            let speed = aa > 0 ? Math.ceil(aa) : Math.floor(aa)

            if (style === obj[key]) {
                timerLen--;
                clearInterval(ele[key]);
                delete ele[key];
                if (timerLen === 0) {
                    // 先执行 回调函数
                    callback && callback(ele)
                }
            } else {
                if (key === 'opacity') {
                    ele.style[key] = (style + speed) / 100;
                } else {
                    ele.style[key] = style + speed + 'px';
                }
            }
        }, 30);
    }
}

