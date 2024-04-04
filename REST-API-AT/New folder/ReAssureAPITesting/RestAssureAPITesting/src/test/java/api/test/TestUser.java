package api.test;

//import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;
//import com.fasterxml.jackson.databind.JsonNode;
//import com.fasterxml.jackson.databind.ObjectMapper;
//import com.fasterxml.jackson.databind.node.ObjectNode;
import com.github.javafaker.Faker;
//import java.io.File; // Import the File class
import api.endpoints.UserEndPoints;
import api.payload.payload;
import database.Database;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;

import java.sql.SQLException;
import java.util.HashMap;

//import org.apache.logging.log4j.LogManager;
//import org.apache.logging.log4j.Logger;
import org.testng.Assert;

public class TestUser {
//	String username = "paisabazaar";
//	String password = "password";
	public static String authToken = null;
//	String endPoint = "/lead/token";
	Faker faker;
	TestUser userPayload;
	public String oauthToken = null;
//	public Logger logger;

//	//@BeforeClass
//	public void setup() {
//		faker = new Faker();
//		userPayload = new User();
//
////		userPayload.setEmail("mastan3@gmail.com");
////		userPayload.setMobile("6302886935");
//		userPayload.setEmail(faker.internet().safeEmailAddress());
//		userPayload.setMobile("9" + faker.number().digits(8) + "8");
//		
//		// logs
//		logger = LogManager.getLogger(this.getClass());
//
//		logger.debug("debugging.....");
//
//	}
//	String dbip="10.105.60.86";
//			String query=null;
	@Test(priority = 0)
	void queryExecution() throws SQLException {
		Database.executeDatabaseQuery("SELECT * FROM yp.yp_user"); // You need to provide the correct arguments.
		Database.executeDatabaseQuery(
				"UPDATE yp.yp_lead_config SET password =  md5('password') WHERE (partner_id = '3')");
		Database.executeDatabaseQuery("UPDATE yp.yp_lead_config SET status = '1' WHERE (partner_id = '3')");
		Database.executeDatabaseQuery("UPDATE yp.yp_lead_config SET status = '1' WHERE (partner_id = '3')");
		Database.executeDatabaseQuery("UPDATE yp.yp_lead_api_access_config SET allowedAppType = '*' WHERE (id = '8')");
		Database.executeDatabaseQuery("UPDATE yp.yp_lead_api_access_config SET allowedAppType = '*' WHERE (id = '9')");
		Database.executeDatabaseQuery("UPDATE yp.yp_lead_api_access_config SET allowedAppType = '*' WHERE (id = '7')");
		Database.executeDatabaseQuery("UPDATE yp.yp_lead_api_access_config SET allowedAppType = '*' WHERE (id = '10')");
		Database.executeDatabaseQuery(
				"UPDATE yp.yp_config SET value = 'AIzaSyB8sVCUx2de592MmSgwrgM5NCTuYXdGuRM' WHERE (id = '3252')");
		Database.executeDatabaseQuery(
				"UPDATE yp.yp_lead_config SET jsonConfig = '{\\\"preFillEmail\\\":\\\"1\\\"}' WHERE (partner_id = '21')");
        Database.executeDatabaseQuery("UPDATE yp.yp_lead_config SET consentTypes = 'login,panSubmit,profile_mfiLimit,cibil,lendingPartner' WHERE (partner_id = '3')");
	}

@Test(priority = 1, description = "token generation")
	void tokenGeneraiton() {
		System.out.println(payload.basicAuth());
//		System.out.println(payload.userAuth());
//		String data=payload.userAuth();
//		System.out.println(data);
		HashMap<String, String> authData = payload.userAuth();
		String username = authData.get("username");
		String password = authData.get("password");

		System.out.println("Username: " + username);
		System.out.println("Password: " + password);

		Response response = UserEndPoints.tokenGeneration(payload.basicAuth(), username, password, "/lead/token");
		response.then().log().all().assertThat().statusCode(200).extract().response().asString();
		System.out.println("Token Response " + " " + response);

		JsonPath res = response.jsonPath();
		String idToken = res.getString("model.idToken");
		System.out.println(idToken);
		oauthToken = idToken;
		Assert.assertEquals(response.getStatusCode(), 200);
	}

//	@Test(priority = 2, description = "Eligibility data")
	void eligibility() throws InterruptedException {
		String profileligiblility = payload.profileEligibility();
		Response response = UserEndPoints.postMethod(profileligiblility, oauthToken, "/me/profile/eligible");
		response.then().assertThat().statusCode(200).log().all().extract().asString();
		Thread.sleep(5000);
		String paperlessAdhar = payload.paperlessAadharProfileDoc();
		Response res = UserEndPoints.putMethod(paperlessAdhar, oauthToken, "/me/profile/doc");
		res.then().assertThat().statusCode(200).log().all().extract().asString();
//	    } catch (Exception e) {
//	        e.printStackTrace();
//	    }
	}

		@Test(priority = 3, description = "paperless adhar updations")
void papperlessAdhar() {
		String paperlessAdhar = payload.paperlessAadharProfileDoc();
		Response response = UserEndPoints.putMethod(paperlessAdhar, oauthToken, "/me/profile/doc");
		response.then().assertThat().statusCode(200).log().all().extract().asString();
	}

}
