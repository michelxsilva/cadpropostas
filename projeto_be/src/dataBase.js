const dados = {
    _id: 1,
    get id() { return this._id++ }

}

const propostas = {}
function salvarProposta(proposta){
    if(!proposta.id)proposta.id = dados.id
    propostas[proposta.id] = proposta;
    return proposta;
}

function getProposta(id){
    return propostas[id] || {}
}

function getPropostas(){
    return Object.values(propostas)
}


function removeProposta(id){
    delete propostas[id]
}

module.exports = {
    salvarProposta,
    getProposta,
    getPropostas,
    removeProposta
}