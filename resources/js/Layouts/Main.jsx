import Navbar from "@/Components/Navbar";
import {Head} from "@inertiajs/react";

export default function Main({user, title, children}) {
    return (
        <>
            <Head title={title}/>
            <Navbar page={title} user={user}/>
            <main>{children}</main>
        </>
    )
}
