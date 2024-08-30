import axios from 'axios';
// *ApiService는 springBoot server(보통 'http://localhost:8080/으로 열린다')와 연결해주는 역할을 한다.
// react에서 무언가 요청을 하면 springBoot에서 받아 oracle에서 데이터를 가져오거나 연결해주는 역할을 한다.
// 전형적인 mvc 패턴이라고 할 수 있다.
// react에서 이를 구현하기 위해 axios를 사용한다. 기존 HTML이나 JSP에서 사용한 AJAX 역할을 한다.
// axios설치 : npm install -f axios@^1.3.5  => import axios from 'axios'; -f는 force (강제설치)
// pckage.json => "axios": "^1.3.5"
//*스프링부트 톰캣이 실행되어 있어야 한다

//const MEMBER_BASE_URL = "http://localhost:8081/member";
const MEMBER_BASE_URL = "http://43.203.255.56:8081/member";
class ApiService {

    // list
    fetchMembers() {
        console.log('fetchProducts 호출');
        return axios.get(MEMBER_BASE_URL);
    }

    // 1건조회
    fetchMemberByid(memberId) {
        console.log('fetchMemberByid 호출', memberId);
        return axios.get(MEMBER_BASE_URL + "/" + memberId);
    }

    // 추가
    addMember(inputData) {
        console.log('addMember 호출');
        return axios.post(MEMBER_BASE_URL, inputData);
    }

    //수정
    editMember(inputData) {
        console.log('editMember 호출');
        return axios.put(MEMBER_BASE_URL + "/" + inputData.id, inputData);
    }

    //삭제
    deleteMember(memberId) {
        console.log('deleteMember 호출');
        return axios.delete(MEMBER_BASE_URL + '/' + memberId);
    }
} export default new ApiService;