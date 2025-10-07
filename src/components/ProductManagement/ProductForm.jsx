import React from 'react';

const ProductForm = ({handleSetProducts}) => {

    const handleSubmit = e => {
        e.preventDefault();

        const product = e.target.product;
        const price = e.target.price;
        const quantity = e.target.quantity;

        const productProfile = {product: product.value, price: price.value, quantity: quantity.value};
        handleSetProducts(productProfile);

        product.value = '';
        price.value = '';
        quantity.value = '';
    }

    return (
        <div className='border-2'>
            <form className='my-20 mx-40 flex flex-col gap-2.5' onSubmit={handleSubmit}>
                <input className='border py-1 px-2.5 font-thin' type="text" name="product" required placeholder='Enter Products Name' />
                <input className='border py-1 px-2.5 font-thin' type="number" name="price" required placeholder='Enter Products Price' />
                <input className='border py-1 px-2.5 font-thin' type="number" name="quantity" required placeholder='Enter Quantity' />
                <input className='border bg-[#00000020] py-1 px-2.5 cursor-pointer' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ProductForm;