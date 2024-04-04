package api.endpoints;

//import api.payload.User;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import static io.restassured.RestAssured.given;

//import java.io.File;
//import java.io.FileNotFoundException;
//import java.io.FileReader;
//
//import org.json.JSONObject;
//import org.json.JSONTokener;

public class UserEndPoints {

	public static Response tokenGeneration(String payload, String userName, String password, String endpoint) {
		String tokenURL = Routes.getUserApiUrl(endpoint);
		Response idToken = given().contentType("application/json").auth().preemptive().body(payload)
				.basic(userName, password).when().post(tokenURL);
		return idToken;
	}

	// POST method for creating a user
	public static Response postMethod(String payload, String token, String endpoint) {
//    	File files = new File(payload);
//
//		FileReader fileReader = null;
//		try {
//			fileReader = new FileReader(files);
//		} catch (FileNotFoundException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//
//		JSONTokener jsTextData = new JSONTokener(fileReader);
//		// Here iam converting the json format
//		JSONObject data = new JSONObject(jsTextData);
		System.out.println(payload);
		String postUrl = Routes.getUserApiUrl(endpoint);
		Response response = given().contentType(ContentType.JSON).accept(ContentType.JSON).auth().oauth2(token)
				.body(payload).when().post(postUrl);
		return response;
	}

	// PUT method for updating a user
	public static Response putMethod(String paperlessAdhar, String token, String endpoint) {
		String putUrl = Routes.getUserApiUrl(endpoint);
		Response response = given().contentType(ContentType.JSON).accept(ContentType.JSON).auth().oauth2(token)
				.body(paperlessAdhar).when().put(putUrl);
		return response;
	}

	// GET method for retrieving user data
	public static Response getUser(String endpoint, String token) {
		String getUrl = Routes.getUserApiUrl(endpoint);
		Response response = given().auth().oauth2(token).when().get(getUrl);
		return response;
	}

	// DELETE method for deleting a user
	public static Response deleteMethod(String endpoint, String token) {
		String deleteUrl = Routes.getUserApiUrl(endpoint);
		Response response = given().auth().oauth2(token).when().delete(deleteUrl);
		return response;
	}

	public static Response postData(String endpoint, String token) {
	    // Build the complete URL for the API endpoint
	    String postdata = Routes.getUserApiUrl(endpoint);
//	    postdata.given().log().all().auth().oauth2(idToken).when()
//		.post("me/profile/doc");
	    // Send a POST request to the specified endpoint
	    Response res = given().log().all().auth().oauth2(token)
//	            .auth().oauth2(token)
	            .when()// Set the OAuth2 token in the request header
	            .post(postdata);        // Send a POST request with the specified data

	    return res;  // Return the response object
	}

}
