var items = [
<Input type="text" labelName="姓名" name="name" id="name" placeholder="请输入名字" re="^[a-zA-Z0-9]{6,18}$"/>,
<Input type="text" labelName="地址" name="addr" id="addr" placeholder="请输入地址" re="^[\S]{1,}$"/>,
<Input type="password" labelName="密码" name="pwd" id="pwd" placeholder="请输入密码" re="^[a-zA-Z0-9]{6,18}$"/>,
<Input type="textarea" labelName="个人信息" name="info" id="info" placeholder="请输入个人信息" re=""/>,
<FormButton/>
];
//<Form items={items} action="http://127.0.0.1:8888/" name="form1"/>
ReactDOM.render(
		<Form items={items} name="form1" id="myForm"/>
    ,
    document.getElementById('app')
);

//ajax提交form表单的方式
$('#myForm button[type=submit]').click(function(e) {
	e.preventDefault(); 
    var AjaxURL= "http://127.0.0.1:8888/";       
    console.log($('#myForm').serialize());
        $.ajax({
            type: "GET",
            dataType: "json",
            url: AjaxURL,
            data: $('#myForm').serialize(),
            success: function (data) {
                console.log(data);
                $("body").append("<h2>"+JSON.stringify(data)+"</h2>");
                alert('注册成功！');
            },
            error: function(data) {
                console.log(data);
                alert("error:"+data.responseText);
             }
        });
}
);