// ==UserScript==
// @name         Auto Downloader for hitomi.la
// @namespace    http://tampermonkey.net/
// @downloadURL     https://neosarchizo.github.io/tampermonkey/hitomi.user.js
// @updateURL       https://neosarchizo.github.io/tampermonkey/hitomi.user.js
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include        https://hitomi.la/galleries/*.html
// @include        https://hitomi.la/doujinshi/*.html
// @include        https://hitomi.la/manga/*.html
// @include        https://hitomi.la/cg/*.html
// @include        https://hitomi.la/gamecg/*.html
// @grant        none
// ==/UserScript==

;(function() {
  const a = document.querySelector('#dl-button')
  a.click()
})()
