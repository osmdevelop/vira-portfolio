import React, { useState } from 'react';

const Services = () => {
const [hoverIndex, setHoverIndex] = useState(null);

  return (
     <div style={styles.container}>
      <h2 style={styles.header}>Види послуг</h2>
      <div style={styles.cardsContainer}>
        {serviceData.map((service, index) => (
          <div 
            key={index} 
            style={{ 
              ...styles.card, 
              transform: hoverIndex === index ? 'scale(1.05)' : 'scale(1)',
              boxShadow: hoverIndex === index ? '0 8px 16px rgba(0,0,0,0.2)' : '0 4px 8px rgba(0,0,0,0.1)'
            }}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <div style={styles.cardContent}>
              <h3 style={styles.cardHeader}>{service.title}</h3>
              <div style={{
                ...styles.cardDetails,
                opacity: hoverIndex === index ? 1 : 0,
                height: hoverIndex === index ? 'auto' : '0'
              }}>
                <ul>
                  {service.details.map((detail, detailIndex) => (
                    <li key={detailIndex} style={styles.detailText}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p style={styles.footerText}>
        Яку б програму ви не обрали - професійний супровід Віри забезпечить вашу впевненість на шляху до ідеального здоров'я!
      </p>
    </div>
  );
};

const serviceData = [
  {
    title: "Консультація онлайн - перший крок до змін",
    details: [
      "Деталізований розбір аналізів та харчових звичок",
      "Індивідуальні рекомендації з нутріціології та здорового способу життя",
      "Підбір вітамінів і харчових добавок для вашого організму при потребі",
      "PDF-інструкція та приклад одноденного меню"
    ]
  },
  {
    title: "Комплексна програма \"Збалансоване меню\"",
    details: [
      "Ретельний аналіз стану здоров'я та потреб вашого тіла",
      "Розробка 7-денного раціону з урахуванням всіх вподобань",
      "Текстові рекомендації щодо оптимального харчування",
      "Підбір біологічно активних добавок при потребі"
    ]
  },
  {
    title: "Місячний супровід - шлях до довгострокових результатів",
    details: [
      "Індивідуальна програма дій для досягнення ваших цілей",
      "Меню на 4 тижні з можливістю корекції",
      "Щоденне спілкування в текстовому форматі з відповідями на питання і контролем ситуації",
      "Щотижневі дзвінки у форматі міні-лекцій і відповідей на питання, підбір корисних матеріалів",
      "Доступ до корисних матеріалів з нутриціології"
    ]
  }
];

const styles = {
  container: {
    textAlign: 'center',
    padding: '40px'
  },
  header: {
    fontSize: '2.2rem',
    color: '#333',
    marginBottom: '20px'
  },
  cardsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '20px'
  },
  card: {
    width: '30%',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s',
    cursor: 'pointer'
  },
  cardContent: {
    padding: '20px'
  },
  cardHeader: {
    fontSize: '1.5rem',
    color: '#f57c00'
  },
  cardDetails: {
    fontSize: '1rem',
    color: '#666',
    opacity: 0,
    transition: 'opacity 0.3s',
    height: '0',
    overflow: 'hidden'
  },
  detailText: {
    textAlign: 'left',
    lineHeight: '1.5'
  },
  footerText: {
    fontSize: '1.2rem',
    color: '#333',
    marginTop: '20px'
  }
};

// Adding simple hover effects using JavaScript for demonstrative purposes
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.05)';
    card.querySelector('.card-details').style.opacity = '1';
    card.querySelector('.card-details').style.height = 'auto';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
    card.querySelector('.card-details').style.opacity = '0';
    card.querySelector('.card-details').style.height = '0';
  });
});

export default Services;
