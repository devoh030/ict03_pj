import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import {Typography} from '@mui/material';
import ApiService from "../../ApiService";

class AddMemberComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            birthday: '',
            address: ''
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    addMember = (e) => {
        e.preventDefault();

        let inputData = {
            name: this.state.name,
            age: this.state.age,
            birthday: this.state.birthday,
            address: this.state.address
        }

        ApiService.addMember(inputData) 
            .then(res => {  //res = resultCode & resultMsg
                console.log('addMember 성공', res.data);
                this.props.history.push("/member");
            }) 
            .catch(err => {
                console.log('addMember 실패', err);
            });
    }

    addCancel = () => {
        this.props.history.push("/member");
    }

    render() {
        return(
            <div>
                <Typography variant="h5" style={style}>Member Add</Typography> <br/><br/>
                <div style={sty_input}>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">
                            이름
                        </InputGroup.Text>
                        <Form.Control aria-label="Default" aria-describedby="inputGroup-sizing-default" 
                        required
                        id="standard-required"
                        variant="standard"
                        label="name"
                        name="name"
                        value={this.state.name}
                        placeholder='write Product name'
                        onChange={this.onChange}
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">
                            나이
                        </InputGroup.Text>
                        <Form.Control aria-label="Default" aria-describedby="inputGroup-sizing-default" 
                        required
                        id="standard-required"
                        variant="standard"
                        label="age"
                        name="age"
                        value={this.state.age}
                        placeholder='write Product age'
                        onChange={this.onChange}
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">
                            생년월일
                        </InputGroup.Text>
                        <Form.Control aria-label="Default" aria-describedby="inputGroup-sizing-default" 
                        required
                        id="standard-required"
                        variant="standard"
                        label="birthday"
                        name="birthday"
                        value={this.state.birthday}
                        placeholder='write Product birthday'
                        onChange={this.onChange}
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">
                            주소
                        </InputGroup.Text>
                        <Form.Control aria-label="Default" aria-describedby="inputGroup-sizing-default" 
                        required
                        id="standard-required"
                        variant="standard"
                        label="address"
                        name="address"
                        value={this.state.address}
                        placeholder='write Product address'
                        onChange={this.onChange}
                        />
                    </InputGroup>
                    <Button variant="outline-primary" onClick={this.addMember}>등록</Button>{' '}
                    <Button variant="outline-secondary" onClick={this.addCancel}>취소</Button>
                </div>
        </div>
        )
    }
}
const style = {
    width: '500px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center'
}

const sty_input = {
    width: '500px',
    margin: '0 auto'
}


export default AddMemberComponent;