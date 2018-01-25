var Input = React.createClass({
    getInitialState: function() {
        return { value: '' ,class: 'auto',initStyle:{}};
    },
    handleChange: function(event) {
    	var re = this.props.re || "";
    	if(!!re){
    		var v = event.target.value;
    		v = v.replace(/(^\s+)|(\s+$)/g,"");
    		re = new RegExp(re);
    		if(re.test(v)){
        		this.setState({ value: v, class:'auto success-border' });
    		}else{
        		this.setState({ value: v, class:'auto error-border' });
    		}
    	}else{
        	this.setState({ value: v});
    	}
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
        var v = this.state.value;
        var c = this.state.class;
        var is = this.state.initStyle;
        var t = this.props.type || "text";
        var p = this.props.placeholder || "";
        var n = this.props.name || "";
        var id = this.props.id || "";
        var l = this.props.labelName || "";
        var input = t == "textarea" ?
            < textarea style={is} onChange = {this.handleChange} placeholder = {p} name = {n} id = {id} className = {c} value = {v} ></textarea>
            :
            < input style={is} onChange = {this.handleChange} type = {t} placeholder = {p} name = {n} id = {id} className = {c} value = {v} />;
        return(<li className="clear"><label className="auto">{l}</label>{input}</li>);
    }
});

var Button = React.createClass({
    getInitialState: function() {
        return {class: 'btn',initStyle:{}};
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
        var t = this.props.type || "button";
        var id = this.props.id || "";
        var n = this.props.name || "按钮";
        return(<button type={t} id={id} className={c} style={is}>{n}</button>);
    }
});

var FormButton = React.createClass({
    getInitialState: function() {
        return {class: 'btn',initStyle:{}};
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
        return(
	        <li className="FormButton">
				<Button className="btn-success" type="submit" name="提交"/>
				<Button className="btn-danger" type="reset" name="重置"/>
	        </li>
        );
    }
});

var Form = React.createClass({
        getInitialState: function() {
            return {class:'Form',initStyle:{width:"450px"}};
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
        	var a = this.props.action || "";
        	var n = this.props.name || "";
        	var id = this.props.id || "";
        	var items = this.props.items || [];
        	var m = this.props.method || "get";
             return (
             <div className={c} style={is}> 
	             <form action={a} name={n} id={id} method={m}>
		             <ul>
		             	{items}
		             </ul>
	             </form>
             </div>
            );
    }
});
