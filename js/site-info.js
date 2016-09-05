$('.fun-box').click(function(event) {
	var $this = $(this);
	$.ajax({
		url:'http://newgame.bj.test.shouyou.com/site-voteopa',
		data:{
			'action': 1,
			'game_code': info_params.webid,
			'support': 1,
			'oppose': 0
       },
	   cache:false,
	   success: function(data){
			if (data.flag == true) {
				$('<div class="support-plus1">+1</div>')
					.appendTo($('.fun-box'))
					.css('opacity',0)
					.animate({'opacity':1, 'top':'-20px'}, 500, 'swing')
					.animate({'opacity':0, 'top':'-35px'}, 500, 'swing', function(){$(this).remove()});
				$('.fun-box .hw').text(parseInt($('.fun-box .hw').text()) + 1);
			} else if (data.flag == 'voted') {
				alert('\u60a8\u5df2\u7ecf\u6295\u7968\u8fc7\u4e86\uff01');
			} else {
				alert('\u6295\u7968\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\uff01');
			}
	   }
	})
})

$('.no-fun-box').click(function(event) {
	var $this = $(this);
	$.ajax({
		url:'site-voteopa',
		data:{
			'action': 1,
			'game_code': info_params.webid,
			'support': 0,
			'oppose': 1
       },
	   cache:false,
	   success: function(data){
			if (data.flag == true) {
				$('<div class="oppose-plus1">+1</div>')
					.appendTo($('.no-fun-box'))
					.css('opacity',0)
					.animate({'opacity':1, 'top':'-20px'}, 500, 'swing')
					.animate({'opacity':0, 'top':'-35px'}, 500, 'swing', function(){$(this).remove()});
				$('.no-fun-box .bhw').text(parseInt($('.no-fun-box .bhw').text()) + 1);
			} else if (data.flag == 'voted') {
				alert('\u60a8\u5df2\u7ecf\u6295\u7968\u8fc7\u4e86\uff01');
			} else {
				alert('\u6295\u7968\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\uff01');
			}
	   }
	})
})


$('#download1').live('click',
    function() {
        var o = this,
			gameCode = info_params.webid != undefined ? info_params.webid : info_params.game_code;
        $.ajax({
            type: "POST",
            url: '/site-StatDownCount',
            data: {
				game_code: gameCode,
				platform_id: info_params.info_platform,
				company_id: info_params.info_company,
				info_compatible: info_params.info_compatible,
				version_id: info_params.info_version
			},
            success: function(data) {}
        });
    });

//back to top
var $backToTopEle = $('<div class="back-to-top png"><a href="#"></a></div>').appendTo($("body")).click(function() {
		$("html, body").animate({ scrollTop: 0 }, 120);
}), $backToTopFun = function() {
	var st = $(document).scrollTop(), winh = $(window).height();
	(st > 0)? $backToTopEle.show(): $backToTopEle.hide();
	//IE6\u4e0b\u7684\u5b9a\u4f4d
	if (!window.XMLHttpRequest) {
		$backToTopEle.css("top", st + winh - 385);
	}
};
$(window).bind("scroll", $backToTopFun);



var __title = encodeURIComponent(document.title),
__url = encodeURIComponent(window.location),
__pic = '';
$('.js-share').append('<a href="http://t.sohu.com/third/post.jsp?&url=' + __url + '&title=' + __title + '&content=utf-8&pic=' + __pic + '" target="_blank" class="share-1" title="\u5206\u4eab\u81f3\u641c\u72d0\u5fae\u535a"></a><a  href="javascript:void(0);" onclick="window.open(\'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=' + __url + '\');return false;" title="\u5206\u4eab\u5230QQ\u7a7a\u95f4" class="share-2"></a><a href="http://v.t.sina.com.cn/share/share.php?appkey=2038131490&url=' + __url + '&title=' + __title + '&ralateUid=&source=17173%E6%B8%B8%E6%88%8F%E8%A7%86%E9%A2%91%E4%B8%AD%E5%BF%83&sourceUrl=http%3A%2F%2www.shouyou.com%2F&content=utf8&pic=' + __pic + '" target="_blank" class="share-3" title="\u5206\u4eab\u81f3\u65b0\u6d6a\u5fae\u535a"></a><a href="http://v.t.qq.com/share/share.php?title=' + __title + '&url=' + __url + '&appkey=aabc356f13fc4fbea85e8d59f7cd9dd1&site=www.shouyou.com&pic=' + __pic + '" target="_blank" title="\u5206\u4eab\u81f3\u817e\u8baf\u5fae\u535a" class="share-4"></a><a href="http://www.kaixin001.com/repaste/share.php?rtitle=' + __title + '&rurl=' + __url + '&rcontent=" target="_blank" title="\u5206\u4eab\u5230\u5f00\u5fc3\u7f51" class="share-5"></a>').append("<a href=\"javascript:void((function(s,d,e){if(/renren\.com/.test(d.location))return;var f='http://share.renren.com/share/buttonshare?link=',u=d.location,l=d.title,p=[e(u),'&title=',e(l)].join('');function%20a(){if(!window.open([f,p].join(''),'xnshare',['toolbar=0,status=0,resizable=1,width=626,height=436,left=',(s.width-626)/2,',top=',(s.height-436)/2].join('')))u.href=[f,p].join('');};if(/Firefox/.test(navigator.userAgent))setTimeout(a,0);else%20a();})(screen,document,encodeURIComponent));\" title=\"\u5206\u4eab\u5230\u4eba\u4eba\" class=\"share-6\"></a><a  href=\"javascript:void(((function(s,d,e){var f='http://bai.sohu.com/share/blank/addbutton.do?link=',u=d.location,l=d.title,p=[e(u),'&amp;title=',e(l)].join('');function a(){if(!window.open([f,p].join(''),'sohushare',['toolbar=0,status=0,resizable=1,width=480,height=340,left=',(s.width-480)/2,',top=',(s.height-340)/2].join('')))u.href=[f,p].join('');};if(/Firefox/.test(navigator.userAgent))setTimeout(a,0);else a();})(screen,document,encodeURIComponent)))\"  title=\"\u5206\u4eab\u81f3\u641c\u72d0\u767d\u793e\u4f1a\" class=\"share-7\"></a>");