$(function(){
	// header-bot
	$('.header-nav').hover(function(){
		$('.header-bot',this).show();
	},function(){
		$('.header-bot',this).hide();
	});
	// classify 分类导航
	$('.classify-item').hover(function(){
		$('.classify-pop',this).show();
	},function(){
		$('.classify-pop',this).hide();
	})
	// index banner
	let bg=document.querySelector('.banner-bg'),
		banner=document.querySelector('.banner'),
		imgs=document.querySelectorAll('.imgBox'),
		lis=document.querySelectorAll('.ddBox li'),
		color=['#FFEAF5','#F2C3E5','#2E38F6','#A350FC','#21A9FF','#6600FF'];
		
	var num=0,
	    t=setInterval(move,5000);

	function move(){
		num++;
		if(num==imgs.length){
			num=0;
		}
		for(var i=0;i<imgs.length;i++){
			imgs[i].style.opacity=0;
			imgs[i].style.zIndex=1;
			lis[i].className="";
			bg.style.background=color[i];
		}
		imgs[num].style.opacity=1;
		imgs[num].style.zIndex=222;
		lis[num].className='hot';
		bg.style.background=color[num];
	}

	for(var i=0;i<lis.length;i++){
		lis[i].index=i;
		lis[i].onmouseover=function(){
			for(var j=0;j<lis.length;j++){
				lis[j].className="";
				imgs[j].style.opacity=0;
				imgs[j].style.zIndex=1;
			}
			this.className="hot";
			imgs[this.index].style.opacity=1;
			imgs[this.index].style.zIndex=222;
			bg.style.background=color[this.index];
			num=this.index;
		}
	}
	banner.onmouseover=function(){
		clearInterval(t);
	}
	banner.onmouseout=function(){
		t=setInterval(move,5000);
	}

	// aside
	var bannerTop=$('.banner').offset().top;
		footerTop=$('footer').offset().top;
		floors=document.querySelectorAll('.layer');
    	asides=$('.aside-item');
    	colors=['#19C8A9','#EA5F8D','#0AA6E8','#64C333','#F15453','#F7A945','#FF0036'];
	$(window).scroll(function(){
		// aside 显示-隐藏
		if($(window).scrollTop()>bannerTop+360&&$(window).scrollTop()<footerTop-1000){
			$('aside').show();
		}else{
			$('aside').hide();
		}
		// 自适应 chrome FF
		var obj=document.body.scrollTop? document.body:document.documentElement;
        var scrolltop=obj.scrollTop;
        // console.log(scrolltop);
		// 对应楼层 aside have active
        floors.forEach(function(value,index){
        	if(scrolltop>=value.offsetTop-45){
        		for(var i=0;i<asides.length;i++){
        			// asides[i].classList.remove('active');
        			asides[i].style.background="";
        		}
        		// asides[index].classList.add('active');
        		asides[index].style.background=colors[index];
        	}
        })
        // aside 点击
        var arr=[];
        for(var i=0;i<floors.length;i++){
        	arr.push(floors[i].offsetTop);
        }
        for(var i=0;i<asides.length;i++){
        	asides[i].index=i;
        	asides[i].onclick=function(){
        		for(var j=0;j<asides.length;j++){
        			// asides[j].classList.remove('active');
        			asides[j].style.background="";
        		}
        		// this.classList.add('active');
        		animate(document.body,{scrollTop:arr[this.index]-45},200);
        		animate(document.documentElement,{scrollTop:arr[this.index]-45},200);
        	}
        }
	});
    // aside return-Top
	$('.aside-returnTop,.sidebar-return-top').click(function(){
        $('html,body').animate({scrollTop:0},300);
        return false;
    })
    // search-Top 显示-隐藏
    var interactTop=$('.interact').offset().top;
    $(function(){
        $(window).scroll(function(){
            if($(window).scrollTop()>=interactTop){
                $('.search-top').slideDown(100);
            }else{
                $('.search-top').slideUp(100);
            }
        })
    });











})