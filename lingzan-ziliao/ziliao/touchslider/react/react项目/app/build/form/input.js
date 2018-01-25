var Input = React.createClass({displayName: "Input",
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
        var input = t == "textarea" ? React.createElement("textarea", {style: is, onChange: this.handleChange, placeholder: p, name: n, id: id, className: c, value: v}) : React.createElement("input", {style: is, onChange: this.handleChange, type: t, placeholder: p, name: n, id: id, className: c, value: v});
        return(React.createElement("li", {className: "clear"}, React.createElement("label", {className: "auto"}, l), input));
    }
});

var Button = React.createClass({displayName: "Button",
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
        return(React.createElement("button", {type: t, id: id, className: c, style: is}, n));
    }
});

var FormButton = React.createClass({displayName: "FormButton",
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
	        React.createElement("li", {className: "FormButton"}, 
				React.createElement(Button, {className: "btn-success", type: "submit", name: "提交"}), 
				React.createElement(Button, {className: "btn-danger", type: "reset", name: "重置"})
	        )
        );
    }
});

var Form = React.createClass({displayName: "Form",
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
             React.createElement("div", {className: c, style: is}, 
	             React.createElement("form", {action: a, name: n, id: id, method: m}, 
		             React.createElement("ul", null, 
		             	items
		             )
	             )
             )
            );
    }
});
