import Navbar from "@/Components/Navbar";

export default function Main({user, page, children}) {
    return (
        <>
            <Navbar page={page} />
            <h1>{user.name}</h1>
            <main>{children}</main>
            <div>
            </div>
        </>
    )
}