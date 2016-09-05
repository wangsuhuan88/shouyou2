	function GetById(id){
		return document.getElementById(id);
	}
	function GetByClass(oParent, sClass)
	{
	 var aEle=oParent.getElementsByTagName('*');
	 var aResult=[];
	 var re=new RegExp('\\b'+sClass+'\\b', 'i');
	 var i=0;
	 
	 for(i=0;i<aEle.length;i++)
	 {
	 if(re.test(aEle[i].className))
	  {
	   aResult.push(aEle[i]);
	  }
	 }
	 
	 return aResult;
	}

	function each(id,func){
		var arrList=GetById(id).childNodes;
		for(var i=0,len=arrList.length ;i<len;i++)
			{			
				func(arrList[i],i);
			};
	}
	function siblings(elem) { 
	    var a = []; 
	    var b = elem.parentNode.children; 
	    for(var i=0;i<b.length;i++) { 
	        if(b[i] !== elem) a.push(b[i]); 
	    } 
	    return a; 
	}


var kaiFu=function(){};
kaiFu.prototype={	
	hoverFun:function(id,btnEleClass){
		each(id,function(a,b){
				a.n=b;
				if (a.tagName) {
					var ele=GetByClass(a,btnEleClass)[0];
					if (ele) {
						var obj=GetByClass(a,"dujia")[0];	
						if (obj) {
							ele.onmouseover=function(){				
								obj.style.display="block";							
							};
							ele.onmouseout=function(){
								obj.style.display="none";
							}
						};
					};

				};				
		})
	},
	libaoFun:function(id,btnEleClass){
		each(id,function(a,b){
				a.n=b;
				if (a.tagName) {
					var ele=GetByClass(a,btnEleClass)[0];
					if (ele) {
						var obj=GetByClass(a,"dujia")[0];
						var popObj=GetById("popbg");
						var height=document.body.offsetHeight;
						if (obj) {
							//点击礼包，显示
							ele.onclick=function(){				
								obj.style.display="block";	
								popObj.style.display="block";
								popObj.style.height=height+"px";				
							}
							kaiFu.closeFun(obj);
						};
					};

				};				
		});
	},
	closeFun:function(obj){
		//点击关闭 关闭按钮
		var popObj=GetById("popbg");
		var closeO=GetByClass(obj,"btnclose2")[0];
		if (closeO) {
			closeO.onclick=function(){
				obj.style.display="none";	
				popObj.style.display="none";
			}
		}
		//x号关闭
		var closeO2=GetByClass(obj,"btnclose")[0];
		if (closeO2) {
			closeO2.onclick=function(){
				obj.style.display="none";	
				popObj.style.display="none";
			}
		};
											
	},
	popBox:function(){
		var height=document.body.offsetHeight;
		var popbg=GetById("popbg");
		var popbox=GetById("popbox");
		var btnClose=GetById("btnClose");

		var oParent=GetById("lblist");
		each("lblist",function(a,b){
			a.n=b;
			if (a.tagName) {
				var ele=GetByClass(a,"linghao")[0];
				if (ele) {
					ele.onclick=function(){
						popbox.style.display="block";
						popbg.style.height=height+"px";
						popbg.style.display="block";
					}
					kaiFu.closeFun(popbox);
				};
			};
		});
			
	},
	picScroll:function(){
		var obj=GetById("piclist");//移动元素
		var length=obj.getElementsByTagName("LI").length;//子元素个数
		var unit=286+60;//单位移动距离
		var total_width=length*unit;
		var oleft=GetById("bleft");//左按钮
		var oright=GetById("bright");//右按钮

		//按钮的显示、隐藏
		function isShowBtn(){
			/*if (tick==0) {
				oleft.style.display="none";
				oright.style.display="block";
			}
			else
			{
				if (tick>length-2) {
					oleft.style.display="block";
					oright.style.display="none";
				}else
				{
					oleft.style.display="block";
					oright.style.display="block";
				}
			}
			console.log(tick);	*/		
		}
		var tick=0;
		//点击事件
		oleft.onclick=function(){
			if (tick==0) {
				tick=length-2;
			}else
			{
				tick--;
			}
			//obj.style.left=(-tick*unit)+"px";
			kaiFu.startMove(obj,{left:(-tick*unit)});
			isShowBtn();
		}
		oright.onclick=function(){
			if (tick>length-2) {
				tick=0;

			}else
			{
				tick++;
			}
			
			//obj.style.left=(-tick*unit)+"px";
			kaiFu.startMove(obj,{left:(-tick*unit)});
			isShowBtn();
		}

	},
	startMove:function(obj,json,fn){
		function getStyle(obj, attr) {
	      if (obj.currentStyle) {
	        return obj.currentStyle[attr];
	      } else {
	        return getComputedStyle(obj, false)[attr];
	      }
	    }
		clearInterval(obj.iTimer);
		var iCur=0;
		var iSpeed=0;
		obj.iTimer=setInterval(function(){
			var iBtn=true;
			for (var attr in json) {
				if (attr == 'opacity') {
            		iCur = Math.round(getStyle(obj, 'opacity') * 100);
          		}else {
            		iCur = parseInt(getStyle(obj, attr));
          		}
          		iSpeed = (json[attr] - iCur) / 5;
          		iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
          		 if (iCur != json[attr]) {
		            iBtn = false;
		            if (attr == 'opacity') {
		              obj.style.opacity = (iCur + iSpeed) / 100;
		              obj.style.filter = 'alpha(opacity='+(iCur + iSpeed)+')';
		            } else {
		              obj.style[attr] = iCur + iSpeed + 'px';
		            }
		         }
			};
			if (iBtn) {
	          clearInterval(obj.iTimer);
	          fn && fn.call(obj);
        	}
		},30);
	},
	zkFun:function(id){
		var btn=GetById("showM");
		btn.onclick=function(){
			var obj=GetById(id);
			var height=parseInt(obj.style.height);
			obj.style.height="100%";
			if (height==120) {
				obj.style.height="100%";
				this.innerHTML="闭合+";
			}else
			{
				obj.style.height="120px";
				this.innerHTML="展开+";
			}
		}
	},
	itemHover:function(oParentId,sClass){	
		each(oParentId,function(a,b){
			if (a.tagName) {
				var ele=GetByClass(a,"syb-item-1")[0];
				var ele2=GetByClass(a,"syb-item-2")[0];
				a.n=b;
				a.onmouseover=function(){				
					a.className="sybitem syhover";
					var sibNodes=siblings(a);
					for (var i in sibNodes) {
						sibNodes[i].className="sybitem";
					};
				}
				
			};
		});	
		
	}
}

