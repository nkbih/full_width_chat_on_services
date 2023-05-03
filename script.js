// ==UserScript==
// @name         ChatGPT Dialog Area Expander
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Expand the chat dialog area on chat.openai.com
// @author       You
// @match        https://chat.openai.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const style = document.createElement('style');
    style.innerHTML = `
        /* Set the flex-basis for the left panel */
        #__next > div.overflow-hidden.w-full.h-full.relative.flex > div.dark.hidden.bg-gray-900.md\\:flex.md\\:w-\\[260px\\].md\\:flex-col {
            flex-basis: 350px !important;
        }

        .text-base {
            max-width: 100% !important;
        }

        .group .text-base {
            padding-left: 100px !important;
            padding-right: 100px !important;
            white-space: pre-wrap !important;
            word-break: break-all !important;
        }

        /* Set fixed width for the chat container */
        #__next > div.overflow-hidden.w-full.h-full.relative.flex > div.flex.h-full.max-w-full.flex-1.flex-col > main > div.flex-1.overflow-hidden > div > div > div {
            width: calc(100% - 300px) !important; /* Adjust the value '100px' according to your desired width */
        }
    `;

    document.head.appendChild(style);
})();
