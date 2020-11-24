import React, {Component} from 'react';
export default class Create extends Component {

    constructor(props){
        super(props);
        this.onChangePersonName=this.onChangePersonName.bind(this);
        this.onChangeBusinessName=this.onChangeBusinessName.bind(this);
        this.onChangeNIC=this.onChangeNIC.bind(this);
        this.onChangeAddress=this.nChangeAddress.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

        this.state = {
            person_Name = '',
            business_name = '',
            business_NIC = '',
            business_address = '',
        }
    }
    onChangePersonName(e){
        this.setState({
            person_Name: e.target.value
        });
    }
    onChangeBusinessName(e){
        this.setState({
            business_name: e.target.value
        });
    }
    onChangeAddress(e){
        this.setState({
            business_address: e.target.value
        });
    }
    onChangeNIC(e){
        this.setState({
            business_NIC: e.target.value
        });
    }
    onSubmit(e){
        e.preventdefault();
        console.log(`The values are ${this.state.person_Name},${this.state.business_name},${this.state.business_NIC},and ${this.state.usiness_address}`)
        this.setState({
            person_Name:'',
            business_name:'',
            business_address:'',
            business_NIC:'',
        })
    }



    render(){
        return(
            <div style={{marginTop:10}}>
                <h3>Add New Business</h3>
                <form>
                    <div className='form-group'>
                        <label>Add Person Name :</label>
                        <input type='text' className='form-control'> </input>
                    </div>
                    <div className='form-group'>
                        <label>Add Business Name :</label>
                        <input type='text' className='form-control'> </input>
                    </div>
                    <div className='form-group'>
                        <label>Add NIC Number :</label>
                        <input type='text' className='form-control'> </input>
                    </div>
                    <div className='form-group'>
                        <label>Add Address :</label>
                        <input type='text' className='form-control'> </input>
                    </div>
                    <div className='form-group'>
                        <input type='Submit' value='Register business' className='btn btn-primary'></input>
                    </div>
                </form>
            </div>
        )
    }
}