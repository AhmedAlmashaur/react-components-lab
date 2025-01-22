import './weatherForecast.css';

const WeatherForcast = (data) => {
    return(
    <>
    <div className="weather">
        <h2>{data.forecast.day}</h2>
            <img src={data.forecast.img} alt={data.forecast.alt} />
        <p><span>conditions: </span>{data.forecast.conditions}</p>
        <p><span>time: </span>{data.forecast.time}</p>
    </div>
    </>
    );
}

export default WeatherForcast;