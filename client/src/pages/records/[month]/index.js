import { useMemo, useState } from "react";
import RecordsMonthComponent from "../../../components/RecordsMonthComponent";
import { useRouter } from "next/router";

export default function Years() {

    const router = useRouter();
    const [month, setProfileId] = useState('');

    const changeUrl = useMemo(() => {
        setProfileId(router.query.month);
    },[router.query.month])

    return (
        <>
            <RecordsMonthComponent month={month}/>
        </>
    )
}