package react.oracle.ict03.dto;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="member_tbl")
public class MemberDTO {
	
	private int id; 
	private String name; 
	private int age;
	private Date birthday;
	private String address;
	
	@Id //*중요*
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public Date getBirthday() {
		return birthday;
	}
	public void setBirthday(Date birthday) {
		this.birthday = birthday;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	
	@Override
	public String toString() {
		return "MemberDTO [id=" + id + ", name=" + name + ", age=" + age + ", birthday=" + birthday + ", address="
				+ address + "]";
	}
	
}
