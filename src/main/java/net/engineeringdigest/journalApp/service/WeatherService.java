package net.engineeringdigest.journalApp.service;

import lombok.extern.slf4j.Slf4j;
import net.engineeringdigest.journalApp.api.response.WeatherResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
@Slf4j
public class WeatherService {

    @Value("${weather.api.key}")
    private String apikey;

    private static final String API = "http://api.weatherstack.com/current?access_key=API_KEY&query=CITY";

    @Autowired
    private RestTemplate restTemplate;

    @Cacheable(value = "weather_cache", key = "#city", unless="#result == null")
    public WeatherResponse getWeather(String city) {
        try {
            String finalAPI = API.replace("CITY", city).replace("API_KEY", apikey);
            // Fixed: Weather API should use GET, not POST
            ResponseEntity<WeatherResponse> response = restTemplate.exchange(
                    finalAPI,
                    HttpMethod.GET,
                    null,
                    WeatherResponse.class
            );
            return response.getBody();
        } catch (Exception e) {
            log.error("Error fetching weather for city {}: {}", city, e.getMessage());
            return null;
        }
    }
}