import Sidebar from "@/Components/AdminComponents/Sidebar";

export default function Layout({children}){
    return (
        <>
            <div className="flex">
                <h1>Hello</h1>
            </div>
            {children}
        </>
    )
}