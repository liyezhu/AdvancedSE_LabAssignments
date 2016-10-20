
import static org.junit.Assert.assertEquals;

import org.junit.Test;
public class APIimplementationTest {
	
	APIimplementation aPIimplementation = new APIimplementation();
	String result = aPIimplementation.apiImplementation();
	String testResult1 = "youtube#searchListResponse";
	String testResult2 = "Theatre";
	
	@Test
	public void testImplementation() {
		System.out.println("@Test sum(): " + result + " = " + testResult1);
		System.out.println("@Test sum(): " + result + " = " + testResult2);
		result.contains(testResult1);
		result.contains(testResult2);
		
	}
	

}
