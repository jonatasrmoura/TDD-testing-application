const bcrypt = require('bcryptjs');

const { User } = require('../../app/models');
const truncate = require('../utils/truncate');

describe('User', () => {
    beforeEach(async () => {
        await truncate();
    });

    it('should encrypt user password', async () => {
        const user = await User.create({
            name: 'Jonatas',
            email: 'jonatas@gmail.com',
            password: 'senhaforte',
        });

        const compareHash = await bcrypt.compare('senhaforte', user.password_hash);

        expect(compareHash).toBe(true);
    });
});
