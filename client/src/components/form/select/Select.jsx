import React, {useEffect} from 'react';
import useAxios from "../../../hooks/axios.hook";
import axios from "../../../utils/axios/index";
import M from "materialize-css";



const Select = ({idDepartment , idYear,nameOfEvent,url,label,onChangeInput , color}) => {

    const [data, error, loading, refetch] = useAxios({
        axiosInstance: axios,
        method: 'GET',
        url: url,
        requestConfig: {
            headers: {
                'Content-Language': 'ua-UA',
                'Accept': 'text/html'
            }
        }
    });
    useEffect(() => {
        M.AutoInit()
    }, [data.data])

    const onChangeSelectVal = (e) => {
        onChangeInput(e)
    }

    return (
        <div className={'col s6'}>
            <div className="input-field white-text">
                <span className={color}>{label}</span>

                <select id="selectDepartment" className={'plain-text blue-grey'} name={nameOfEvent} onChange={onChangeSelectVal} defaultValue="">
                    <option value="" disabled>Оберіть</option>
                    {data.data && data.data.map((item, i) => (
                            <option value={item.id} key={item.id}>
                                {item.value || item.name}
                            </option>
                    ))}
                </select>
            </div>
        </div>

    )
}

export default Select;