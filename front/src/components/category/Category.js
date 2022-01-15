const Category = ({category}) => {
    return (
        <div className="category">
            {
               [1,2,3,4,5].map(c => c  <= category ? <i key={c}  className="fas fa-star"></i> : <i key={c} className="far fa-star"></i>)
            }
        </div>
    )
}

export default Category
