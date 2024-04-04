package api.endpoints;

public class Routes {
	//base URl
	public static String BaseUrl = "https://kbuatauto2api.kreditbee.dev/main";
	public static String ipaddress="10.105.60.152";
//	public static Object getUserApiUrl;
    
	// Get the full URL for the user API
    public static String getUserApiUrl(String endpoint) {
        return BaseUrl + endpoint;
    }

	public static String DB_IP1() {
		// TODO Auto-generated method stub
		return ipaddress;
	}
}
