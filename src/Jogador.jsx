const Jogador = ({nome, posicao, camisa, time, imagem}) => {
    return(
        <>
            <div className="div-jogador">
                <img src={imagem}/>
                <h2>Nome: {nome}</h2>
                <p>Posição: {posicao}</p>
                <p>Camisa: {camisa}</p>
                <p>Time: {time}</p>
            </div>
        </>
    )
}

export default Jogador;