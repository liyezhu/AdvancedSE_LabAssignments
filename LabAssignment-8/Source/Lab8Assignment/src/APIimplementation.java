import java.util.Iterator;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import org.json.JSONArray;
import org.json.JSONObject;

import com.sun.jersey.api.client.Client;
import com.sun.jersey.api.client.ClientResponse;
import com.sun.jersey.api.client.WebResource;

@Path("/implementations")
public class APIimplementation {
	@GET
	
	public String apiImplementation() {
		Client client = Client.create();
		WebResource webResource = client.resource("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=2&q=%22dhoni%22&type=video&key=AIzaSyDpyT6qTD9Ql3WcG62wYkjqLdq9IRpmPrA");
		WebResource web = client.resource("https://api.foursquare.com/v2/venues/search?client_id=J5Y2UOY5JEQW4QKX2WXBZG4QNAGUZXWIOHLEILLV5SYASEYF&client_secret=UQJCVOYU4MF43X2VIXSIV1HULDYAQOEZW0CZSJ242ROVER43&v=20160215&limit=2&near=%22boston%22&query=%22theatre%22")	;
		ClientResponse response1 = webResource.accept("application/json").get(ClientResponse.class);
		ClientResponse response2 = web.accept("application/json").get(ClientResponse.class);
		
		String output1 = response1.getEntity(String.class);
		String output2 = response2.getEntity(String.class);
		String result = "@Produces(\"application/json\") YouTube Output: \n\n"
		+ output1 +"\n\n\n@Produces(\"application/json\") FourSquare Output: \n\n" + output2;
		
		return result;

			
			
		
	}
}
