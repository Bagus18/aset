/* Sekrip mbuh
Golek nek kene kode liane http://www.charbase.com/block/emoticons
Tak gawe dewe https://bagus18.githu.io
*/
$(function(){var emoticon=[{simbol:':8',image:'\ud83d\ude0e'},{simbol:':haha',image:'\ud83d\ude02'},{simbol:':love',image:'\u2764\uFE0F'},{simbol:':hati',image:'\uD83D\uDC94'},{simbol:':hehe',image:'\uD83D\uDE03'},{simbol:':wek',image:'\uD83D\uDE1B'},{simbol:':week',image:'\uD83D\uDE1C'},{simbol:':huhu',image:'\uD83D\uDE12'},{simbol:':huuk',image:'\uD83D\uDE22'},{simbol:':hah',image:'\ud83d\ude20'},{simbol:':haah',image:'\ud83d\ude21'},{simbol:':hihi',image:'\uD83D\uDE09'},{simbol:':D',image:'\uD83D\uDE00'}];$.each(emoticon,function(i,item){$(".note").emoticonku(emoticon[i].simbol,emoticon[i].image)})});$.fn.emoticonku=function(simbol,image){var regex=new RegExp(simbol,"gi");return this.each(function(){this.innerHTML=this.innerHTML.replace(regex,function(cocok){return image})})};