package database;

import java.sql.SQLException;

import org.testng.annotations.Test;

import api.endpoints.Routes;
import static io.restassured.RestAssured.given;

public class Database {

//		@BeforeClass
//		public void setup() {
//			RestAssured.baseURI = "https://kbuatauto2api.kreditbee.dev/main";
//			// Set up your database connection here
//		}//qsometest

	@Test
	public static String executeDatabaseQuery(String querys) throws SQLException {
		// Database Query

//			String db_ip = "10.105.60.86";
//			String query = "SELECT * FROM yp.yp_user";
		String db_ip = Routes.DB_IP1();
		String query = querys;
		String body = "{ \"query\": \"" + query + "\", \"db_ip\": \"" + db_ip + "\" }";

		// Perform the POST request
		String dbend_point = "https://gt1vbgrgml.execute-api.ap-south-1.amazonaws.com/Automation/qsometest";

		String response = given().contentType("application/json").body(body).post(dbend_point).then().assertThat()
				.statusCode(200).extract().response().asString();
		System.out.println(response);
		return response;

	}

//private String IPAddress() {
//	// TODO Auto-generated method stub
//String	dpip=DB_IP();
//	return dbip;
//}

}