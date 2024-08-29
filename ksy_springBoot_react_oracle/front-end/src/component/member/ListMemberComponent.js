import React, { Component } from "react";
import Table from 'react-bootstrap/Table';
import {Typography} from '@mui/material';
import ApiService from "../../ApiService";
import { Create, Delete } from '@mui/icons-material';

class ListMemberComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            members: [],
            message: null 
        }
    }

    componentDidMount() {
        this.memberList();
    }

    memberList = () => {
        ApiService.fetchMembers()
            .then(res => {
                this.setState({
                    members: res.data
                })
            })
            .catch(err => {
                console.log('memberList() Error')
            })
    } 

    editMember = (id) => {
        window.localStorage.setItem("memberId", id);
        this.props.history.push("/edit-member");
    }   

    deleteMember = (id) => {
        if(window.confirm('삭제하시겠습니까?')) {
            ApiService.deleteMember(id)
                .then(res => {
                    this.setState({
                        members: this.state.members.filter(member => member.id !== id)
                    });
                    console.log('deleteMember 성공', res.data);
                    //this.memberList();
                })
                .catch(err => {
                    console.log('deleteMember 실패', err);
                });
        }
    }  

    render() {
        return (
            <div>
                <br/><br/>
                <Typography variant="h4" style={style}>Member List</Typography> <br/><br/>
                <div style={tbl_style}>
                    <Table striped bordered hover>
                    <thead>
                        <tr >
                        <th>회원ID</th>
                        <th>이름</th>
                        <th>나이</th>
                        <th>생년월일</th>
                        <th>주소</th>
                        <th>Edit</th>
                        <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.members.map(member =>
                        <tr key={member.id}>
                        <td>{member.id}</td>
                        <td>{member.name}</td>
                        <td>{member.age}</td>
                        <td>{member.birthday}</td>
                        <td>{member.address}</td>
                        <td onClick={() => this.editMember(member.id)}><Create /></td>
                        <td onClick={() => this.deleteMember(member.id)}><Delete /></td>
                        </tr>
                        )}
                    </tbody>
                    </Table>

                </div>
            </div>
        );
    }
};

const style = {
    display: 'flex',
    justifyContent: 'center'
}

const tbl_style = {
    width: '1000px',
    margin: '60px auto'
}
export default ListMemberComponent;
