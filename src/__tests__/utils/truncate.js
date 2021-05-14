// Percorer todas as tabelas no banco de dados e remover

const { sequelize } = require('../../app/models');

module.exports = () => {
    return Promise.all(Object.keys(sequelize.models).map(key => {
        return sequelize.models[key].destroy({ truncate: true, force: true })
    }));
};