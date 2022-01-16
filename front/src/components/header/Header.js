import './styles.css';
const Header = ({ refFilter }) => {
    const handleClick = () => {
        refFilter.current.classList.toggle('show');
    };

    return (
        <header className='header'>
            <h1 className="title"><i className="fas fa-home"></i>otel-App</h1>
            <button onClick={() => handleClick()}><i className="fas fa-ellipsis-v"></i></button>
        </header>
    );
};

export default Header;
