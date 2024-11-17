import { TopProps } from '../../Types/types';
import './style.scss';

export const Top = ({scrollToTop}: TopProps) => {

    return (
        <button onClick={scrollToTop} className='top_btn'>
            ▲
        </button>
    );
}
