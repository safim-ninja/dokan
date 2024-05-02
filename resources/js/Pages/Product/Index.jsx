import Main from "@/Layouts/Main";
import {Link} from "@inertiajs/react";

export default function Index({auth, gg, products}) {
    return (
        <>
            <Main user={auth.user} title={'Products'}>
                <div className="flex items-start mt-20 justify-center">
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <Link href={route('products.create')}>
                            <button className={'p-1.5 dark:bg-gray-800 text-gray-400'}>
                                Add Product
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="h-screen flex items-start mt-20 justify-center">
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead
                                className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Product name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Color
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                products.map(function (product, key) {
                                    return (
                                        <tr key={key}
                                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <th scope="row"
                                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {product.name}
                                            </th>
                                            <td className="px-6 py-4">
                                                {product.color}
                                            </td>
                                            <td className="px-6 py-4">
                                                {product.price}
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                {/* <a href="#"
                                                   className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a> */}

                                                <Link href={route('products.delete', product.id)}
                                                   className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</Link>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </Main>
        </>
    )
}
