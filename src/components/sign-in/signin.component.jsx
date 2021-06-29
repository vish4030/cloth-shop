
import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './signin.style.scss';

class SignIn extends React.Component {
    constructor(){
        super()
        this.state = {
            email:'',
            password:''
        }
    }
     
    handleSubmit = event => {
     event.preventDefault();
     
     this.setState({email:'', password:''})

    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({ [name]:value })
    }


    render() {

        return (
            <div className='sign-in'>
                <h2>I already have a account</h2>
                <span>sign in with email password</span>
                <form onSubmit={ this.handleSubmit }>
                    <FormInput
                    type='email'
                    name='email'
                    handleChange={this.handleChange}
                    value={this.state.email}
                    lable='email'
                    required
                    />
                    <FormInput
                    type='password'
                    name='password'
                    handleChange={this.handleChange}
                    value={this.state.password}
                    lable='password'
                    required
                    />

                    <CustomButton type='submit'>Sign In</CustomButton>

                </form>
            </div>
        )
    }

}

export default SignIn;