import React, { useState } from 'react';
// import Grid from '@material-ui/core/Grid';

import { Select, InputNumber } from 'antd';
import { Form, Button } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

import data from '../data/dishes.json';

const { Option } = Select;

export default function ChoseRestaurant() {

    const uniqueObjects = [...new Map(data.dishes.map(item => [item.id, item.name])).values()];
    const uniSet = new Set(uniqueObjects);

    const dishs = [...uniSet];

    console.log(dishs);

    const [inputList, setInputList] = useState([{ name: "", num: ""}]);

    const { dish, setDish } = useState("");

    const handleChange = (event) => {
        // setRestaurant(event.target.value);
    };

    function onChange(value) {
        console.log('changed', value);
        // setNumPeople(value)
    }

    // const handleInputChange = (e, index) => {
    //     const { name, value } = e.target;
    //     const list = [...inputList];
    //     list[index][name] = value;
    //     setInputList(list);
    // };
       
    // handle click event of the Remove button
    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };
       
    // handle click event of the Add button
    const handleAddClick = () => {
        setInputList([...inputList, { firstName: "", lastName: "" }]);
    };

    return (
        <React.Fragment>
            <div>
                {inputList.map((x, i) => {
                    return (
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
                            <div style={{ marginRight: "10px" }}>
                                <h3>Please Select a Dish</h3>
                                <Select defaultValue={dish} name="name" style={{ width: 200 }} onChange={onChange}> 
                                    {
                                        dishs.map((res) => (
                                            <Option value={res}>{res}</Option>
                                        ))
                                    }
                                </Select>
                            </div>
                            <div style={{marginLeft: "10px"}}>
                                <h3>Please enter no. of servings</h3>
                                <InputNumber
                                    name="num"
                                    min={1} 
                                    max={10}
                                    defaultValue={1} 
                                    onChange={onChange} 
                                />
                            </div>
                            <div style={{width: '20px', marginLeft: '40px'}}>
                                {inputList.length !== 1 && <MinusCircleOutlined style={{fontSize: '20px'}}
                                    className="dynamic-delete-button"
                                    onClick={() => handleRemoveClick(i)}
                                />}
                            </div>
                        </div>
                    )
                })}
                <Form.Item>
                    <Button
                        type="dashed"
                        onClick={handleAddClick}
                        style={{ width: '60%', marginTop: '20px', marginLeft: '33px'}}
                        icon={<PlusOutlined />}
                    >
                        Add a dish
                    </Button>
                    {/* <Form.ErrorList errors={errors} /> */}
                </Form.Item>
            </div>
        </React.Fragment>
    );
}