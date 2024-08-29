package react.oracle.ict03.service;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import react.oracle.ict03.dao.MemberMapper;
import react.oracle.ict03.dto.MemberDTO;

@Service
public class MemberServiceImpl implements MemberService {
	
	@Autowired
	private MemberMapper dao;
	//목록 조회
	@Override
	public List<MemberDTO> memberList() 
			throws ServletException, IOException {
		List<MemberDTO> list = dao.memberList();
		return list;
	}
	//1건 조회
	@Override
	public MemberDTO selectByid(int id) 
			throws ServletException, IOException {
		MemberDTO dto = dao.selectByid(id);
		return dto;
	}
	//추가
	@Override
	public int insertMember(MemberDTO dto) 
			throws ServletException, IOException {
		int insertCnt = dao.insertMember(dto);
		return insertCnt;
	}
	
	//수정
	@Override
	public int updateMember(MemberDTO dto) 
			throws ServletException, IOException {
		int updateCnt = dao.updateMember(dto);
		return updateCnt;
	}
	
	//삭제
	@Override
	public int deleteMember(int id) 
			throws ServletException, IOException {
		int deleteCnt = dao.deleteMember(id);
		return deleteCnt;
	}

}
