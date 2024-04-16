package api.test;

import java.sql.SQLException;
import java.util.HashMap;

import org.testng.Assert;
import org.testng.annotations.Test;

import com.github.javafaker.Faker;

import api.endpoints.UserEndPoints;
import api.payload.payload;
import database.Database;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.response.ValidatableResponse;
import io.restassured.response.ValidatableResponseOptions;

public class confirmProfile {

//	public static void main(String[] args) {

//		public static String authToken = null;
	Faker faker;
	TestUser userPayload;
//	String oauthToken = null;

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
		Database.executeDatabaseQuery(
				"UPDATE yp.yp_lead_config SET consentTypes = 'login,panSubmit,profile_mfiLimit,cibil,lendingPartner' WHERE (partner_id = '3')");
	}

	@Test(priority = 1, description = "token generation")
	void tokenGeneraiton() throws InterruptedException {
//			System.out.println(payload.basicAuth());
//			System.out.println(payload.userAuth());
//			String data=payload.userAuth();
//			System.out.println(data);
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
		String oauthToken = idToken;
//			System.out.println("Email: " + userPayload.getEmail());
//			System.out.println("Mobile: " + userPayload.getMobile());
//			System.out.println(User.getEmail()+ " "+userPaylod.setMobile());

		Assert.assertEquals(response.getStatusCode(), 200);

//			logger.info("**********User is creatged  ***************");
//		}
//
//@Test 
//void profileCretion() throws InterruptedException {

		// Now, send the POST request with the updated JSON data
		String profileligiblility = payload.profileEligibility();
		Response response1 = UserEndPoints.postMethod(profileligiblility, oauthToken, "/me/profile/eligible");
		response1.then().assertThat().statusCode(200).log().all().extract().asString();
		System.out.println("elegibility success");
		Thread.sleep(5000);
		// upload paperless adhar
		String paperlessAdhar = payload.paperlessAadharProfileDoc();
		Response res1 = UserEndPoints.putMethod(paperlessAdhar, oauthToken, "/me/profile/doc");
		res1.then().assertThat().statusCode(200).log().all().extract().asString();
		System.out.println("paperless adhar success");
//upload pancard 
		String pancard = payload.panCardProfileDoc();
		Response response11 = UserEndPoints.putMethod(pancard, oauthToken, "/me/profile/doc");
		response11.then().assertThat().statusCode(200).log().all().extract().asString();
		System.out.println("pancard success");
		// upload selfi
		String selfi = payload.selfieProfileDoc();
		Response response2 = UserEndPoints.putMethod(selfi, oauthToken, "/me/profile/doc");
		response2.then().assertThat().statusCode(200).log().all().extract().asString();
		System.out.println("selfi success");
		Thread.sleep(5000);
		// documents
//	String addressProfile=payload.addressProfile();
		Response response3 = UserEndPoints.postData( "/me/profile/doc",oauthToken);

		response3.then()
		        .assertThat()
//		        .statusCode(200)  // Assert that the HTTP status code is 200
		        .log().all();     // Log all details of the response

		System.out.println("selfi,ahdar,pan post data success");

	}



}
//}