import React, {useEffect, useState} from 'react';

const Checkbox = ({
                      setCheckBoxValHandler,
                      setFormRoleHandler,
                      color,
                      checkBoxVal
                  }) => {


    const [checkedTeach, setCheckedTeach] = useState(true)
    const [checkedHead, setCheckedHead] = useState(false)
    const [checkedEmployer, setCheckedEmployer] = useState(false)

    useEffect(() => {
        if (checkBoxVal) {
            switch (checkBoxVal) {
                case 'TEACHER':
                    setCheckedTeach(true)
                    setCheckedEmployer(false)
                    setCheckedHead(false)
                    return
                case 'DEPARTMENT_HEAD':
                    setCheckedHead(true)
                    setCheckedTeach(false)
                    setCheckedEmployer(false)
                    return
                case 'SCIENTIFIC_EMPLOYER':
                    setCheckedEmployer(true)
                    setCheckedTeach(false)
                    setCheckedHead(false)
                    return
            }
        }
    }, [checkBoxVal])

    const handleChangeCheckedTeach = (event) => {
        setCheckedTeach(true)
        setCheckedEmployer(false)
        setCheckedHead(false)

        setCheckBoxValHandler(event.target.value)
        setFormRoleHandler(event.target.value)
    }

    const handleChangeCheckedHead = (event) => {
        setCheckedHead(true)
        setCheckedTeach(false)
        setCheckedEmployer(false)

        setCheckBoxValHandler(event.target.value)
        setFormRoleHandler(event.target.value)
    }

    const handleChangeCheckedEmployer = (event) => {
        setCheckedEmployer(true)
        setCheckedTeach(false)
        setCheckedHead(false)

        setCheckBoxValHandler(event.target.value)
        setFormRoleHandler(event.target.value)
    }


    return (
        <div className={''}>
            <p>
                <label>
                    <input type="checkbox" className="filled-in"
                           name={'role'}
                           value={'TEACHER'}
                           checked={checkedTeach}
                           onChange={handleChangeCheckedTeach}/>
                    <span style={{color: color}}>Викладач</span>
                </label>
            </p>
            <p>
                <label>
                    <input type="checkbox" className="filled-in"
                           name={'role'}
                           value={'DEPARTMENT_HEAD'}
                           checked={checkedHead}
                           onChange={handleChangeCheckedHead}/>
                    <span style={{color: color}}>Начальник кафедри</span>
                </label>
            </p>
            <p>
                <label>
                    <input type="checkbox" className="filled-in"
                           name={'role'}
                           value={'SCIENTIFIC_EMPLOYER'}
                           checked={checkedEmployer}
                           onChange={handleChangeCheckedEmployer}/>
                    <span style={{color: color}}>Представник навчального відділу</span>
                </label>
            </p>
        </div>
    );
};

export default Checkbox;