import Attendance from "../Attendance/Attendance";
import Intro from "../Intro/Intro";
import styles from "./Home.module.scss";
function Main() {
  return (
    <>
      <main className={styles.main}>
        <Intro />
        <section className={styles.place}>
          <h2>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C8.13 2 5 5.13 5 9C5 13.25 9 18.5 11.25 21.14C11.66 21.61 12.34 21.61 12.75 21.14C15 18.5 19 13.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
                fill="currentColor"
              />
            </svg>
            Място на събитието
          </h2>
          <p className={styles.placeDescription}>
            Сгушено сред безкрайните лозови масиви и омагьосващите гледки на
            Средна гора,<br></br>
            <span>Chateau Copsa - Winery & Hotel</span> плени сърцата ни със
            своята елегантност, тишина и винен чар. Разположено само на час път
            от София, край град Карлово, това място предлага перфектната
            комбинация от природа, изискан вкус и неподправен уют. природа,
            комфорт и стил. Точната ѝ локация можете да откриете тук:
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.641381277501!2d24.703452276084302!3d42.647762016876904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a9913fb5932879%3A0xedb5d806eedb52d1!2sChateau%20Copsa%20-%20Winery%20%26%20Hotel!5e0!3m2!1sen!2sbg!4v1747146527578!5m2!1sen!2sbg"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
          <article className={styles.placeImages}>
            <img
              src="https://copsa.bg/wp-content/uploads/2024/06/image00066.jpeg"
              alt="test"
            />
            <img
              src="https://copsa.bg/wp-content/uploads/2024/06/viber_image_2021-08-28_19-03-17-280.jpg"
              alt="test"
            />
            <img
              src="https://copsa.bg/wp-content/uploads/2024/06/0B9186A6-6628-463E-8137-9A6A3DC0FC1F.jpg"
              alt="test"
            />
            <img
              src="https://copsa.bg/wp-content/uploads/2024/06/190803-194814-svatbena-fotografia-E.jpg"
              alt="test"
            />
          </article>
        </section>
        <section className={styles.details}>
          <h2>Детайли</h2>
          <article>
            <ul>
              <li>
                За гостите, които ще пътуват от други населени места, сме
                осигурили настаняване в **Chateau Copsa – Winery & Hotel**,
                разположен сред живописните лозови масиви край Карлово.
                Настаняването започва в 14:00 часа на 20.09.2025 г., а
                напускането е до 11:00 часа на 21.09.2025 г.
              </li>
              <li>
                Церемонията и празненството ще се проведат сред лозята и
                винарната зона, така че ви препоръчваме удобни обувки и облекло,
                подходящо за терен на открито. Не се притеснявайте – стилът и
                комфортът могат да вървят ръка за ръка!
              </li>
              <li>
                Вместо стандартни подаръци, ще се радваме, ако допринесете за
                осъществяването на едно от нашите бъдещи винени приключения или
                мечтания ни меден месец. На място ще има специална кутия за
                пожелания и спомени.
              </li>
            </ul>
          </article>
        </section>
        <Attendance />
        <section className={styles.program}>
          <h2>Програмата</h2>
          <p>
            <span>2</span> Юли, 2024
          </p>
          <article>
            <ul>
              <li>
                <span>16:00</span> - Посрещане на гостите с чаша вино от избата
                на Chateau Copsa
              </li>
              <li>
                <span>16:30</span> - Изнесена церемония по бракосъчетание сред
                лозята
              </li>
              <li>
                <span>17:15</span> - Снимки с младоженците на фона на Средна
                гора
              </li>
              <li>
                <span>18:00</span> - Апериф и лека дегустация на вина
              </li>
              <li>
                <span>19:00</span> - Празнична вечеря в ресторанта на замъка
              </li>
              <li>
                <span>21:30</span> - Танци и музика под открито небе
              </li>
              <li>
                <span>23:00</span> - Нощна разходка до кулата с чаша вино за
                финал
              </li>
            </ul>
          </article>
        </section>

        <section className={styles.footer}>
          <h3>
            „За всички, които желаят да бъдат в пълна хармония с атмосферата на
            нашия празник, ви предлагаме следната цветова палитра за облеклото:
          </h3>
          <div className={styles.colorPallete}>
            <span className={styles.palette1}></span>
            <span className={styles.palette2}></span>
            <span className={styles.palette3}></span>
            <span className={styles.palette4}></span>
            <span className={styles.palette5}></span>
          </div>
        </section>
      </main>
    </>
  );
}

export default Main;
