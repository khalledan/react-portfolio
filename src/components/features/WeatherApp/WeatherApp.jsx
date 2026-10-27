import { useState } from 'react'
import styles from './WeatherApp.module.css'
function WeatherApp() {
    const [ville, setVille] = useState("")
    const [villeChoisie, setVilleChoisie] = useState("")
    const [weatherData, setWeatherData] = useState(null)
    const [error, setError] = useState("") // State باش نسجلو رسالة الخطأ

    const handleSubmit = async (e) => {
        e.preventDefault();
        setVilleChoisie(ville);
        setError(""); // نساو الخطأ القديم قبل كل بحث جديد

        try {
            const apiKey = "d5cea13f2189acc2e526945a6dee8290";
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=${apiKey}&units=metric`
            );
            const data = await response.json();
            
            console.log(data);

            // OpenWeatherMap كتجيب cod == "404" إلا كانت المدينة غير موجودة
            if (data.cod !== 200) {
                setWeatherData(null);
                setError("المدينة غير موجودة، تأكد من الكتابة من فضلك!");
            } else {
                setWeatherData(data);
            }
        } catch (err) {
            console.log("خطأ في جلب البيانات:", err);
            setError("حدث خطأ في الاتصال بالشبكة.");
        }
    };

    return (
        < div className={styles.container }>
            <h1 className={styles.title}>Weather App  --  تطبيق الطقس</h1>    

            <form className={styles.searchForm} onSubmit={handleSubmit}>
                <input 
                    className={styles.input}
                    type="text" 
                    placeholder="Entrer la ville"
                    onChange={(e) => { setVille(e.target.value) }}  
                    value={ville}
                />
                <button className={styles.button}>Chercher</button>
            </form>

            <p className={styles.resultCard}>vous avez choisie:  {villeChoisie}</p>

            {/* عرض رسالة الخطأ إلا كانت موجودة */}
            {error && <p style={{ color: "red" }}>{error}</p>}

            {/* عرض معلومات الطقس فقط إلا كانت البيانات سليمة */}
            {weatherData && weatherData.main && (
                <>
                    <p>درجة الحرارة: {weatherData.main.temp} °C</p>
                    <p>حالة الجو: {weatherData.weather[0].description}</p>
                </>
            )}
        </div>
    )
}

export default WeatherApp