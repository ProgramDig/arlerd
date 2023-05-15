import React, {useEffect} from 'react';
import useAxios from "../../../hooks/axios.hook";
import axios from "../../../utils/axios/index";
import M from "materialize-css";


const Select = ({scientificTeacher,nameOfEvent,url,label,onChangeInput}) => {
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
        <div className="input-field col s12">
            <select id="selectRank"  name={nameOfEvent} value={scientificTeacher[nameOfEvent]} onChange={onChangeSelectVal}>
                {data.data && (
                    data.data.map((item) => (
                        <option value={item.id}
                                key={item.id}
                                >
                            {item.value}
                        </option>
                    ))
                )
                }
            </select>
            <label htmlFor={'selectRank'}><span style={{color: 'red'}}>{label}</span></label>
        </div>
    )
}

export default Select;