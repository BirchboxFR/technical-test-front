import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Typography, Button, Grid, Card, IconButton, CardMedia } from '@mui/material';
import withStyles from '@mui/styles/withStyles';
import {useContext} from 'react'
import GlobalContext from '../state/global-context';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteIcon from '@mui/icons-material/Delete';
import {useEffect, useState} from "react";

const useStyles = theme => ({
    interstitial: {
        width: "350px",
        padding: theme.spacing(2)
    },
    productListContainer: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },

    productItem: {
        padding: theme.spacing(2),
        position: 'relative',
        display: "flex",

    },

    productItemImg: {
        width: "100px",
        height: "auto",
        maxHeight: "90px",
        marginRight: theme.spacing(2),
    },

    deleteIcon: {
        position: "absolute",
        right: 0,
        bottom: 0,
    }
});

const Interstitial = props => {
    const {classes} = props;
    const context = useContext(GlobalContext);
    const cart = context.cart
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        getTotalPrice()
    })

    const handleRemoveProduct = id => {
        context.removeProductToCart(id)
    }

    const getTotalPrice = () => {
        let totalPrice = 0;
        cart.map(p => {
            totalPrice += p.price
        })
        return setTotalPrice(totalPrice)
    }

    return (
        <SwipeableDrawer
            anchor={'right'}
            open={context.open_interstitial}
            onClose={() => context.pushObject('open_interstitial', false)}
            onOpen={() => context.pushObject('open_interstitial', false)}
        >
            <div className={classes.interstitial}>
                <Grid container alignItems="center" className={classes.productListContainer}>
                    <Grid item>
                        <IconButton
                            onClick={() => context.pushObject('open_interstitial', false)}
                            size="large">
                            <ArrowBackIcon color="secondary"/>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <Typography variant="h5">Mon panier</Typography>
                    </Grid>
                </Grid>

                <Grid container spacing={2} className={classes.productListContainer}>

                    <Grid item xs={12}>
                        <Typography>
                            {context.cart.length > 1 ? `${context.cart.length} produits`  : `${context.cart.length} produit`}
                        </Typography>
                    </Grid>

                    {cart.map((product, index) => (
                        <Grid item xs={12} key={index}>
                            <Card className={classes.productItem}>
                                <CardMedia
                                    component="img"
                                    alt={product.title}
                                    image={product.image}
                                    title="Contemplative Reptile"
                                    className={classes.productItemImg}
                                />
                                <div className={classes.productItemContent}>
                                    <Typography>{product.title}</Typography>
                                    <Typography>{product.price}euros</Typography>
                                    <IconButton
                                        onClick={() => handleRemoveProduct(product.id)}
                                        className={classes.deleteIcon}
                                        size="large">
                                        <DeleteIcon color="secondary"/>
                                    </IconButton>
                                </div>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                <Typography gutterBottom>Prix total : {totalPrice} {totalPrice > 1 ? "euros" : "euro"}</Typography>
                <Button color="primary" variant="contained">Commander</Button>
            </div>
        </SwipeableDrawer>
    );
}

export default withStyles(useStyles)(Interstitial)