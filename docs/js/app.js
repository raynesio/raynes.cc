function showMenu(){var e=document.getElementById("nav");"none"===e.style.display?e.style.display="block":e.style.display="none"}$(document).ready(function(){$(".fade").hide(0).delay(0).fadeIn(5e3);var e=window.location.pathname;$('#menu > li > a[href="'+e+'"]').parent().addClass("active");var a=(new Date).getFullYear();$(".copyright").text(a);var t=document.getElementById("age");if(t){var n=new Date("09/20/1991 06:00 AM");setInterval(function(){var e=((new Date).getTime()-n.getTime())/31556926e3;t.innerHTML=e.toFixed(9)},1)}new Instafeed({get:"user",userId:"6345390265",clientId:"d73bac66c11c45ac8bf4f44ccc5521df",target:"instafeed",accessToken:"6345390265.d73bac6.773341d5cfcc498e9e4e30f9d3f6a1bd",resolution:"standard_resolution",sortBy:"most-recent",limit:18,template:'<div class="instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>'}).run();$.ajax({url:"https://api.instagram.com/v1/users/self",dataType:"jsonp",type:"GET",data:{access_token:"6345390265.1677ed0.bd6241dd10504c7e9c901d5c2e1fec2c"},success:function(e){var a=e.data.counts.media,t=e.data.counts.follows,n=e.data.counts.followed_by,i=e.data.bio,c=e.data.username;e.data.profile_picture;$(".posts").text(a),$(".following").text(t),$(".followers").text(n),$(".bio").text(i),$(".username").text(c),$(".profile_picture").append("<img class=me src='"+e.data.profile_picture+"' />")},error:function(e){console.log(e)}}),$(".gallery").magnificPopup({type:"image",delegate:"a",gallery:{enabled:!0}})});