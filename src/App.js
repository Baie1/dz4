// import React from "react";

// class NameForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {value: "напишите про свой любимый DOM элемент "};

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
  
    
//     handleChange(event) {
//         this.setState({value: event.target.value});

//     }
//     handleSubmit(event) {
//         alert("отправленное имя:" + this.state.value);
//         event.preventDefault();
//     }

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <lable>
//                     Эссе:
//                     <textarea value={this.state.value} onChange={this.handleChange} />
//                     <input type="text" value={this.state.value} onChange={this.handleChange} />
//                 </lable>
//                 <input type= "submit" value="отправить"/>
//             </form>
//         )
//     }
// }

// export default NameForm;
