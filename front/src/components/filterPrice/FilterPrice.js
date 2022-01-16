
const FilterPrice = () => {
    return (
        <div className="filter-price">
            <h3>filtrar por: </h3>
            <p>price</p>
            {[1, 2, 3, 4, 5].map((c) => {
                return (
                    <div key={c} className="filter-opcion">
                        <input type="checkbox" name="price" id={`price${c}`} />
                        <label htmlFor={`price${c}`}>{c}</label>
                    </div>
                );
            })}
        </div>
    );
};

export default FilterPrice;
