import React from 'react'
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {useStyles} from "../App";


const PokemonList = ({pokemonList}) => {

    const classes = useStyles();
    console.log(pokemonList)
    const pokeList = Object.values(pokemonList);
    const pokeGrid = pokeList.map(data => (
        <Grid item key={data.id} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.cardMedia}
                    image={data.imageURL}
                    title={data.name}
                />
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2" align={"center"} >
                        {data.id} - {data.name.toUpperCase()}
                    </Typography>
                    <Typography variant="body1" color="textPrimary" component="p">
                        Types:

                        {data.types.map(type => (
                            <Typography variant={"body2"} color={"textSecondary"}>
                                {type.name}
                            </Typography>
                        ))}
                    </Typography>
                    <Typography variant="body1" color="textPrimary" component="p">
                        Weight: <Typography variant={"body2"} color={"textSecondary"}>{data.weight}</Typography>
                    </Typography>
                    <Typography variant="body1" color="textPrimary" component="p">
                        Description: <Typography variant={"body2"} color={"textSecondary"}>{data.description}</Typography>
                    </Typography>
                    <Typography variant="body1" color="textPrimary" component="p">
                        Evolutions:

                        {data.evolutions.map(evo => (
                            <Typography variant={"body2"} color={"textSecondary"}>
                                {evo.name}
                            </Typography>
                        ))}
                    </Typography>
                </CardContent>
            </Card>
        </Grid> ));

    return (
        <Grid container spacing={7}>
            {pokeGrid}
        </Grid>
    )
}



export default PokemonList