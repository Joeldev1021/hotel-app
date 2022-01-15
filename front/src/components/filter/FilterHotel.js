import './styles.css';
const FilterHotel = () => {
    return (
        <div className="filter-category">
            <h3>filtrar por: </h3>
            <p>category</p>
            {[1, 2, 3, 4, 5].map((c) => {
                return (
                    <div key={c} className="filter-opcion">
                        <input type="radio" name="category" value={c} id={`category${c}`} />
                        <label htmlFor={`category${c}`}>{c} estrellas</label>
                    </div>
                );
            })}
        </div>
    );
};

export default FilterHotel;
