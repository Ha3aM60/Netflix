import "./style/Footer.css";

export const Footer = () => {
    return (
        <>
            <div className="wrapper-footer">
               
                <div className='footer'>
                    <p className='ques'>Маєте запитання? Зателефонуйте за номером 0800-509-416</p>

                    <div className="column-wrapper">
                        <div className="column">
                            <div className="column-text">
                                Поширені запитання
                            </div>
                            <div className="column-text">
                                Зв’язки з інвесторами
                            </div>
                            <div className="column-text">
                                Конфіденційність
                            </div>
                            <div className="column-text">
                                Перевірка швидкості
                            </div>
                        </div>
                        <div className="column">
                            <div className="column-text">
                                Довідковий центр
                            </div><div className="column-text">
                                Вакансії
                            </div><div className="column-text">
                                Налаштування файлів cookie
                            </div><div className="column-text">
                                Юридичні повідомлення
                            </div>
                        </div>
                        <div className="column">
                            <div className="column-text">
                                Обліковий запис
                            </div><div className="column-text">
                                Способи перегляду
                            </div><div className="column-text">
                                Корпоративна інформація
                            </div><div className="column-text">
                                Тільки на Netflix
                            </div>

                        </div>
                        <div className="column">
                            <div className="column-text">
                                Медіацентр
                            </div><div className="column-text">
                                Умови використання
                            </div><div className="column-text">
                                Зв’язатися з нами
                            </div>
                        </div>

                    </div>
                    <div className="column-text bottom-text">FlexWatch Україна</div>
                </div>

            </div>
        </>
    )
}