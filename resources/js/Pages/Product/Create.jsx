import Main from "@/Layouts/Main";
import {router, useForm} from '@inertiajs/react'


export default function Create({auth, gg, products, csrf_token}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        color: '',
        price: '',
    });
    const create = (e) => {
        e.preventDefault();

        post(route('products.store'));
    };
    return (
        <>
            <Main user={auth.user} title={'Products'}>
                <form className="max-w-md mx-auto mt-10" onSubmit={create}>
                    <input type={"hidden"} name={'_token'} value={csrf_token}/>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="name" id="name"
                               className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-600 appearance-none dark:text-gray-900 dark:border-gray-300 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                               placeholder=" " required
                               onChange={(e) => setData('name', e.target.value)}

                        />
                        <label htmlFor="name"
                               className="peer-focus:font-medium absolute text-sm text-gray-400 dark:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="color" id="color"
                               className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-600 appearance-none dark:text-gray-900 dark:border-gray-300 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                               placeholder=" " required
                               onChange={(e) => setData('color', e.target.value)}

                        />
                        <label htmlFor="color"
                               className="peer-focus:font-medium absolute text-sm text-gray-400 dark:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Color</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="price" id="price"
                               className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-600 appearance-none dark:text-gray-900 dark:border-gray-300 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                               placeholder=" " required
                               onChange={(e) => setData('price', e.target.value)}

                        />
                        <label htmlFor="price"
                               className="peer-focus:font-medium absolute text-sm text-gray-400 dark:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
                    </div>

                    <button type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit
                    </button>
                </form>


                {/*</div>*/}
                {/*    </div>*/}
            </Main>
        </>
    )
}
