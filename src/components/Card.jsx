import React from 'react'


const Card = () => {

    return (
        <>
            <div className="card" style={{ width: '18rem' }}>
                <img src="https://picsum.photos/seed/picsum/200/100" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Ben bir kitapim</h5>
                    <p className="card-text">Ben efsanevi bir kitapim</p>
                    <a href="#" className="btn btn-primary" onClick={addToCard}>Sepete Ekle</a>
                </div>
            </div>
            
        </>
    )
}

export default Card