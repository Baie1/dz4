import React from "react";


class Reservation extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            nuberOfGuests: 2,

        }
        this.handleInputChange =this.handleInputChange.bind(this);

    }
}

handleInputChange(event) {
    const target =event.target;
    const value = target.type === "Checkbox" ? target.checked : target.value;
    const name = event.name; 

    this.setState({
        [name]: value
    });

    render(){
        return(
           <form>
            <label>
                Ваш возраст:
                <inpur 
                name="isGoing"
                type="checkbox"
                checked={this.state.isGoing}
                onChange={this.handleInputChange} />
            </label>
            <br/>
            <label>
                Ваши данные:
                <inpur 
                name="numberOfGuests"
                type="checkbox"
                checked={this.state.isGoing}
                onChange={this.handleInputChange} />
            </label>
           </form> 
        )
    }
    
}


export default NameForm;












// class NameForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {value: "Токмок"};

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
  
    
//     handleChange(event) {
//         this.setState({value: event.target.value});

//     }
//     handleSubmit(event) {
//         alert("Ваш любимый город:" + this.state.value);
//         event.preventDefault();
//     }

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <lable>
//                     Ваш любимый город:
//                     <textarea value={this.state.value} onChange={this.handleChange} />
//                     <input type="text" value={this.state.value} onChange={this.handleChange} />
//                 </lable>
//                 <input type= "submit" value="отправить"/>
//                 <select>
//                     <option value="bishkek">Бишкек</option>
//                     <option value="Tokmok">Токмок</option>
//                     <option value="Kant">Кант</option>
//                     <option value="Cholpon-Ata">Чолпон-Ата</option>
//                 </select>
//             </form>
//         )
//     }
// }
