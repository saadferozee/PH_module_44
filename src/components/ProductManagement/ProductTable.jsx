import React from 'react';

const ProductTable = ({ products }) => {

    return (
        <div className='border-2 p-10'>
            <table className='w-full table-fixed'>
                <thead className=''>
                    <tr className='border'>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.length === 0 ?
                            <tr className='border-b border-[#00000050] dark:border-[#ffffff60]' >
                                <td className='opacity-20'> ---- </td>
                                <td className='border-x border-[#00000020] dark:border-[#ffffff60] opacity-20'> ---- </td>
                                <td className='opacity-20'> ---- </td>
                            </tr> :
                            products.map((product, index) =>
                                <tr key={index} className='border-b border-[#00000050] dark:border-[#ffffff60]' >
                                    <td>{product.product}</td>
                                    <td className='border-x border-[#00000020] dark:border-[#ffffff60]'>{product.price}</td>
                                    <td>{product.quantity}</td>
                                </tr>
                            )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;