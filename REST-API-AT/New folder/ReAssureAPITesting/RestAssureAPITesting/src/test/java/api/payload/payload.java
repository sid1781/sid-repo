package api.payload;

import com.github.javafaker.Faker;

import java.util.HashMap;

import com.fasterxml.jackson.databind.ObjectMapper;

public class payload {
    static Faker faker;

    public static HashMap<String, String> userAuth() {
        String username = "paisabazaar";
        String password = "password";

        // Create a map with username and password
        HashMap<String, String> authData = new HashMap<>();
        authData.put("username", username);
        authData.put("password", password);

        return authData;
    }

    public static String basicAuth() {
        Faker faker = new Faker();

        String email = faker.internet().safeEmailAddress();
        String mobile = "9" + faker.number().digits(8) + "8";

        // Create a JSON object as a string
        String json = "{"
            + "\"mobile\": \"" + mobile + "\","
            + "\"email\": \"" + email + "\""
            + "}";

        return json;
    }


    public static String profileEligibility() {
    	Faker faker = new Faker();
        String randomFiveDigitNumber = faker.number().digits(3); // Generates a random 5-digit number
        String pan = "FMHPM0" + randomFiveDigitNumber + "A";
        return "{\r\n"
        + "    \"fname\": \"Raghuraj Prataap\",\r\n"
        + "    \"lname\": \"Singh\",\r\n"
        + "    \"pan\": \"" + pan+ "\",\r\n"
        + "    \"pincode\": \"560076\",\r\n"
        + "    \"monthlySalary\": \"5000\",\r\n"
        + "    \"employmentType\": \"salaried\",\r\n"
        + "    \"dob\": \"1998-02-25\",\r\n"
        + "    \"gender\": \"male\",\r\n"
        + "    \"company\": \"-1\",\r\n"
        + "    \"companyName\": \"kreditbee\",\r\n"
        + "    \"modeOfSalary\": \"Bank Transfer\",\r\n"
        + "    \"imei\": \"\"\r\n"
        + "}";
    }

	public static String paperlessAadharProfileDoc() {
		return "{\r\n"
				+ "    \"tag\": \"paperlessAadhaar\",\r\n"
				+ "    \"filename\": \"AADHAAR_OKYC_document.zip\",\r\n"
				+ "    \"contentType\": \"application/zip\",\r\n"
				+ "    \"filepath\": \"https://firebasestorage.googleapis.com/v0/b/kreditbee-stage/o/lRURV02ZwPZPdReOmL06FLCsYXv1%2Fdocs%2FpaperlessAadhaar_ajbbp2sw4o.zip?alt=media&token=8fcceedb-ba97-47ca-8e9e-9c77fb633c7f&pw=1234\",\r\n"
				+ "    \"password\": \"1234\"\r\n"
				+ "}";
	}
	
	public static String panCardProfileDoc() {
		return "{\r\n"
				+ "    \"tag\": \"pan\",\r\n"
				+ "    \"filename\": \"pan.jpeg\",\r\n"
				+ "    \"contentType\": \"image/jpeg\",\r\n"
				+ "    \"filepath\": \"https://drive.google.com/uc?export=download&id=1ELUVHbcE0Z1FEQ_ej1rGG2RMVTVukB9o\",\r\n"
				+ "    \"password\": \"1234\"\r\n"
				+ "}";
	}
	
	public static String selfieProfileDoc() {
		return "{\r\n"
				+ "    \"tag\": \"selfie\",\r\n"
				+ "    \"filename\": \"selfie.jpeg\",\r\n"
				+ "    \"contentType\": \"image/jpeg\",\r\n"
				+ "    \"filepath\": \"https://drive.google.com/uc?export=download&id=1So0XB7rKGeZU6DIhsiHs0CKYVTjRucwg\",\r\n"
				+ "    \"password\": \"1234\"\r\n"
				+ "}";
	}
	
	public static String addressProfile() {
		return "{\r\n"
				+ "    \"type\": \"current\",\r\n"
				+ "    \"line1\": \"Titan\",\r\n"
				+ "    \"line2\": \" \",\r\n"
				+ "    \"city\": \"Rajkot\",\r\n"
				+ "    \"state\": \"GUJARAT\",\r\n"
				+ "    \"pincode\": \"360001\",\r\n"
				+ "    \"ownership\": \"Owned\",\r\n"
				+ "    \"maritalStatus\": \"single\",\r\n"
				+ "    \"education\": \"Doctorate\",\r\n"
				+ "    \"profession\": \"Bank Employee\",\r\n"
				+ "    \"sameAddr\": \"1\"\r\n"
				+ "}";
	}
	
	public static String referenceProfile() {
		return "[\r\n"
				+ "    {\r\n"
				+ "        \"type\": \"father\",\r\n"
				+ "        \"name\": \"Rajesh kumar singh\",\r\n"
				+ "        \"mobile\": \"9572101577\",\r\n"
				+ "        \"isEdited\": 0\r\n"
				+ "    },\r\n"
				+ "    {\r\n"
				+ "        \"type\": \"spouse\",\r\n"
				+ "        \"name\": \"Yuvi \",\r\n"
				+ "        \"mobile\": \"9572101570\",\r\n"
				+ "        \"isEdited\": 0\r\n"
				+ "    },\r\n"
				+ "    {\r\n"
				+ "        \"type\": \"mother\",\r\n"
				+ "        \"name\": \"Niramala\",\r\n"
				+ "        \"mobile\": \"9572101571\"\r\n"
				+ "    },\r\n"
				+ "    {\r\n"
				+ "        \"type\": \"friend1\",\r\n"
				+ "        \"name\": \"FND Name\",\r\n"
				+ "        \"mobile\": \"9572101572\"\r\n"
				+ "    }\r\n"
				+ "    \r\n"
				+ "]";
	}
	
	
	

}

