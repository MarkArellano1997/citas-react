export default function Paciente() {
    return (
        <div className="mx-5 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
                <span className="font-normal normal-case">Hook</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
                <span className="font-normal normal-case">Marcos</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
                <span className="font-normal normal-case">correo@correo.com</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
                <span className="font-normal normal-case">10 Diciembre de 2022</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
                <span className="font-normal normal-case">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, vitae minima soluta quas nam ea corporis enim aspernatur! Quas maiores dolorem exercitationem quos consectetur modi consequatur blanditiis facilis neque eius?</span>
            </p>
        </div>
    )
}
