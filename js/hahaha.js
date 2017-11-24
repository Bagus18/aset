$(function() {
var emoticon =  [
			{simbol:':-)', image:'<img src="https://cdnjs.cloudflare.com/ajax/libs/emojione/2.1.0/assets/svg/1f60a.svg" class="ha3"/>'}, 
			{simbol:':D', image:'<img src="https://cdnjs.cloudflare.com/ajax/libs/emojione/2.1.0/assets/svg/1f600.svg" class="ha3"/>'}
				];	
    $.each(emoticon, function(i, item) {
        $(".note").emoticonku(emoticon[i].simbol, emoticon[i].image);
    });
});

$.fn.emoticonku = function(simbol, image) {
    var regex = new RegExp(simbol, "gi");
    return this.each(function() {
        this.innerHTML = this.innerHTML.replace(regex, function(cocok) {
            return image;
        });
    });
};