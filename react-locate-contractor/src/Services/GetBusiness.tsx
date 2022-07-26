import React, { useEffect, useState } from "react"
import { JsxElement } from "typescript";
import { business } from "../Pages/BusinessCard";
import { getBusiness } from "./BusinessService"
import BusinessCard from "../Pages/BusinessCard"
function GetBusinessData(searchString: any): JSX.Element {
    const errorMsg = "ERROR: Can not locate " + { searchString };
    const [businessData, setBusinessData] = useState<business>()


    useEffect(() => {
        getBusiness("TEST1")
            .then((res) => {
                const business = res.data[0]
                console.log(res)
                business && setBusinessData(business)
            })
    }, [])




    return (
        < div >

            {businessData && (businessData).businessName && <BusinessCard title="Business Name:" body={(businessData).businessName} cardWidth={500} cardHeight={140} actionHeight={0} > </BusinessCard>}
            {businessData && (businessData).businessName && <BusinessCard title="Specialty:" body={(businessData).specialty} cardWidth={500} cardHeight={140} actionHeight={0} > </BusinessCard>}
            {businessData && (businessData).businessName && <BusinessCard title="Hours of Operation::" body={(businessData).hoursOperation} cardWidth={500} cardHeight={140} actionHeight={0} > </BusinessCard>}
            {businessData && (businessData).businessName && <BusinessCard title="Contact Information:" body={"Phone:" + (businessData).phoneContact + " " + "Email: " + (businessData).emailContact} cardWidth={500} cardHeight={160} actionHeight={0} > </BusinessCard>}
            {businessData && (businessData).businessName && <BusinessCard title="Services:" body={(businessData).services} cardWidth={500} cardHeight={300} actionHeight={360} > </BusinessCard>}
            {businessData && (businessData).businessName && <BusinessCard title="About:" body={(businessData).about} cardWidth={500} cardHeight={300} actionHeight={360} > </BusinessCard>}

        </div >

    );


}

export default GetBusinessData