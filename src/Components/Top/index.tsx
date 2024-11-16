import './style.scss';

export const Top = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // 부드러운 스크롤 효과
        });
    };

    return (
        <button onClick={scrollToTop} className='top_btn'>
            ▲
        </button>
    );
}
