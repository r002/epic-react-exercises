import { useContext } from "react"
import { IconButton } from "components/button"
import { SiPokemon } from "react-icons/si"
import { ThemeContext } from "providers"

const INPUT_STYLE = {
    width: "68%",
    borderWidth: "0px",
    borderRadius: "10px",
    margin: "5px 0px",
    padding: "5px 15px",
}

const ICON_STYLE = {
    width: "32%",
    borderRadius: "10px",
    margin: "5px",
    padding: "10px",
    outline: 0,
}

const FetchSubmitButtonText = () => (
    <>
        <span
            style={{
                fontSize: "0.6rem",
            }}
        >
            Fetch <br /> that
        </span>
        <span
            style={{
                fontSize: "4rem",
                paddingTop: "15px",
                margin: "10px 5px",
            }}
        >
            <SiPokemon />
        </span>
    </>
)
const PokemonSearchSection = () => {
    const { primaryColor, bodyClassNames, bodyFont } = useContext(ThemeContext)

    return (
        <>
            <p style={{ fontSize: "12px" }}>Try Pikachu, Charizard, Bulbasaur...</p>
            <form style={{ display: "flex" }}>
                <input
                    className={bodyClassNames[0]}
                    style={{ ...INPUT_STYLE, fontFamily: bodyFont, margin: "5px" }}
                    placeholder="write the pokemon name here..."
                />
                <IconButton
                    onClick={() => alert("hello!")}
                    isInvertedColor={true}
                    style={{
                        ...ICON_STYLE,
                        backgroundColor: primaryColor,
                        fontFamily: bodyFont,
                    }}
                >
                    <FetchSubmitButtonText />
                </IconButton>
            </form>
        </>
    )
}

export default PokemonSearchSection