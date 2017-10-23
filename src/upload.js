/* eslint-env browser */
export function upload (file) {
  var fd = new FormData()
  fd.append('file', file)
  var xhr = new XMLHttpRequest()
  xhr.upload.addEventListener('progress', function (e) {}, false)
  xhr.upload.addEventListener('load', function (e) {}, false)
  xhr.open('POST', '/upload')
  xhr.send(fd)
}
