import React, {useEffect} from 'react';
import useAxios from "../../../hooks/axios.hook";
import axios from "../../../utils/axios/index";
import M from "materialize-css";


const Select = ({idDepartment,nameOfEvent,url,label,onChangeInput}) => {
    const [data, error, loading, refetch] = useAxios({
        axiosInstance: axios,
        method: 'GET',
        url: url,
        requestConfig: {
            headers: {
                'Content-Language': 'en-US',
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
            <div className="input-field ">
                <span style={{color: 'red'}}>{label}</span>
                <select id="selectDepartment" name={nameOfEvent} value={idDepartment} onChange={onChangeSelectVal}>
                    <option  disabled ></option>
                    {data.data && (
                        data.data.map((item) => (
                            <option value={item.id}
                                    key={item.id}
                            >
                                {item.name || item.value}
                            </option>
                        ))
                    )
                    }
                </select>
            </div>
        </div>

    )
}

export default Select;