// ==UserScript==
// @name         manatoki
// @namespace    https://neosarchizo.github.io
// @downloadURL     https://neosarchizo.github.io/tampermonkey/manatoki.user.js
// @updateURL       https://neosarchizo.github.io/tampermonkey/manatoki.user.js
// @version      0.4
// @description  try to take over the world!
// @author       You
// @match        https://manatoki83.net/comic/*
// @grant        none
// @require      https://code.jquery.com/jquery-3.5.1.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.5/jszip.min.js
// @require      https://fastcdn.org/FileSaver.js/1.1.20151003/FileSaver.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/numeral.js/2.0.6/numeral.min.js
// ==/UserScript==

;(function() {
  const title = document.querySelector('span.page-desc').textContent.trim()

  let imgs = document.querySelectorAll('article[itemprop="articleBody"] img')

  imgs = Array.prototype.slice.call(imgs)

  imgs = imgs
    .filter(img => {
      return $(img).is(':visible')
    })
    .filter(img => {
      const {attributes} = img

      for (let i = 0; i < attributes.length; i += 1) {
        if (attributes[i].name.startsWith('data-')) {
          return true
        }
      }
      return false
    })
    .map(img => {
      const {attributes} = img

      for (let i = 0; i < attributes.length; i += 1) {
        if (attributes[i].name.startsWith('data-')) {
          return attributes[i].value.replace('?quick', '')
        }
      }
      return null
    })
    .filter(
      img =>
        img.toLowerCase().endsWith('.jpg') ||
        img.toLowerCase().endsWith('.jpeg') ||
        img.toLowerCase().endsWith('.png'),
    )

  fetch('http://localhost:5432', {
    method: 'POST',
    body: JSON.stringify({title, imgs}),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => console.log(res))
})()
