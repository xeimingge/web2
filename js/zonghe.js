// 顶部悬浮
//回到顶部
var BackTop = document.getElementById("BackTop");
var top1 = document.getElementById("top1");
top1.style.position = "absolute";
top1.style.top ="0px";
window.onscroll = function(){
    var _scroll = document.body.scrollTop || document.documentElement.scrollTop;
    if(_scroll > 0){
        BackTop.style.display = "inline-block";
        top1.style.position = "fixed";
        top1.style.top ="0px";
    } else {
        BackTop.style.display = "none";
        top1.style.position = "absolute";
    }
}
//确认是否回到顶部
BackTop.onclick=function goTop(){
    var judge1 = window.confirm("你确定要返回顶部？");
    if (judge1==true){ 
        document.documentElement.scrollTop = document.body.scrollTop = 0;
    }else{ 
        return false; 
    } 

}

// 自动滚动欢迎
var welcome = document.getElementById("welcome");
welcome.style.marginLeft = "0";
var intervalId = setInterval(function(){
    var marginLeft = parseInt(welcome.style.marginLeft);
    if(marginLeft == document.body.clientWidth){
        welcome.style.marginLeft = "-400px";
    }else{
        welcome.style.marginLeft = (marginLeft + 1)+"px";
    }
},1)

//图片自动切换
var i=1;
var picture = document.getElementById("picture")
var intervalImg = setInterval(function(){
    i++;
    i=i%4;
    picture.src =  "../img/轮播/"+i+".jpg" ;
    
},5000)
//点击图片强制切换
var pictureNumber = document.getElementsByClassName("SmallPicture");
pictureNumber[0].onclick = function(){
    i=0+1;
    picture.src =  "../img/轮播/"+i+".jpg" ;
}
pictureNumber[1].onclick = function(){
    i=1+1;
    picture.src =  "../img/轮播/"+i+".jpg" ;
}
pictureNumber[2].onclick = function(){
    i=2+1;
    picture.src =  "../img/轮播/"+i+".jpg" ;
}
pictureNumber[3].onclick = function(){
    i=0;
    picture.src =  "../img/轮播/"+i+".jpg" ;
}

// 登陆
var closeLand = document.getElementById("closeLand");
var inLand = document.getElementById("inLand");
var land = document.getElementById("land");
var textname = document.getElementById("textname");
var pass = document.getElementById("pass")
var blank = document.getElementById("blank")
var landbtn = document.getElementById("landbtn");
var nowname = document.getElementById("nowname");
var textname1;
inLand.onclick = function(){
    var n = (document.body.clientWidth-300)/2 +"px";
    land.style.display = "block";
    land.style.position = "fixed";
    land.style.top = "150px";
    land.style.right = n;
}
//关闭登陆页面
closeLand.onclick = function(){
    land.style.display = "none";
    pass.value =null;
    textname.value =null;
    blank.innerHTML = "";
    blank2.innerHTML = "";
}
//用户名
textname.onfocus = function(){
    blank.innerHTML = "支持中文数字符号";
    blank.style.color= "green";  
}
textname.onblur = function(){
    if(textname.value == ""){
        blank.innerHTML = "用户名不能为空";
        blank.style.color= "red";          
    }else{       
        blank.innerHTML = "";
        textname1=textname.value;
    }

}
//密码框
pass.onfocus = function(){
    blank2.innerHTML = "建议使用两种字符组合";
    blank2.style.color= "green";  
}
pass.onblur = function(){
    if(pass.value == ""){
        blank2.innerHTML = "密码不能为空";
        blank2.style.color= "red";            
    }else{
        blank2.innerHTML = "";
    }
}
//登陆成功
landbtn.onclick = function(){
    if(pass.value == ""||textname.value == ""){
        alert("登陆失败，请重新登录！")
    }else{
        alert("恭喜您，登录成功！")
        land.style.display = "none";
        NowName = textname1.substring(0,3)+"~~~";
        nowname.innerHTML=NowName;
        pass.value =null;
        textname.value =null;
    }
}