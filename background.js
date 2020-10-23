// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';
var buttoninsert = '<span jsslot="" jsname="j7LFlb" tabindex="-1" class="z80M1 FeRvI NZltnf" jsaction="click:o6ZaF(preventDefault=true); mousedown:lAhnzb; mouseup:Osgxgf; mouseenter:SKyDAe; mouseleave:xq3APb;touchstart:jJiBRc; touchmove:kZeBdd; touchend:VfAz8(preventMouseEvents=true)" aria-label="Slides" role="menuitem"><div class="aBBjbd MbhUzd" jsname="ksKsZd"></div><div class="PCdOIb Ce1Y1c" aria-hidden="true"><div class="IVUIAc"></div></div><div class="uyYuVb oJeWuf" jsaction="JIbuQc:v9F4Yd" data-type="3"><div class="jO7h3c">CUSTOM BUTTON</div></div></span>';
document.getElementsByClassName ("z80M1 FeRvI NZltnf")[0] = buttoninsert;

var hideinsert = '<div class="jO7h3c">Hide</div>';
document.getElementsByClassName("uyYuVb oJeWuf")[0] = hideinsert;
chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log('The color is green.');
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'classroom.google.com'},
      })],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});
