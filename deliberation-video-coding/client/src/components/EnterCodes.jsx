import Multiselect from "multiselect-react-dropdown"
import React from "react";
export function EnterCodes({handleSubmit, scheme, handleEntry}) {
    return(
        <div>
            Enter codes:
            <div onClick={handleEntry}>
                <Multiselect onSelect={handleSubmit} options={scheme} displayValue="name" groupBy="category"/>
            </div>
        </div>
    )
}