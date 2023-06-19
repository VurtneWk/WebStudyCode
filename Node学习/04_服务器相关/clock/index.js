
window.onload = function () {
  // 定时器，每隔 1 秒执行 1 次
  setInterval(() => {
    var dt = new Date()
    var HH = dt.getHours()
    var mm = dt.getMinutes()
    var ss = dt.getSeconds()

    if (document !== null) {
      const hh = document.querySelector('#HH')
      // 为页面上的元素赋值
      if (hh !== null) {
        hh.innerHTML = padZero(HH)
      }
      const mm = document.querySelector('#mm')
      if (mm !== null) {
        mm.innerHTML = padZero(mm)
      }
      const ss = document.querySelector('#ss')
      if (ss !== null) {
        ss.innerHTML = padZero(ss)
      }
    }


  }, 1000)
}

// 补零函数
function padZero(n) {
  return n > 9 ? n : '0' + n
}
