import React from 'react';
import { Grid } from '@material-ui/core';
import Item from '../Item/Item';


 const ItemList = props => {
    const { articulos } = props;

    return<> 

          {
            <Grid container>
                <Grid item xs={12}>
                    <Grid container justify="center" >
                        {articulos.map((element) => <Item
                        key={element.id}
                        element={element}
                        />)
                        }
                    </Grid>
                </Grid>
            </Grid>
        }
    
    </>
}

export default ItemList;