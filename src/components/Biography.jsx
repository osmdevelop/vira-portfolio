import React from 'react';

const Biography = () => {
  return (
    <section style={styles.container}>
      <h2 style={styles.header}>Віра Бойчук</h2>
      <p style={styles.text}>
        Досвідчений лікар-терапевт, клінічний дієтолог та нутріціолог. Здобула вищу медичну освіту в Івано-Франківському
        Національному Медичному Університеті, який закінчила у 2009 році. Після цього пройшла інтернатуру за фахом "Внутрішні хвороби".
      </p>
      <p style={styles.text}>
        Має багаторічний практичний досвід роботи. Спочатку працювала терапевтом у міській лікарні, а згодом - асистентом та
        доцентом кафедри сімейної медицини рідного університету. У 2016 році успішно захистила дисертацію на тему:
        "Роль інтестинальних гормонів та пепсиногенів у розвитку гастроезофагеальної рефлюксної хвороби, що поєднується з
        ендемічним зобом в умовах йододефіциту та підходи до її диференційованої терапії".
      </p>
      <p style={styles.text}>
        У 2020 році здобула спеціалізацію з клінічної дієтології в Національній медичній академії ім. П.Л. Шупика у Києві.
        Відтоді Віра Бойчук консультує пацієнтів як сертифікований дієтолог, нутріціолог та фахівець з профілактики старіння,
        працюючи в Україні, Європі та США.
      </p>
      <p style={styles.text}>
        Нині також задіяна у клінічних дослідженнях з нутриціології та гастроентерології в Лойола Університеті Чикаго.
        Є членом Української та Американської асоціацій дієтологів, а також Асоціації нутріціологів США.
      </p>
      <p style={styles.text}>
        Пропагує індивідуальний підхід до кожного пацієнта та комплексне бачення здоров'я як гармонії тіла і душі,
        комфортного самопочуття та позитивного способу життя.
      </p>
    </section>
  );
};

// Styling for the Biography component
const styles = {
  container: {
    padding: '40px',
    backgroundColor: '#fff', // Light background for the text
    color: '#333',           // Standard text color for readability
    textAlign: 'justify',    // Justified text aligns text evenly
    marginBottom: '20px'     // Margin bottom for spacing
  },
  header: {
    fontSize: '2.4rem',
    fontWeight: 'bold',
    marginBottom: '20px'     // Margin bottom after the header
  },
  text: {
    fontSize: '1.1rem',
    lineHeight: '1.8',       // Line height for readability
    marginBottom: '15px'     // Margin bottom after each paragraph
  }
};

export default Biography;
