(function(){

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
var hoverObj={
	hoverFun:function(id){
		each(id,function(a,b){
				a.n=b;
				if (a.tagName) {
					var ele=GetByClass(a,"lb")[0];					
					if (ele) {
						var obj=GetByClass(a,"dujia")[0];
						if (obj) {
							ele.onmouseover=function(){
								console.log(1);						
								obj.style.display="block";							
							};
							ele.onmouseout=function(){
								obj.style.display="none";
							}
						};
					};

				};				
		})
	}
}

new hoverObj.hoverFun("nowlist");
new hoverObj.hoverFun("bgitem");
new hoverObj.hoverFun("enditem");



})();