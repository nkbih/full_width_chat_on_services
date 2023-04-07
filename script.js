// ==UserScript==
// @name         ChatGPT Custom Width
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Change message width on ChatGPT
// @author       You
// @match        https://chat.openai.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const style = document.createElement('style');
    style.innerHTML = `
        .group {
            max-width: 100% !important;
        }

        .text-base {
            max-width: 100% !important;
        }

        .group .text-base {
            padding-left: 30px !important;
            padding-right: 30px !important;
        }
    `;

    document.head.appendChild(style);
})();
