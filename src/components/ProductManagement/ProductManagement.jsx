import React, { useState } from 'react';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';

const ProductManagement = () => {

    const [products, setProducts] = useState([]);
    const handleSetProducts = productProfile => {
        const updateProducts = [...products, productProfile];
        setProducts(updateProducts);
    }

    return (
        <div className='p-20 flex flex-col gap-18'>
            <h3 className='font-extralight text-5xl'>Product Adding Form</h3>
            <ProductForm handleSetProducts={handleSetProducts}></ProductForm>
            <hr className='border'/>
            <h3 className='font-extralight text-5xl'>Product Table</h3>
            <ProductTable products={products}></ProductTable>
        </div>
    );
};

export default ProductManagement;