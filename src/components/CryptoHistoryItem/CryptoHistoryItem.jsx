import { format } from 'date-fns';
import style from '../CryptoHistory/CryptoHistory.module.css';

export const CryptoHistoryItem = ({ price, amount, date, index }) => {
  return (
    <>
      <td className={style.td}>{index + 1}</td>
      <td className={style.td}>{price}</td>
      <td className={style.td}>{amount}</td>
      <td className={style.td}>{format(new Date(date), 'Pp')}</td>
    </>
  );
};
