
import { useEffect, useState } from 'react';
import './styles.css';
const FilterHotel = ({ handleFilterCategory }) => {
    const [categorys, setCategorys] = useState([]);

    const handleCheckbox = (e) => {
        // value parseInt
        const value = parseInt(e.target.value);
        if (e.target.checked) {
            setCategorys([...categorys, value]);
        } else {
            setCategorys(categorys.filter(category => category !== value));
        }
    };

    useEffect(() => {
        handleFilterCategory(categorys);
    }, [categorys]);

    return (
        <div className="filter-category">
            <h3>filtrar por: </h3>
            <p>category</p>
            {[1, 2, 3, 4, 5].map((c) => {
                return (
                    <div key={c} className="filter-opcion">
                        <input type="checkbox" onChange={(e) => handleCheckbox(e)} value={c} id={`category${c}`} />
                        <label htmlFor={`category${c}`}>{c} estrellas</label>
                    </div>
                );
            })}
        </div>
    );
};

export default FilterHotel;
