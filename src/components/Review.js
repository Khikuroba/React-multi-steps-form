import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const demoData = {
    meal: 'lunch',
    numPeople: 3,
    restaurant: 'Restaurant A',

    dishes: [
        {
            name: 'Dish A',
            num: 1
        },
        {
            name: 'Dish B',
            num: 2
        },
        {
            name: 'Dish C',
            num: '3'
        }
    ]
}


export default function Review() {

    return (
        <React.Fragment>
            <Typography variant="h5" gutterBottom style={{marginLeft: '24px', textAlign: 'center'}}>
                Order summary
            </Typography>
            <Grid container spacing={2} style={{marginLeft: '40px', paddingRight: '80px', marginBottom: '40px', fontSize: '16px'}}>
                <Grid item xs={12} sm={6}>
                    <div style={{marginTop: '20px'}}>Meal</div>
                    <div style={{marginTop: '20px'}}>No of. People</div>
                    <div style={{marginTop: '20px'}}>Restaurant</div>
                    <div style={{marginTop: '20px'}}>Dishes</div>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div style={{marginTop: '20px'}}>{demoData.meal}</div>
                    <div style={{marginTop: '20px'}}>{demoData.numPeople}</div>
                    <div style={{marginTop: '20px'}}>{demoData.restaurant}</div>
                    <div style={{marginTop: '20px', border: '2px solid gray', borderRadius: '4px', padding: '8px'}}>
                        {
                            demoData.dishes.map( e => {
                                return (
                                <div>{e.name}  -  {e.num}</div>
                                )
                            })
                        }
                    </div>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}