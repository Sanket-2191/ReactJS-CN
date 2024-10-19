import { useDispatch, useSelector } from "react-redux";

import { alertSelector, resetMessage } from "../redux/reducers/alertReducer.js";
import { useEffect, useId } from "react";

export const Alert = () => {
    const { message } = useSelector(alertSelector);
    const dispatch = useDispatch();
    console.log("on line 9: ", message);
    const id = useId()

    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                dispatch(resetMessage());
                console.log("Message Reset done");

            }, 2000);

            return () => {
                clearTimeout(timer);
                console.log("timer & message: ", { message });
            } // Clean up the timeout on component unmount
        }
    }, [message]); // Properly depend on 'message'

    return (

        message ? <div className="alert" id={id}>{message}</div> : null

    );
};
