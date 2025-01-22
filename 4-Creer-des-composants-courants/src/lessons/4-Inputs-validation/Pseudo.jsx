export default function Pseudo({inputsStates, setInputsStates, showValidation}){


    return(
        <>
            <label htmlFor="username" className="text-slate-50 inline-block mt-5">
                Votre pseudo (3-64 caractères)
            </label>
            <input
                id="username"
                type="text"
                className="rounded w-full p-1 mt-2"
                value={inputsStates.pseudo}
                onChange={e => setInputsStates({...inputsStates,
                pseudo: e.target.value})}
            />
            {showValidation.pseudo && (
                <p className="text-red-400 font-semibold">
                    Votre pseudo doit contenir entre 3 et 64 caractères
                </p>
            )}
        </>
    )
}