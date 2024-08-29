package react.oracle.ict03.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import react.oracle.ict03.dto.MemberDTO;

@Mapper
public interface MemberMapper {
	
		//목록 조회
		public List<MemberDTO> memberList();

		//1건 조회
		public MemberDTO selectByid(int id);
		
		//추가
		public int insertMember(MemberDTO dto);
		
		//수정
		public int updateMember(MemberDTO dto);
		
		//삭제
		public int deleteMember(int id);
}
