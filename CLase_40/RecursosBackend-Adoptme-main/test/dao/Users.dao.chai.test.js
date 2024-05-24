import mongoose from "mongoose";
import UsersDao from '../../src/dao/Users.dao.js'
import chai from 'chai'



mongoose.connect(`mongodb://localhost:27017/clase40-adoptme-test?retryWrites=true&w=majority`);

const expect = chai.expect;

describe('Testing Users Dao', () => {

    // before
    before(function () {
        this.usersDao = new UsersDao()
    })

    // beforeeach
    beforeEach(function () {
        this.timeout(5000); //time de espera ya que estamos usando una DB
        mongoose.connection.collections.users.drop();
    })


    //it_01
    it('El dao debe devolver los usuarios en formato arreglo', async function () {
        // Given
        const emptyArray = []

        // Then
        const result = await this.usersDao.get();
        // console.log(`El resultado es un array? : ${Array.isArray(result)}`);

        // Assert
        expect(result).to.be.deep.equal(emptyArray);
        expect(Array.isArray(result)).to.be.ok;
        expect(Array.isArray(result)).to.be.equal(true)
        expect(result.length).to.be.deep.equal(emptyArray.length)

    })


    //it_02
    it('El dao debe agregar un usuario correctamente en la DB', async function () {
        // Given
        let mockUser = {
            first_name: 'Usuario de prueba_01',
            last_name: 'Usuario de prueba_01',
            email: 'test_01@gmail.com',
            password: '123qwe'
        }

        // Then
        const result = await this.usersDao.save(mockUser);
        // console.log(`resultado: ${result}`);

        // Assert
        expect(result._id).to.be.ok

    })

    // after
    // aftereach
    afterEach(function () {
        mongoose.connection.collections.users.drop();
    })
})


// se ejecuta con: npx mocha test/dao/Users.dao.test.js