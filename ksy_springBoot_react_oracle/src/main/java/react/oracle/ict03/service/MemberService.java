package react.oracle.ict03.service;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;

import react.oracle.ict03.dto.MemberDTO;

public interface MemberService {
	
	//목록 조회
	public List<MemberDTO> memberList()
		throws ServletException, IOException;

	//1건 조회
	public MemberDTO selectByid(int id)
		throws ServletException, IOException;
	
	//추가
	public int insertMember(MemberDTO dto)
			throws ServletException, IOException;
	
	//수정
	public int updateMember(MemberDTO dto)
			throws ServletException, IOException;
	
	//삭제
	public int deleteMember(int id)
			throws ServletException, IOException;
}
