import React, {useState} from 'react';
// import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Select } from 'antd';
import data from '../data/dishes.json';

const { Option } = Select;

export default function ChoseRestaurant({ setForm, formData }) {
    const uniqueObjects = [...new Map(data.dishes.map(item => [item.id, item.restaurant])).values()];
    const uniSet = new Set(uniqueObjects);

    const restaurants = [...uniSet];

    console.log(restaurants);

    const { restaurant, setRestaurant } = useState("");

    function handleChange(event) {
        console.log(`selected ${event}`);
        // setRestaurant(event.target.value);
    }

    return (
        <React.Fragment>
        <Grid container spacing={3}>
        <div style={{marginLeft: "100px", marginTop: "40px", marginBottom: "40px"}}>
                        <h2>Please Select a Restaurant</h2>
                        <Select defaultValue={restaurant} style={{ width: 120, marginLeft: "100px" }} onChange={handleChange}>
                            {
                                restaurants.map((res) => (
                                    <Option value={res}>{res}</Option>
                                ))
                            }
                        </Select>
                    </div>
        </Grid>
        </React.Fragment>
    );
}