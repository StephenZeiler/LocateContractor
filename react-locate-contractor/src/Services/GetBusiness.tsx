import React, { useState } from "react"
import { isConstructorDeclaration } from "typescript";
import { getBusiness } from "./BusinessService"
function GetBusinessData(searchString: any): any {
    const errorMsg = "ERROR: Can not locate " + { searchString };
    console.log("HIT")
    const [businessData, setBusinessData] = useState<any | null>(null)
    const [errorState, setErrorState] = useState<boolean>(false);
    if (searchString) {
        setErrorState(false)
        getBusiness(searchString)
            .then((res) => {
                const business = res
                business && setBusinessData(business)

                console.log(business);
            })
            .catch(() => {
                setErrorState(true)
            })
    }
    else {
        setErrorState(true)
    }
    if (businessData) {


        return (

            { businessData }

        );
    }
    else if (errorState) {
        return (
            { errorMsg }
        )
    }
}

export default GetBusinessData