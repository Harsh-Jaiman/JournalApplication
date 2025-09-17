package net.engineeringdigest.journalApp.api.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class WeatherResponse {
    public Current current;


    @Getter
    @Setter
    public static class Current {

        @JsonProperty("temperature")
        public int temperature;

        @JsonProperty("weather_descriptions")
        public List<String> weatherDescriptions;

        @JsonProperty("feelslike")
        public int feelslike;

    }
}

