// 上面这个代码处理过度动画（默认加上不用管）
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.body.classList.add('sidenav-pinned')
    document.body.classList.add('ready')
  }, 200)
})

// 配置请求的基准URL地址
axios.defaults.baseURL = 'http://ajax-api.itheima.net'

// 封装 轻提示
function toast(str) {
  document.querySelector('.toast-body').innerHTML = str
  const toast = new bootstrap.Toast(document.getElementById('myToast'))
  toast.show()
}































