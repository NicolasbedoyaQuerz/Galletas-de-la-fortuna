const Fortune= ({ PhrasesData }) => {


    return (
        <div>
            <div className="phrases-fondo">
                <h1>{PhrasesData.phrase}</h1>
                <h3>{PhrasesData.author}</h3>
            </div>
        </div>
    )
}

export default Fortune