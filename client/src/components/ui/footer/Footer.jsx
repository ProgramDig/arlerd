import React from 'react';
import classes from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer className="page-footer blue darken-1 ">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text">Програмний продукт "Arlerd"</h5>
                        <p className="grey-text te
                        xt-lighten-4"><a className="grey-text text-lighten-3" href="https://www.viti.edu.ua/" target="_blank">
                            Офіційний сайт інституту
                        </a></p>
                        <p className={classes.footerPart}>© 2023 Кафедра інформаційних технологій | ВВНЗ "ВІТІ імені Героїв Крут"</p>

                    </div>
                    <div className="col l4 offset-l2 s12">
                        <h5 className="white-text">Корисні посилання</h5>
                        <ul>
                            <li><a className="grey-text text-lighten-3" href="https://www.president.gov.ua/" target="_blank">Президент України</a></li>
                            <li><a className="grey-text text-lighten-3" href="https://www.rada.gov.ua/" target="_blank">Верховна рада України</a></li>
                            <li><a className="grey-text text-lighten-3" href="https://www.kmu.gov.ua/" target="_blank">Кабінет Міністрів України</a></li>
                            <li><a className="grey-text text-lighten-3" href="https://www.rnbo.gov.ua/" target="_blank">РНБО України</a></li>
                            <li><a className="grey-text text-lighten-3" href="https://www.kmu.gov.ua/uryadova-garyacha-liniya-1545" target="_blank">Урядова Гаряча лінія</a></li>
                            <li><a className="grey-text text-lighten-3" href="https://data.gov.ua/" target="_blank">Єдиний державний вебпортал відкритих даних</a></li>
                        </ul>
                    </div>

                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    ß-версія. Деякі розділи сайту працюють у тестовому режимі
                    <a className="grey-text text-lighten-4 right">Адреса: Вулиця Князів Острозьких 45/1, Київ, 01021</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;