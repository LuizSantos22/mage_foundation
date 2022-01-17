!function(e){var r,a={};try{!e&&module&&module.exports&&(e=require("jquery"),r=require("jsdom").jsdom,e=e(r().parentWindow))}catch(r){}!function(a,c){"use strict";var r={};c.forbiddenSequences=["0123456789","abcdefghijklmnopqrstuvwxyz","qwertyuiop","asdfghjkl","zxcvbnm","!@#$%^&*()_+"],r.wordNotEmail=function(r,e,o){return e.match(/^([\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+\.)*[\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+@((((([a-z0-9]{1}[a-z0-9\-]{0,62}[a-z0-9]{1})|[a-z])\.)+[a-z]{2,6})|(\d{1,3}\.){3}\d{1,3}(\:\d{1,5})?)$/i)?o:0},r.wordLength=function(r,e,o){var s=e.length,e=Math.pow(s,r.rules.raisePower);return s<r.common.minChar&&(e+=o),e},r.wordSimilarToUsername=function(r,e,o){r=a(r.common.usernameField).val();return r&&e.toLowerCase().match(r.replace(/[\-\[\]\/\{\}\(\)\*\+\=\?\:\.\\\^\$\|\!\,]/g,"\\$&").toLowerCase())?o:0},r.wordTwoCharacterClasses=function(r,e,o){return e.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)||e.match(/([a-zA-Z])/)&&e.match(/([0-9])/)||e.match(/(.[!,@,#,$,%,\^,&,*,?,_,~])/)&&e.match(/[a-zA-Z0-9_]/)?o:0},r.wordRepetitions=function(r,e,o){return e.match(/(.)\1\1/)?o:0},r.wordSequences=function(r,o,e){var s,t=!1;return 2<o.length&&(a.each(c.forbiddenSequences,function(r,e){t||(e=[e,e.split("").reverse().join("")],a.each(e,function(r,e){for(s=0;s<o.length-2;s+=1)-1<e.indexOf(o.toLowerCase().substring(s,s+3))&&(t=!0)}))}),t)?e:0},r.wordLowercase=function(r,e,o){return e.match(/[a-z]/)&&o},r.wordUppercase=function(r,e,o){return e.match(/[A-Z]/)&&o},r.wordOneNumber=function(r,e,o){return e.match(/\d+/)&&o},r.wordThreeNumbers=function(r,e,o){return e.match(/(.*[0-9].*[0-9].*[0-9])/)&&o},r.wordOneSpecialChar=function(r,e,o){return e.match(/[!,@,#,$,%,\^,&,*,?,_,~]/)&&o},r.wordTwoSpecialChar=function(r,e,o){return e.match(/(.*[!,@,#,$,%,\^,&,*,?,_,~].*[!,@,#,$,%,\^,&,*,?,_,~])/)&&o},r.wordUpperLowerCombo=function(r,e,o){return e.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)&&o},r.wordLetterNumberCombo=function(r,e,o){return e.match(/([a-zA-Z])/)&&e.match(/([0-9])/)&&o},r.wordLetterNumberCharCombo=function(r,e,o){return e.match(/([a-zA-Z0-9].*[!,@,#,$,%,\^,&,*,?,_,~])|([!,@,#,$,%,\^,&,*,?,_,~].*[a-zA-Z0-9])/)&&o},c.validation=r,c.executeRules=function(t,n){var i=0;return a.each(t.rules.activated,function(r,e){var o,s;e&&(o=t.rules.scores[r],e=c.validation[r],a.isFunction(e)||(e=t.rules.extra[r]),a.isFunction(e)&&((o=e(t,n,o))&&(i+=o),(o<0||!a.isNumeric(o)&&!o)&&0<(s=t.ui.spanError(t,r)).length&&t.instances.errors.push(s)))}),i}}(e,a);try{module&&module.exports&&(module.exports=a)}catch(r){}var n={common:{}};n.common.minChar=6,n.common.usernameField="#username",n.common.userInputs=[],n.common.onLoad=void 0,n.common.onKeyUp=void 0,n.common.zxcvbn=!1,n.common.zxcvbnTerms=[],n.common.debug=!1,n.rules={},n.rules.extra={},n.rules.scores={wordNotEmail:-100,wordLength:-50,wordSimilarToUsername:-100,wordSequences:-20,wordTwoCharacterClasses:2,wordRepetitions:-25,wordLowercase:1,wordUppercase:3,wordOneNumber:3,wordThreeNumbers:5,wordOneSpecialChar:3,wordTwoSpecialChar:5,wordUpperLowerCombo:2,wordLetterNumberCombo:2,wordLetterNumberCharCombo:2},n.rules.activated={wordNotEmail:!0,wordLength:!0,wordSimilarToUsername:!0,wordSequences:!0,wordTwoCharacterClasses:!1,wordRepetitions:!1,wordLowercase:!0,wordUppercase:!0,wordOneNumber:!0,wordThreeNumbers:!0,wordOneSpecialChar:!0,wordTwoSpecialChar:!0,wordUpperLowerCombo:!0,wordLetterNumberCombo:!0,wordLetterNumberCharCombo:!0},n.rules.raisePower=1.4,n.ui={},n.ui.colorClasses=["alert","warning","success"],n.ui.showProgressBar=!0,n.ui.showPopover=!1,n.ui.popoverPlacement="bottom",n.ui.showStatus=!1,n.ui.spanError=function(r,e){"use strict";e=r.ui.errorMessages[e];return e||""},n.ui.popoverError=function(r){"use strict";var o="<div>Errors:<ul class='error-list' style='margin-bottom: 0;'>";return e.each(r,function(r,e){o+="<li>"+e+"</li>"}),o+="</ul></div>"},n.ui.errorMessages={wordLength:"Your password is too short",wordNotEmail:"Do not use your email as your password",wordSimilarToUsername:"Your password cannot contain your username",wordTwoCharacterClasses:"Use different character classes",wordRepetitions:"Too many repetitions",wordSequences:"Your password contains sequences"},n.ui.verdicts=["Weak","Normal","Medium","Strong","Very Strong"],n.ui.showVerdicts=!0,n.ui.showVerdictsInsideProgressBar=!1,n.ui.useVerdictCssClass=!1,n.ui.showErrors=!1,n.ui.container=void 0,n.ui.viewports={progress:void 0,verdict:".postfix",errors:void 0},n.ui.scores=[14,26,38,50];var c={};!function(n,i){"use strict";var t=["error","warning","success"];i.getContainer=function(r,e){r=e.parents(r.ui.container);return r=!r||1!==r.length?e.parent():r},i.findElement=function(r,e,o){return(e?r.find(e):r).find(o)},i.getUIElements=function(r,e){var o;return r.instances.viewports||(o=i.getContainer(r,e),(e={}).$progressbar=i.findElement(o,r.ui.viewports.progress,"div.progress"),r.ui.showVerdictsInsideProgressBar&&(e.$verdict=e.$progressbar.find("span.password-verdict")),r.ui.showPopover||(r.ui.showVerdictsInsideProgressBar||(e.$verdict=i.findElement(o,r.ui.viewports.verdict,"span.password-verdict")),e.$errors=i.findElement(o,r.ui.viewports.errors,"small.error")),r.instances.viewports=e)},i.initProgressBar=function(r,e){var o=i.getContainer(r,e),s="<div class='progress'><div class='progress-meter' style='width:0%'>";r.ui.showVerdictsInsideProgressBar&&(s+="<span class='progress-meter-text'></span>"),s+="</div></div>",r.ui.viewports.progress?o.find(r.ui.viewports.progress).append(s):n(s).insertAfter(e)},i.initHelper=function(r,e,o,s){r=i.getContainer(r,e);s?r.find(s).append(o):n(o).insertAfter(e)},i.initVerdict=function(r,e){i.initHelper(r,e,"<span class='password-verdict'></span>",r.ui.viewports.verdict)},i.initErrorList=function(r,e){var o=i.getContainer(r,e);i.findElement(o,r.ui.viewports.errors,"small.error").length||i.initHelper(r,e,"<small class='error' style='display:none;'></small>",r.ui.viewports.errors)},i.initPopover=function(r,e){return!1},i.initUI=function(r,e){r.ui.showPopover?i.initPopover(r,e):(r.ui.showErrors&&i.initErrorList(r,e),r.ui.showVerdicts&&!r.ui.showVerdictsInsideProgressBar&&i.initVerdict(r,e)),r.ui.showProgressBar&&i.initProgressBar(r,e)},i.possibleProgressBarClasses=["alert","warning","success"],i.updateProgressBar=function(r,e,o,s){var t=i.getUIElements(r,e).$progressbar,e=t.find(".progress-meter");n.each(r.ui.colorClasses,function(r,e){t.removeClass(e)}),t.addClass(r.ui.colorClasses[o]),e.css("width",s+"%")},i.updateVerdict=function(r,e,o,s){e=i.getUIElements(r,e).$verdict;e.removeClass(r.ui.colorClasses.join(" ")),-1<o&&e.addClass(r.ui.colorClasses[o]),e.html(s)},i.updateErrors=function(r,e){var o=i.getContainer(r,e),e=i.getUIElements(r,e).$errors,s="";n.each(r.instances.errors,function(r,e){s+=e+"<br>"}),""!==s?(o.addClass("error"),e.show()):(o.removeClass("error"),e.hide()),e.html(s)},i.updatePopover=function(r,e,o){var s=e.data("bs.popover"),t="",n=!0;r.ui.showVerdicts&&!r.ui.showVerdictsInsideProgressBar&&0<o.length&&(t="<h5><span class='password-verdict'>"+o+"</span></h5>",n=!1),r.ui.showErrors&&(0<r.instances.errors.length&&(n=!1),t+=r.ui.popoverError(r.instances.errors)),n?e.popover("hide"):s.$arrow&&0<s.$arrow.parents("body").length?e.find("+ .popover .popover-content").html(t):(s.options.content=t,e.popover("show"))},i.updateFieldStatus=function(r,e,o){var s=e.parents(".postfix").first();n.each(t,function(r,e){s.removeClass(e)}),s.addClass(o=t[o])},i.percentage=function(r,e){e=Math.floor(100*r/e);return e=100<(e=e<=0?1:e)?100:e},i.getVerdictAndCssClass=function(r,e){var o,s,r=e<=0?(s=-1,r.ui.verdicts[o=0]):e<r.ui.scores[0]?r.ui.verdicts[s=o=0]:e<r.ui.scores[1]?(o=0,r.ui.verdicts[s=1]):e<r.ui.scores[2]?(o=1,r.ui.verdicts[s=2]):e<r.ui.scores[3]?(o=1,r.ui.verdicts[s=3]):(o=2,r.ui.verdicts[s=4]);return[r,o,s]},i.updateUI=function(r,e,o){var s,t=i.getVerdictAndCssClass(r,o),n=0===o?"":t[0];t=t[1],s=r.ui.useVerdictCssClass?t:-1,r.ui.showProgressBar&&(o=i.percentage(o,r.ui.scores[3]),i.updateProgressBar(r,e,t,o),r.ui.showVerdictsInsideProgressBar&&i.updateVerdict(r,e,s,n)),r.ui.showStatus&&i.updateFieldStatus(r,e,t),r.ui.showPopover?i.updatePopover(r,e,n):(r.ui.showVerdicts&&!r.ui.showVerdictsInsideProgressBar&&i.updateVerdict(r,e,s,n),r.ui.showErrors&&i.updateErrors(r,e))}}(e,c);!function(i,o){"use strict";var s,t=function(r){var o,e,s=i(r.target),t=s.data("pwstrength-foundation"),n=s.val();void 0!==t&&(t.instances.errors=[],e=0===n.length?0:t.common.zxcvbn?(o=[],i.each(t.common.userInputs.concat([t.common.usernameField]),function(r,e){e=i(e).val();e&&o.push(e)}),o=o.concat(t.common.zxcvbnTerms),zxcvbn(n,o).entropy):a.executeRules(t,n),c.updateUI(t,s,e),s=(n=c.getVerdictAndCssClass(t,e))[2],n=n[0],t.common.debug&&console.log(e+" - "+n),i.isFunction(t.common.onKeyUp)&&t.common.onKeyUp(r,{score:e,verdictText:n,verdictLevel:s}))};o.init=function(s){return this.each(function(r,e){var o=i.extend(!0,{},n),o=i.extend(!0,o,s),e=i(e);o.instances={},e.data("pwstrength-foundation",o),e.on("keyup",t),e.on("change",t),e.on("onpaste",t),c.initUI(o,e),i.trim(e.val())&&e.trigger("keyup"),i.isFunction(o.common.onLoad)&&o.common.onLoad()}),this},o.destroy=function(){this.each(function(r,e){var o=i(e),e=o.data("pwstrength-foundation"),e=c.getUIElements(e,o);e.$progressbar.remove(),e.$verdict.remove(),e.$errors.remove(),o.removeData("pwstrength-foundation")})},o.forceUpdate=function(){this.each(function(r,e){t({target:e})})},o.addRule=function(o,s,t,n){this.each(function(r,e){e=i(e).data("pwstrength-foundation");e.rules.activated[o]=n,e.rules.scores[o]=t,e.rules.extra[o]=s})},s=function(o,s,t){this.each(function(r,e){i(e).data("pwstrength-foundation").rules[s][o]=t})},o.changeScore=function(r,e){s.call(this,r,"scores",e)},o.ruleActive=function(r,e){s.call(this,r,"activated",e)},i.fn.pwstrength=function(r){var e;return o[r]?e=o[r].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof r&&r?i.error("Method "+r+" does not exist on jQuery.pwstrength-foundation"):e=o.init.apply(this,arguments),e}}(e,{})}(jQuery);