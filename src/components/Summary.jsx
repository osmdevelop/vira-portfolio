import React from 'react';

const Summary = () => {
  return (
    <section style={styles.container}>
      <h2 style={styles.header}>Відкрийте шлях до гармонії тіла і душі</h2>
      <p style={styles.text}>
        Ви унікальні, і ваше здоров'я - безцінний скарб. Разом ми створимо індивідуальну дорожню карту до комфортного самопочуття,
        природної форми та життєвої наснаги.
      </p>
      <p style={styles.text}>
        Досвід, розуміння, персоналізований підхід - ось що чекає на вас в світі здорового харчування.
        Зробіть перший крок назустріч до кращої версії себе - сповненого енергії та впевненості у собі.
      </p>
      <p style={styles.text}>
        Почніть змінюватися сьогодні - вага вже не матиме значення. Головне - це любов до себе та задоволення від кожної миті життя!
      </p>
    </section>
  );
};

// Styling for the component
const styles = {
  container: {
    padding: '40px',
    backgroundColor: '#ffffff',  // White background
    color: '#333',               // Dark text for readability
    textAlign: 'justify'         // Justified text for a cleaner look
  },
  header: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '20px'
  },
  text: {
    fontSize: '1.2rem',
    lineHeight: '1.6',
    marginBottom: '15px'
  }
};

export default Summary;
