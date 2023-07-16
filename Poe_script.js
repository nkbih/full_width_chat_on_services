// ==UserScript==
// @name         Poe.com Chat Expansion
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Expand the chat dialog area on poe.com
// @author       You
// @match        https://poe.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function expandChat() {
        const chatSection = document.querySelector('body > div:first-child > div:first-child > div > section > div:nth-child(2) > div');
        const chatMessageRows = document.querySelectorAll('.Message_row___ur0Y > div');

        if (!chatSection || chatMessageRows.length === 0) {
            return;
        }

        if (!chatSection.classList.contains('expanded')) {
            chatSection.style.maxWidth = 'none';
            chatSection.classList.add('expanded');
        }

        chatMessageRows.forEach(chatMessageRow => {
            if (!chatMessageRow.classList.contains('expanded')) {
                chatMessageRow.style.maxWidth = 'none';
                chatMessageRow.classList.add('expanded');
            }
        });
    }

    window.addEventListener('load', expandChat);

    const targetNode = document.querySelector('body');
    if (targetNode) {
        const config = { childList: true, subtree: true };
        const observer = new MutationObserver(expandChat);
        observer.observe(targetNode, config);
    }
})();
