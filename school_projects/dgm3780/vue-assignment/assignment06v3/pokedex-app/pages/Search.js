import React, {useState, useEffect} from "react";
import Link from "next/link";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Layout from "./Layout";
import TextField from "@material-ui/core/TextField";

const layoutStyle = {
    margin: 20,
    padding: 20
};
const linkStyle = {
    textDecoration: "none",
};
const pokemonCard = {
    width: "100px",
    padding: "20px",
    textAlign: "center",
    marginRight: "1rem",
    marginTop: "1rem",
    boxShadow: "6px darkgrey",
    borderRadius: "20px",
    fontFamily: "Avenir",
    color: "black",
    backgroundColor: "#ebebeb"
};
const cardTitle = {
    margin: "0",
    fontWeight: "800",
};
const textField = {
    width: "500px",
    marginBottom: "1rem",
    autoCapitalize: 'none',
};

const PokemonCards = props => {
    return (
        <Grid item xs={6} sm={2}>
            <Paper style={pokemonCard}>
                <h3 style={cardTitle}>{props.name.charAt(0).toUpperCase() +
                props.name.slice(1)}</h3>
            </Paper>
        </Grid>
    )
};

const Search = props => {

    const [input, setSearchInput] = useState('');
    const [searchItems, setSearchItems] = useState([]);

    const handleChange = event => {
        setSearchInput(event.target.value)
    };

    useEffect(() => {
        const results = props.pokemon.filter(pokeman =>
            pokeman.name.toLowerCase().includes(input)
        );
        setSearchItems(results);
    }, [input]);

    return (
        <Layout>
            <Grid container direction="row" justify="center" alignItems="center">
                <TextField style={textField} id="outlined-basic" label="Search Pokémon" variant="outlined" value={input.toLowerCase()} onInput={handleChange}  />
            </Grid>
            <Grid container direction="row" justify="center" alignItems="center">
                {searchItems.map((details, i) => {
                    return (
                        <Link href={`pokemon/${details.key + 1}`} as={`pokemon/${details.key + 1}`}>
                            <a style={linkStyle}>
                                <PokemonCards name={details.name} key={details.key + 1}/>
                            </a>
                        </Link>
                    )
                })}
            </Grid>
        </Layout>

    )
};

export default Search;