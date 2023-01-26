import { Reorder, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Colon from "../component/Colon";
import styles from '../styles/index.module.css'



const Index = () => {
    const [items, setItems] = useState([
        { id: 123, name: 'Карты таро', prise: 21340.00, count: 105, trader: 'Таро ООО' },
        { id: 234, name: 'Спрей сыворотка', prise: 2755.00, count: 74, trader: 'ООО "Дальба"' },
        { id: 456, name: 'Свечи для торта', prise: 99000.00, count: 0, trader: 'Ангельев Руслан Степанович' },
        { id: 789, name: 'Лента светодиодная', prise: 19900.00, count: 0, trader: 'Пургин Деонисий Вечиславович' }
    ]);
    const [label, setLabel] = useState([
        { isChec: false },
        { name: 'Название' },
        { id: 'Артикул' },
        { prise: 'Цена в руб' },
        { count: 'Продажа, шт' },
        { ollRevenue: 'Выручка за период' },
        { revenue: 'Выручка руб' },
        { bacRevenue: 'Упущеная выручка' },
        { trader: 'Продавец' }
    ]);

    return (
        <div className={styles.window}>
            <div className={styles.tabel}>
                <Reorder.Group className={styles.tabelBase} values={label} onReorder={setLabel} axis="x">
                    {label.map((el, index) => (
                        <Colon label={el} key={index} elColon={items}>
                        </Colon>
                    ))}
                </Reorder.Group>
            </div>
        </div>

    );
};

export default Index;