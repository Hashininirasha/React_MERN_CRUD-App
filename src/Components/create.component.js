import React, {Component} from 'react';
export default class Create extends Component {

    constructor(props){
        super(props);
        this.onChangePersonName=this.onChangePersonName.bind(this);
        this.onChangeBusinessName=this.onChangeBusinessName.bind(this);
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