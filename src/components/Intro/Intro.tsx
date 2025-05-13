import mainIntroImg from "../../assets/couple.jpg";
import firstIntroImg from "../../assets/hearths-sec1.png";
import styles from "./Intro.module.scss";
function Intro() {
  return (
    <>
      <section className={styles.wrapper}>
        <section className={styles.sectionFirst}>
          <h1>Димитър & Василена</h1>
          <h3>Юли 2, 2024</h3>
        </section>
        <section className={styles.sectionSecond}>
          <article>
            <span>…И в миг разбрали, сякаш с дъх един,</span>
            <span>че вече всичко им е съдбовно близко —</span>
            <span>ръцете, мислите, светът им – цял и чист,</span>
            <span>не бил случайност, а съдбовен лист.</span>
            <br />
            <span>Сърцата трепнали – не от игра,</span>
            <span>а с онзи плам, що само любовта раздава.</span>
            <span>И тръгнали напред – без страх, без спиране,</span>
            <span>по път без край, с доверие и вярване.</span>

            <img src={mainIntroImg} alt="test" />
          </article>
        </section>
      </section>
    </>
  );
}

export default Intro;
