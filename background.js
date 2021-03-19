// This extension will need information from a persistent variable as soon as its installed. Start by including a listening event for runtime.onInstalled in the background script.

let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});