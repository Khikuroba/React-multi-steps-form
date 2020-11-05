import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
import 'antd/dist/antd.css';
// import Select from '@material-ui/core/Select';
// import MenuItem from '@material-ui/core/MenuItem';
// import InputLabel from '@material-ui/core/InputLabel';
// import { makeStyles } from '@material-ui/core/styles';
import { InputNumber } from 'antd';
import { Select } from 'antd';
// import data from '../data/dishes.json';

const { Option } = Select;
const ChoseMeal = ({ setForm, formData }) => {

    // const uniqueObjects = [...new Map(data.dishes.map(item => [item.id, item.restaurant])).values()];
    // const uniSet = new Set(uniqueObjects);

    // const restaurants = [...uniSet];

    // console.log(restaurants);

    const { meal, setMeal } = useState('');
    const { numPeople, setNumPeople } = useState('3');  

    function handleChange(value) {
        console.log(`selected ${value}`);
        // setMeal(value);
    }

    function onChange(value) {
        console.log('changed', value);
        // setNumPeople(value)
    }

    return (
        <React.Fragment>
            <Grid container spacing={6}>
                <div style={{marginLeft: "100px", marginTop: "80px", marginBottom: "40px"}}>
                    <h2>Please Select a meal</h2>
                    {/* <Select
                        style={{marginLeft: "100px"}}
                        labelId="meal"
                        id="meal"
                        value={meal}
                        label="breakfast"
                        onChange={setForm}
                        >
                        <MenuItem value={'breakfast'}>Breakast</MenuItem>
                        <MenuItem value={'lunch'}>Lunck</MenuItem>
                        <MenuItem value={'dinner'}>Dinner</MenuItem>
                    </Select> */}
                    <Select defaultValue={meal} style={{ width: 120, marginLeft: "100px" }} onChange={handleChange}>
                        <Option value="breakfast">Breakfast</Option>
                        <Option value="lunch">Lunch</Option>
                        <Option value="dinner">Dinner</Option>
                    </Select>
                </div>
                <div style={{marginLeft: "100px", marginBottom: "100px"}}>
                    <h2>Please Enter Number Of People</h2>
                    <InputNumber
                        style={{marginLeft: "100px"}}
                        min={1} 
                        max={10}
                        defaultValue={numPeople} 
                        onChange={onChange} 
                    />
                </div>
            </Grid>
        </React.Fragment>
    );    
}

export default ChoseMeal;