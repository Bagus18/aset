document.getElementsByClassName=function(clsName){var retVal=new Array();var elements=document.getElementsByTagName("*");for(var i=0;i<elements.length;i++){if(elements[i].className.indexOf(" ")>=0){var classes=elements[i].className.split(" ");for(var j=0;j<classes.length;j++){if(classes[j]==clsName){retVal.push(elements[i])}}}else{if(elements[i].className==clsName){retVal.push(elements[i])}}}return retVal};function addSmiley(){var postBodyClass=(postBodyClass)?postBodyClass:"post";var d=document.getElementsByClassName(postBodyClass);for(var i=0;i<d.length;i++)
{

d[i].innerHTML=d[i].innerHTML.replace(/:\)\)/gi,' <img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/21.gif" style="border:0; margin:0; padding:0;" id="new" /> ')
d[i].innerHTML=d[i].innerHTML.replace(/:d/gi,' <img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/4.gif" style="border:0; margin:0; padding:0;" id="new" /> ')
d[i].innerHTML=d[i].innerHTML.replace(/\;\)/gi,' <img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/3.gif" style="border:0; margin:0; padding:0;" id="new" /> ')
d[i].innerHTML=d[i].innerHTML.replace(/:p/gi,' <img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/10.gif" style="border:0; margin:0; padding:0;" id="new" /> ')
d[i].innerHTML=d[i].innerHTML.replace(/:\(\(/gi,' <img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/20.gif" style="border:0; margin:0; padding:0;" id="new" /> ')
d[i].innerHTML=d[i].innerHTML.replace(/:\)/gi,' <img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/1.gif" style="border:0; margin:0; padding:0;" id="new" /> ')
d[i].innerHTML=d[i].innerHTML.replace(/:\(/gi,' <img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/2.gif" style="border:0; margin:0; padding:0;" id="new" /> ')
d[i].innerHTML=d[i].innerHTML.replace(/:\|/gi,' <img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/4.gif" style="border:0; margin:0; padding:0;" id="new" /> ') 
d[i].innerHTML=d[i].innerHTML.replace(/\=\)\)/ig,' <img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/24.gif" style="border:0; margin:0; padding:0;" id="new" /> ')
d[i].innerHTML=d[i].innerHTML.replace(/:\)\]/gi,' <img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/100.gif" style="border:0; margin:0; padding:0;" id="new" /> ')
d[i].innerHTML=d[i].innerHTML.replace(/;\)\)/gi,' <img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/71.gif" style="border:0; margin:0; padding:0;" id="new" /> ')
d[i].innerHTML=d[i].innerHTML.replace(/;\;\)/gi,' <img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/5.gif" style="border:0; margin:0; padding:0;" id="new" /> ')
d[i].innerHTML=d[i].innerHTML.replace(/:d/gi,' <img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/4.gif" style="border:0; margin:0; padding:0;" id="new" /> ')
d[i].innerHTML=d[i].innerHTML.replace(/\;\)/gi,' <img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/3.gif" style="border:0; margin:0; padding:0;" id="new" /> ')
d[i].innerHTML=d[i].innerHTML.replace(/:p/gi,' <img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/10.gif" style="border:0; margin:0; padding:0;" id="new" /> ')
d[i].innerHTML=d[i].innerHTML.replace(/:\(\(/gi,' <img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/20.gif" style="border:0; margin:0; padding:0;" id="new" /> ')
d[i].innerHTML=d[i].innerHTML.replace(/:\)/gi,' <img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/1.gif" style="border:0; margin:0; padding:0;" id="new" /> ')
d[i].innerHTML=d[i].innerHTML.replace(/:\(/gi,' <img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/2.gif" style="border:0; margin:0; padding:0;" id="new" /> ')
d[i].innerHTML=d[i].innerHTML.replace(/:x/gi,' <img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/8.gif" style="border:0; margin:0; padding:0;" id="new" /> ')
d[i].innerHTML=d[i].innerHTML.replace(/=\(\(/gi,' <img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/12.gif" style="border:0; margin:0; padding:0;" id="new" /> ')
d[i].innerHTML=d[i].innerHTML.replace(/:\-\o/gi,' <img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/13.gif" style="border:0; margin:0; padding:0;" id="new" /> ')
d[i].innerHTML=d[i].innerHTML.replace(/:-\//gi,' <img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/7.gif" style="border:0; margin:0; padding:0;" id="new" /> ') 
d[i].innerHTML=d[i].innerHTML.replace(/:-\*/gi,' <img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/11.gif" style="border:0; margin:0; padding:0;" id="new" /> ') 
d[i].innerHTML=d[i].innerHTML.replace(/:\|/gi,' <img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/22.gif" style="border:0; margin:0; padding:0;" id="new" /> ') 
d[i].innerHTML=d[i].innerHTML.replace(/8-\}/gi,' <img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/35.gif" style="border:0; margin:0; padding:0;" id="new" /> ') 
d[i].innerHTML=d[i].innerHTML.replace(/~x\(/gi,' <img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/102.gif" style="border:0; margin:0; padding:0;" id="new" /> ')
d[i].innerHTML=d[i].innerHTML.replace(/:-t/gi,' <img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/104.gif" style="border:0; margin:0; padding:0;" id="new" /> ')  
d[i].innerHTML=d[i].innerHTML.replace(/b-\(/gi,' <img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/66.gif" style="border:0; margin:0; padding:0;" id="new" /> ') 
d[i].innerHTML=d[i].innerHTML.replace(/:-\L/gi,' <img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/62.gif" style="border:0; margin:0; padding:0;" id="new" /> ') 
d[i].innerHTML=d[i].innerHTML.replace(/x\(/gi,' <img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/14.gif" style="border:0; margin:0; padding:0;" id="new" /> ') 
d[i].innerHTML=d[i].innerHTML.replace(/\=\)\)/ig,' <img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/24.gif" style="border:0; margin:0; padding:0;" id="new" /> ')
d[i].innerHTML=d[i].innerHTML.replace(/:.\(\(/ig,' <img src="http://www4.shoutmix.com/smileys/cry.gif" style="border:0; margin:0; padding:0;" id="new" /> ')
d[i].innerHTML=d[i].innerHTML.replace(/B-\)/ig,' <img src="http://www4.shoutmix.com/smileys/cool.gif" style="border:0; margin:0; padding:0;" id="new" /> ')
d[i].innerHTML=d[i].innerHTML.replace(/0:\:/ig, '<img src="http://www4.shoutmix.com/smileys/eek.gif" style="border:0; margin:0; padding:0;" id="new" /> ')
d[i].innerHTML=d[i].innerHTML.replace(/:v\)/gi,' <img src="http://www4.shoutmix.com/smileys/twisted.gif" style="border:0; margin:0; padding:0;" id="new" /> ')
d[i].innerHTML=d[i].innerHTML.replace(/OK\*/gi,' <img src="http://www4.shoutmix.com/smileys/thumbsup.gif" style="border:0; margin:0; padding:0;" id="new" /> ')
d[i].innerHTML=d[i].innerHTML.replace(/0\[\]/gi,' <img src="http://www4.shoutmix.com/smileys/banghead.gif" style="border:0; margin:0; padding:0;" id="new" /> ')
d[i].innerHTML=d[i].innerHTML.replace(/0"\*/gi,' <img src="http://www4.shoutmix.com/smileys/buttrock.gif" style="border:0; margin:0; padding:0;" id="new" /> ')
d[i].innerHTML=d[i].innerHTML.replace(/:b\:/gi,' <img src="http://www4.shoutmix.com/smileys/drool.gif" style="border:0; margin:0; padding:0;" id="new" /> ')
d[i].innerHTML=d[i].innerHTML.replace(/v0\^/gi,' <img src="http://www4.shoutmix.com/smileys/notworthy.gif" style="border:0; margin:0; padding:0;" id="new" /> ')
d[i].innerHTML=d[i].innerHTML.replace(/2;7/gi,' <img src="http://i302.photobucket.com/albums/nn111/boimlebon/coffee1.gif" style="border:0; margin:0; padding:0;" id="new" /> ')
}
}
function addLoadEvent(func){var oldonload=window.onload;if(typeof window.onload!="function"){window.onload=func}else{window.onload=function(){oldonload();func()}}}addLoadEvent(addSmiley);