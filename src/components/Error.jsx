export default function Error({children}) {


    return (
        <div className="bg-red-500 text-white text-center p-3 uppercase font-semibold mb-3 rounded">
            <p>{children}</p>
        </div>
    )
}
