import { CryptoHistoryItem } from '../CryptoHistoryItem/CryptoHistoryItem';
import style from './CryptoHistory.module.css';

const CryptoHistory = ({ items }) => {
  return (
    <>
      <table className={style.table}>
        <thead className={style.thead}>
          <tr>
            <th className={style.th}>№</th>
            <th className={style.th}>PRICE</th>
            <th className={style.th}>AMOUNT</th>
            <th className={style.th}>DATE</th>
          </tr>
        </thead>

        <tbody>
          {items.map(({ id, price, amount, date }, index) => (
            <tr className={style.tr} key={id}>
              <CryptoHistoryItem
                index={index}
                price={price}
                amount={amount}
                date={date}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default CryptoHistory;
