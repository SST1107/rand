window.onload=function(){
    //document.write("Hello JavaScript");
    $(function(){
        $("input").on("click",function(){
            //alert("Hi");
            //debugger;    //開發人員工具(ctrl+shift+I)
            //$("h1").text("Hello");
            //$("h1").text($("li:first").text());
            //$("h1").text($("li:last").text());
            //$("h1").text($("li").eq(1).text());  //由0開始
            var numberOfListItem=$("li").length;
            var randChildNumber=Math.floor(Math.random()*numberOfListItem);//Math.random=0~1
            $("h1").text($("li").eq(randChildNumber).text());
        });
    });
};