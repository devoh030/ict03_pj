package react.oracle.ict03.controller;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import react.oracle.ict03.dto.MemberDTO;
import react.oracle.ict03.service.MemberServiceImpl;

@CrossOrigin(origins="**", maxAge=3600)
@RestController
@RequestMapping(value="/member")
public class MemberController {
	
	private static final Logger logger = LoggerFactory.getLogger(MemberController.class);
	//http://localhost:8081/member
	
	@Autowired
	private MemberServiceImpl serv;
	
	//목록 조회
	@GetMapping
	public List<MemberDTO> memberList(HttpServletRequest req, HttpServletResponse res, Model model)
			throws ServletException, IOException {
		logger.info("<< url -  memberList>>");
		return serv.memberList();
	}
	
	//1건 조회
	@GetMapping("/{id}")
	public MemberDTO selectById(@PathVariable int id)
			throws ServletException, IOException {
		logger.info("<< url -  selectById>>");
		return serv.selectByid(id);
	}
	
	//추가
	@PostMapping
	public Map<String, Object> memberInsert(@RequestBody MemberDTO dto)
			throws ServletException, IOException {
		logger.info("<< url -  memberInsert>>");
		
		String resultCode = "";
		String resultMsg = "";
		
		Map<String, Object> map = new HashMap<String, Object>();
		
		try {
			int insertCnt = serv.insertMember(dto);
			if(insertCnt == 1) {
				resultCode = "200";
				resultMsg = "memberInsert Success";
			}
			
		} catch(Exception e) {
			resultCode = "400";
			resultMsg = e.getMessage();
			e.printStackTrace();
		}
		map.put("resultCode",resultCode);
		map.put("resultMsg",resultMsg);
		System.out.println("[ memberInsert 성공]");
		return map;
	}
	
	//수정
	@PutMapping("/{id}")
	public Map<String, Object> memberUpdate(@PathVariable int id, @RequestBody MemberDTO dto)
			throws ServletException, IOException {
		logger.info("<< url -  memberUpdate>>");
		
		String resultCode = "";
		String resultMsg = "";
		
		Map<String, Object> map = new HashMap<String, Object>();
		
		try {
			dto.setId(id);
			int updateCnt = serv.updateMember(dto);
			if(updateCnt == 1) {
				resultCode = "200";
				resultMsg = "memberUpdate Success";
			}
			
		} catch(Exception e) {
			resultCode = "400";
			resultMsg = e.getMessage();
			e.printStackTrace();
		}
		map.put("resultCode",resultCode);
		map.put("resultMsg",resultMsg);
		System.out.println("[ memberUpdate 성공]");
		return map;
	}
	
	//삭제
	@DeleteMapping("/{id}")
	public Map<String, Object> memberDelete(@PathVariable int id)
			throws ServletException, IOException {
		logger.info("<< url -  memberDelete>>");
		
		String resultCode = "";
		String resultMsg = "";
		
		Map<String, Object> map = new HashMap<String, Object>();
		
		try {
			int deleteCnt = serv.deleteMember(id);
			if(deleteCnt == 1) {
				resultCode = "200";
				resultMsg = "memberDelete Success";
			}
			
		} catch(Exception e) {
			resultCode = "400";
			resultMsg = e.getMessage();
			e.printStackTrace();
		}
		map.put("resultCode",resultCode);
		map.put("resultMsg",resultMsg);
		System.out.println("[ memberDelete 성공]");
		return map;
	}
	

}
