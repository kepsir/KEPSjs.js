$(document).ready(function() {
$('.rsidebar .widget').filter(function () {
var sblank = $(this).children('h2').length;
    if(sblank == false) { 
$(this).addClass('sblank');
}
  else {
$(this).addClass('noblank');  
}
});
});

// Posts By Labels
function labelthumbs(w){document.write('<ul id="label_with_thumbs">');for(var v=0;v<numposts;v++){var f=w.feed.entry[v];var g=f.title.$t;var z;if(v==w.feed.entry.length){break}for(var r=0;r<f.link.length;r++){if(f.link[r].rel=="replies"&&f.link[r].type=="text/html"){var n=f.link[r].title;var o=f.link[r].href}if(f.link[r].rel=="alternate"){z=f.link[r].href;break}}var j;try{j=f.media$thumbnail.url}catch(q){s=f.content.$t;a=s.indexOf("<img");b=s.indexOf('src="',a);c=s.indexOf('"',b+5);d=s.substr(b+5,c-b-5);if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")){j=d}else{j="http://3.bp.blogspot.com/-zP87C2q9yog/UVopoHY30SI/AAAAAAAAE5k/AIyPvrpGLn8/s1600/picture_not_available.png"}}var x=f.published.$t;var m=x.substring(0,19);var h=new Array();h[1]="01";h[2]="02";h[3]="03";h[4]="04";h[5]="05";h[6]="06";h[7]="07";h[8]="08";h[9]="09";h[10]="10";h[11]="11";h[12]="12";document.write('<li class="latestpost">');if(showpostthumbnails==true){document.write('<a class="postthumb" href="'+z+'" target ="_top"><img class="label_thumb" src="'+j+'"/></a>')}document.write('<div class="allsum"><div class="posttitle"><a href="'+z+'" target ="_top">'+g+'</a></div><div class="postsummary">');if("content" in f){var y=f.content.$t}else{if("summary" in f){var y=f.summary.$t}else{var y=""}}var p=/<\S[^>]*>/g;y=y.replace(p,"");var A="";var u=0;if(showpostdate==true){A=A+m;u=1}document.write(A);document.write("</div></li>");}document.write("</ul>")};
