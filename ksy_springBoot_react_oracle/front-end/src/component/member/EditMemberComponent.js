import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import {Typography} from '@mui/material';
import ApiService from "../../ApiService";

class EditMemberComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            age: '',
            birthday: '',
            address: ''
        }
    }
 //----------------------회원 1건조회--------------------------
    componentDidMount() {
        this.loadMember();
    }

    loadMember = () => {
        ApiService.fetchMemberByid(window.localStorage.getItem("memberId"))
            .then(res => {
                let member = res.data;
                this.setState({
                    id: member.id,
                    name: member.name,
                    age: member.age,
                    birthday: member.birthday,
                    address: member.address
                })
            })
            .catch(err => {
                console.log('loadMember() err', err);
            });
    }

    onChange = (e) => { //조회한 값으로 화면의 state변수를 변경한다
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    //----------------------수정버튼 > 수정 처리------
    editMember = (e) => {

        e.preventDefault();

        let inputData = {
            id: this.state.id,
            name: this.state.name,
            age: this.state.age,
            birthday: this.state.birthday,
            address: this.state.address
        }

        ApiService.editMember(inputData)
            .then(res => {
                console.log('editMember 성공: ', res.data);
                this.props.history.push("/member");
            })
            .catch(err => {
                console.log('editMember 실패', err);
            });
    }

    editCancel = () => {
        this.props.history.push("/member");
    }

    render() {
        return(
            <div>
                <Typography variant="h5" style={style}>Member update</Typography> <br/><br/>
                <div style={sty_input}>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">
                            회원ID
                        </InputGroup.Text>
                        <Form.Control aria-label="Default" aria-describedby="inputGroup-sizing-default" 
                        id="standard-required"
                        variant="standard"
                        label="id"
                        name="id"
                        value={this.state.id}
                        disabled
                       />
                    </InputGroup>
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
                        placeholder='edit Product name'
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
                        placeholder='edit Product age'
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
                        placeholder='edit Product birthday'
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
                        placeholder='edit Product address'
                        onChange={this.onChange}
                        />
                    </InputGroup>

                    <Button variant="outline-dark" onClick={this.editMember}>수정완료</Button>{' '}
                    <Button variant="outline-secondary" onClick={this.editCancel}>취소</Button>
                </div>
        </div>
        )
    }
}
const style = {
    display: 'flex',
    justifyContent: 'center'
}

const sty_input = {
    width: '500px',
    margin: '0 auto'
}

export default EditMemberComponent;