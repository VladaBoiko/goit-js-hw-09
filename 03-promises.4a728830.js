!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var o={id:e,exports:{}};return n[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequired7c6=r);var o=r("h6c0i");document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();for(var n=e.currentTarget.elements,t=n.delay,r=n.step,u=n.amount,a=Number(t.value),c=Number(r.value),f=Number(u.value),l=1;l<=f;l+=1)i(l,a).then((function(e,n){o.Notify.success("Fulfilled promise ".concat(e," in ").concat(n," ms"))})).catch((function(e,n){o.Notify.failure("Rejected promise ".concat(e," in ").concat(n," ms"))})),a+=c}));var i=function(e,n){return new Promise((function(t,r){var o=Math.random()>.3;setTimeout((function(){o&&t(e,n),r(e,n)}),n)}))}}();
//# sourceMappingURL=03-promises.4a728830.js.map
