
var City = React.createClass({
    getInitialState: function() {
        return {class: 'city',initStyle:{}};
    },
    componentDidMount: function(){
    	var is = this.state.initStyle;
    	var iS = this.props.initStyle || {};
    	this.setState({initStyle:$.extend(is,iS)});
    	var ic = this.state.class;
    	var iC = this.props.className || "";
    	if(!!iC){
    		this.setState({class:ic+" "+iC});
    	}
	},
    render: function() {
        var c = this.state.class;
        var is = this.state.initStyle;
        var h = this.props.href || "javascript:;";
        var id = this.props.id || "";
        var n = this.props.name || "选择城市";
        return(<a href={h} id={id} className={c} style={is}>{n}</a>);
    }
});

var Search = React.createClass({
    getInitialState: function() {
        return {class: 'search item',initStyle:{}};
    },
    componentDidMount: function(){
        var is = this.state.initStyle;
        var iS = this.props.initStyle || {};
        this.setState({initStyle:$.extend(is,iS)});
        var ic = this.state.class;
        var iC = this.props.className || "";
        if(!!iC){
            this.setState({class:ic+" "+iC});
        }
    },
    render: function() {
        var c = this.state.class;
        var is = this.state.initStyle;
        var id = this.props.id || "";
        var n = this.props.name || "输入商户名、地址";
        return(<div id={id} className={c} style={is}>{n}</div>);
    }
});

var Self = React.createClass({
    getInitialState: function() {
        return {class: 'self',initStyle:{}};
    },
    componentDidMount: function(){
        var is = this.state.initStyle;
        var iS = this.props.initStyle || {};
        this.setState({initStyle:$.extend(is,iS)});
        var ic = this.state.class;
        var iC = this.props.className || "";
        if(!!iC){
            this.setState({class:ic+" "+iC});
        }
    },
    render: function() {
        var c = this.state.class;
        var is = this.state.initStyle;
        var h = this.props.href || "javascript:;";
        var id = this.props.id || "";
        var n = this.props.name || "";
        return(<a href={h} id={id} className={c} style={is}>{n}</a>);
    }
});

var Header = React.createClass({
    getInitialState: function() {
        return {class: 'box',initStyle:{}};
    },
    componentDidMount: function(){
        var is = this.state.initStyle;
        var iS = this.props.initStyle || {};
        this.setState({initStyle:$.extend(is,iS)});
        var ic = this.state.class;
        var iC = this.props.className || "";
        if(!!iC){
            this.setState({class:ic+" "+iC});
        }
    },
    render: function() {
        var c = this.state.class;
        var is = this.state.initStyle;
        return(
            <header className={c} style={is}>
                <City href="#" name="上海"/>
                <Search/>
                <Self href="#"/>
            </header>
        );
    }
});

var CategoryLiA = React.createClass({
    getInitialState: function() {
        return {class: '',initStyle:{}, _src:"images/blank.png"};
    },
    componentDidMount: function(){
        var is = this.state.initStyle;
        var iS = this.props.initStyle || {};
        this.setState({initStyle:$.extend(is,iS)});
        var ic = this.state.class;
        var iC = this.props.className || "";
        if(!!iC){
            this.setState({class:ic+" "+iC});
        }
        var s = this.props.src;
        if(!!s){
            this.setState({src: s});
        }

    },
    render: function() {
        var c = this.state.class;
        var is = this.state.initStyle;
        var s = this.state.src;
        var h = this.props.href || "javascript:;";
        var id = this.props.id || "";
        var n = this.props.name || "";
        var _s = this.props._src || "";
        return(<a href={h} id={id} className={c} style={is}><img _src={_s} src={s} /><br></br>{n}</a>);
    }
});

var CategoryLi = React.createClass({
    getInitialState: function() {
        return {class: '',initStyle:{}, arr:[]};
    },
    componentDidMount: function(){
        var is = this.state.initStyle;
        var iS = this.props.initStyle || {};
        this.setState({initStyle:$.extend(is,iS)});
        var ic = this.state.class;
        var iC = this.props.className || "";
        if(!!iC){
            this.setState({class:ic+" "+iC});
        }

        var a = this.props.arr || [];
        var arr = [];
        for (var i = 0; i < a.length; i++) {
            var h = a[i].href;
            var _s = a[i]._src;
            var s = a[i].src;
            var n = a[i].name;
            arr.push(<CategoryLiA href={h} _src={_s} src={s} name={n}/>);
        }
        this.setState({arr:arr});
    },
    render: function() {
        var c = this.state.class;
        var is = this.state.initStyle;
        var a = this.state.arr;
        return(
            <li className={c} style={is}>
                <div className="group">{a}</div>
            </li>
        );
    }
});

var Category = React.createClass({
    getInitialState: function() {
        return {class: 'category',initStyle:{},arr:[]};
    },
    componentDidMount: function(){
        var is = this.state.initStyle;
        var iS = this.props.initStyle || {};
        this.setState({initStyle:$.extend(is,iS)});
        var ic = this.state.class;
        var iC = this.props.className || "";
        if(!!iC){
            this.setState({class:ic+" "+iC});
        }
        //ajax
        var data = [
            [
                {href:"#", src:"images/ms.png", _src:"images/blank.png",name:"美食"},
                {href:"#", src:"images/dy.png", _src:"images/blank.png",name:"电影"},
                {href:"#", src:"images/jd.png", _src:"images/blank.png",name:"酒店"},
                {href:"#", src:"images/xxyl.png", _src:"images/blank.png",name:"休闲娱乐"},
                {href:"#", src:"images/wm.png", _src:"images/blank.png",name:"外卖"},
                {href:"#", src:"images/hg.png", _src:"images/blank.png",name:"火锅"},
                {href:"#", src:"images/lr.png", _src:"images/blank.png",name:"丽人"},
                {href:"#", src:"images/zby.png", _src:"images/blank.png",name:"周边游"},
                {href:"#", src:"images/ktv.png", _src:"images/blank.png",name:"KTV"},
                {href:"#", src:"images/shfw.png", _src:"images/blank.png",name:"生活服务"}
            ],[
                {href:"#", src:"images/jg.png", _src:"images/blank.png",name:"景点"},
                {href:"#", src:"images/ac.png", _src:"images/blank.png",name:"爱车"},
                {href:"#", src:"images/yc.png", _src:"images/blank.png",name:"演出"},
                {href:"#", src:"images/jh.png", _src:"images/blank.png",name:"结婚"},
                {href:"#", src:"images/js.png", _src:"images/blank.png",name:"运动健身"},
                {href:"#", src:"images/igw.png", _src:"images/blank.png",name:"购物"},
                {href:"#", src:"images/qz.png", _src:"images/blank.png",name:"亲子"},
                {href:"#", src:"images/jz.png", _src:"images/blank.png",name:"家装"},
                {href:"#", src:"images/xxpx.png", _src:"images/blank.png",name:"学习培训"},
                {href:"#", src:"images/dj.png", _src:"images/blank.png",name:"度假套餐"}
            ],[
                {href:"#", src:"images/yl.png", _src:"images/blank.png",name:"医疗健康"},
                {href:"#", src:"images/jpg.png", _src:"images/blank.png",name:"精品购"},
                {href:"#", src:"images/hj.png", _src:"images/blank.png",name:"行家"},
                {href:"#", src:"images/dj.png", _src:"images/blank.png",name:"到家"},
                {href:"#", src:"images/xwc.png", _src:"images/blank.png",name:"下午茶"},
                {href:"#", src:"images/xckc.png", _src:"images/blank.png",name:"小吃快餐"},
                {href:"#", src:"images/zzc.png", _src:"images/blank.png",name:"自助餐"},
                {href:"#", src:"images/rhll.png", _src:"images/blank.png",name:"日本菜"},
                {href:"#", src:"images/mf.png", _src:"images/blank.png",name:"美发"},
                {href:"#", src:"images/more.png", _src:"images/blank.png",name:"全部分类"}
            ]
        ];

        var arr = this.state.arr;
        for (var i = 0; i < data.length; i++) {
            var li = data[i];
            arr.push(<CategoryLi arr={li}/>);
        }
    },
    render: function() {
        var c = this.state.class;
        var is = this.state.initStyle;
        var a = this.state.arr;
        return(
            <div className="category" id="content">
                <div id="focus" className="focus">
                    <div className="hd">
                        <ul></ul>
                    </div>
                    <div className="bd">
                        <ul>{a}</ul>
                    </div>
                </div>
            </div>
        );
    }
});
