export default function Password({inputsStates, setInputsStates, showValidation}){


    return(
        <>
            <label htmlFor="password" className="text-slate-50 inline-block mt-5">
                Votre mot de passe (au moins 6 caractères et 1 chiffre)
            </label>
            <input
                id="password"
                type="password"
                className="rounded w-full p-1 mt-2"
                value={inputsStates.password}
                onChange={e => setInputsStates({...inputsStates,
                    password: e.target.value})}
            />
            {showValidation.password && (
                <p className="text-red-400 font-semibold">
                    Votre mot de passe doit contenir au moins 1 chiffre et 6 caractères
                </p>
            )}
        </>
    )
}