import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars3.githubusercontent.com/u/25845947?s=460&u=ab486be4712e172acf46e3d8bcc25f16d17b924c&v=4"
          alt="André Mediote"
        />
        <div>
          <strong>André Mediote</strong>
          <span>Quimica</span>
        </div>
      </header>
      <p>
        Entusiasta das melhores técnologias de quimica avançada.
        <br /> <br />
        Apaixonado por expplodir coisas em laboratório e por mudar a vida das
        pessoas através de experiências.
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
