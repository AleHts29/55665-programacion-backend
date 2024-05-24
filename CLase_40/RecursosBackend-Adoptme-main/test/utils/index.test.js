import chai from 'chai';
import { createHash } from '../../src/utils/index.js'



const expect = chai.expect;


describe('Test de la libreria de Encriptacion de Utils - bcrypt', () => {

    // before

    // beforeEach


    it('La funcion de encriptacion debe poder generar un password encriptado.', async function () {

        // Given
        const passwordMock = '123qwe'

        // Then
        const result = await createHash(passwordMock)
        console.log(`Resultado obtenido con createHash: ${result}`);


        // Assert that
        expect(result).not.to.be.NaN;
        expect(result).not.to.be.undefined;
        expect(result).not.to.be.null;
        expect(result).not.to.be.empty;
        expect(result).not.equal(passwordMock);


    })

})